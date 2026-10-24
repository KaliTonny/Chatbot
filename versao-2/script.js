// ===== Dados do projeto =====
const empresa = {
  nome: "Turismo 360°",
  local: "Candeias, Bahia",
  finalidade: "apresentar atrações, história e informações úteis para moradores e visitantes",
  canais: "página Contato do site"
};

// Cada assunto tem palavras-chave (termos, sem acento e em minúsculas) e uma resposta pronta.
// O campo "id" indica a categoria da barra lateral à qual o assunto pertence.
const servicos = [
  {id:"visitas", titulo:"Lugares para visitar", termos:["ponto turistico","pontos turisticos","visitar","atracao","atracoes","passeio","passeios","igreja","santuario","matriz"], resposta:"Uma sugestão para começar é a Igreja Matriz/Santuário de Nossa Senhora das Candeias, importante referência religiosa e cultural da cidade. Explore também os locais cadastrados na seção Explorar e confira a localização antes da visita."},
  {id:"cultura", titulo:"História e cultura", termos:["historia","cultura","origem","tradicao","tradicoes"], resposta:"A identidade de Candeias está ligada à devoção a Nossa Senhora das Candeias e à história do Recôncavo Baiano. O município integra a Região Metropolitana de Salvador e reúne referências religiosas, culturais e econômicas que ajudam a contar sua trajetória."},
  {id:"cultura", titulo:"Eventos", termos:["evento","eventos","festa","festas","agenda","show","shows","programacao"], resposta:"Para saber o que acontece em cada data, consulte a área de eventos do site e os canais oficiais da Prefeitura de Candeias. Datas e horários podem mudar, por isso é importante confirmar antes de sair."},
  {id:"servicos", titulo:"Alimentação", termos:["restaurante","restaurantes","comer","comida","lanche","almoco","jantar"], resposta:"Na seção Explorar, procure restaurantes e opções de alimentação em Candeias. Antes de ir, confirme endereço, horário de funcionamento e preços com o estabelecimento."},
  {id:"servicos", titulo:"Hospedagem", termos:["hotel","hoteis","pousada","pousadas","hospedagem","hospedar","pernoite"], resposta:"Para se hospedar, compare hotéis e pousadas da região e confirme diretamente com cada local a disponibilidade, os valores e os serviços oferecidos."},
  {id:"servicos", titulo:"Horários e preços", termos:["horario","horarios","preco","precos","valor","valores","confirmar","funcionamento","aberto"], resposta:"Eu não tenho horários, preços ou disponibilidade confirmados. Antes de sair, confirme essas informações diretamente com o estabelecimento ou nos canais oficiais, porque podem mudar."},
  {id:"planejamento", titulo:"Mapa e rota", termos:["mapa","rota","gps","endereco","localizacao","como chegar","chegar","google maps"], resposta:"Abra Explorar no Turismo 360°, selecione o ponto desejado e use a opção de mapa, quando disponível. O Google Maps pode ajudar a conferir a rota, o trajeto e a localização atual."},
  {id:"inicio", titulo:"Sobre o projeto", termos:["turismo 360","projeto","site","objetivo","como funciona"], resposta:`O ${empresa.nome} é uma plataforma que busca ${empresa.finalidade}. A proposta é facilitar a descoberta de lugares e valorizar o turismo local.`},
  {id:"inicio", titulo:"Conta e perfil", termos:["cadastro","cadastrar","login","entrar","conta","perfil","senha"], resposta:"O site possui páginas de cadastro, login e perfil para o usuário. Se tiver dúvidas sobre sua conta, utilize a página Contato."},
  {id:"inicio", titulo:"Contato", termos:["contato","email","telefone","suporte","falar com"], resposta:`Para dúvidas relacionadas ao projeto, utilize a ${empresa.canais}. Confira ali os canais de contato disponíveis.`},
  {id:"inicio", titulo:"Ajuda", termos:["ajuda","ajudar","assunto","assuntos","responde","responder","o que voce faz","menu"], resposta:"Posso responder sobre lugares para visitar, história e cultura, eventos, restaurantes, hospedagem, horários, mapa e rota, e sobre o próprio Turismo 360°. Escolha uma categoria ao lado ou digite sua pergunta."},
  {id:"inicio", titulo:"Saudação", termos:["oi","ola","bom dia","boa tarde","boa noite"], resposta:"Olá! Sou o guia virtual do Turismo 360°. Você pode escolher uma categoria ao lado ou me perguntar sobre lugares, história, eventos, restaurantes, hospedagem e mapas."},
  {id:"inicio", titulo:"Agradecimento", termos:["obrigado","obrigada","valeu","agradecido"], resposta:"De nada! Boa exploração e aproveite sua visita a Candeias."}
];

const respostaPadrao = "Não encontrei essa informação no conteúdo do guia. Tente perguntar sobre lugares para visitar, história, eventos, restaurantes, hospedagem ou mapa. Para outros assuntos, use a página Contato do site.";

const sugestoesPorCategoria = {
  inicio: ["O que é o Turismo 360°?", "Quais assuntos você responde?", "Como entro em contato?"],
  visitas: ["Quais lugares posso visitar?", "Quero conhecer a igreja matriz", "Como vejo o mapa?"],
  cultura: ["Conte a história de Candeias", "Quais eventos acontecem na cidade?", "Quero saber sobre a cultura local"],
  servicos: ["Onde encontro restaurantes?", "Como procuro hotéis e pousadas?", "Como confirmo os horários?"],
  planejamento: ["Como vejo a localização?", "Como faço para chegar a um lugar?", "O que devo confirmar antes da visita?"]
};

const mensagensCategoria = {
  inicio: "Vamos começar! Escolha uma sugestão ou digite sua dúvida.",
  visitas: "Você selecionou lugares para visitar. Veja as sugestões abaixo.",
  cultura: "Você selecionou história e cultura. Escolha uma pergunta para continuar.",
  servicos: "Você selecionou alimentação e hospedagem. Posso ajudar a orientar sua busca.",
  planejamento: "Você selecionou mapa e planejamento. Vamos organizar sua visita."
};

// ===== Elementos da página =====
const chat = document.getElementById("chat");
const input = document.getElementById("message-input");
const form = document.getElementById("chat-form");
const suggestions = document.getElementById("suggestions");

// ===== Funções =====
// Deixa o texto em minúsculas, sem acentos e sem pontuação, para facilitar a comparação.
function normalizar(texto) {
  return texto
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Procura em qual assunto a mensagem se encaixa. Vence o assunto com mais pontos
// (palavras-chave maiores valem mais). Retorna null se nada for reconhecido.
function identificarAssunto(texto) {
  const mensagem = " " + normalizar(texto) + " ";
  let melhor = null;
  let melhorPontos = 0;
  for (const servico of servicos) {
    let pontos = 0;
    for (const termo of servico.termos) {
      if (mensagem.includes(" " + termo + " ")) {
        pontos += termo.length;
      }
    }
    if (pontos > melhorPontos) {
      melhor = servico;
      melhorPontos = pontos;
    }
  }
  return melhor;
}

function responder(texto) {
  const assunto = identificarAssunto(texto);
  if (assunto) {
    return assunto.resposta;
  } else {
    return respostaPadrao;
  }
}

function adicionarMensagem(remetente, texto, tipo) {
  const item = document.createElement("div");
  item.className = `message ${tipo}`;
  const nome = document.createElement("div");
  nome.className = "sender";
  nome.textContent = remetente;
  const corpo = document.createElement("div");
  corpo.textContent = texto;
  item.append(nome, corpo);
  chat.appendChild(item);
  chat.scrollTop = chat.scrollHeight;
}

function enviarMensagem(texto) {
  const mensagem = texto.trim();
  if (!mensagem) return;
  adicionarMensagem("Você", mensagem, "user");
  input.value = "";
  // Pequena pausa só para a conversa parecer natural.
  setTimeout(() => {
    adicionarMensagem("Guia Turismo 360°", responder(mensagem), "assistant");
  }, 350);
  input.focus();
}

function mostrarSugestoes(categoria) {
  suggestions.replaceChildren();
  (sugestoesPorCategoria[categoria] || sugestoesPorCategoria.inicio).forEach(pergunta => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = pergunta;
    button.addEventListener("click", () => enviarMensagem(pergunta));
    suggestions.appendChild(button);
  });
}

// ===== Eventos =====
document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-category]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const categoria = button.dataset.category;
    mostrarSugestoes(categoria);
    adicionarMensagem("Guia Turismo 360°", mensagensCategoria[categoria], "assistant");
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();
  enviarMensagem(input.value);
});

// ===== Início =====
mostrarSugestoes("inicio");
adicionarMensagem("Guia Turismo 360°", `Olá! Bem-vindo ao ${empresa.nome}. Sou seu guia virtual para ${empresa.local}. Você pode perguntar sobre atrações, história, eventos, alimentação, hospedagem e uso do site.`, "assistant");
