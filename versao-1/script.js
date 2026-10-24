const empresa = {
      nome: "Turismo 360°",
      cidade: "Candeias, Bahia",
      descricao: "uma plataforma interativa que ajuda moradores e visitantes a descobrir atrações, cultura e serviços turísticos de Candeias",
      objetivo: "facilitar o acesso a informações turísticas e valorizar a história e a cultura local"
    };

    const servicos = [
      { nome: "Pontos turísticos", palavras: ["ponto turistico", "pontos turisticos", "lugar para visitar", "o que visitar", "atracoes", "passeio"], resposta: "Você pode começar pela Igreja Matriz/Santuário de Nossa Senhora das Candeias e explorar outros locais históricos e culturais da cidade. Consulte o mapa do Turismo 360° para conferir a localização antes de sair." },
      { nome: "História", palavras: ["historia", "historico", "origem", "como surgiu"], resposta: "Candeias fica na Região Metropolitana de Salvador, na Bahia, e sua história está ligada à devoção a Nossa Senhora das Candeias, à formação dos povoados da região e ao desenvolvimento econômico do Recôncavo Baiano. O Turismo 360° busca apresentar esse patrimônio de forma acessível." },
      { nome: "Eventos", palavras: ["evento", "eventos", "festa", "festas", "agenda", "show", "programacao"], resposta: "A programação de eventos pode mudar ao longo do ano. Consulte os canais oficiais da Prefeitura de Candeias e a área de eventos do site para confirmar datas, horários e locais." },
      { nome: "Restaurantes", palavras: ["restaurante", "restaurantes", "comer", "comida", "almoco", "jantar", "lanchonete"], resposta: "Para encontrar opções de alimentação, use a área Explorar do Turismo 360° e confira a localização, avaliações e horários diretamente com o estabelecimento antes de ir." },
      { nome: "Hospedagem", palavras: ["hotel", "hoteis", "hospedagem", "pousada", "pousadas", "dormir", "ficar"], resposta: "Para hospedagem, pesquise hotéis e pousadas em Candeias e confirme preços, disponibilidade e serviços diretamente com cada estabelecimento. O site pode ajudar a organizar sua busca." },
      { nome: "Mapa e localização", palavras: ["mapa", "localizacao", "endereco", "como chegar", "gps", "rota"], resposta: "Abra a seção Explorar do Turismo 360° e selecione o local desejado. Quando disponível, use a opção de abrir no Google Maps para conferir a rota e a localização atualizada." },
      { nome: "Sobre o projeto", palavras: ["turismo 360", "site", "projeto", "como funciona", "objetivo", "quem e voce"], resposta: `${empresa.nome} é ${empresa.descricao}. Nosso objetivo é ${empresa.objetivo}.` },
      { nome: "Contato", palavras: ["contato", "falar com", "email", "telefone", "suporte"], resposta: "Para dúvidas sobre o projeto, acesse a página Contato do site Turismo 360°. Os canais e horários de atendimento devem ser conferidos nessa página." },
      { nome: "Saudação", palavras: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "e ai"], resposta: "Olá! Que bom ter você por aqui. O que gostaria de descobrir sobre Candeias?" },
      { nome: "Agradecimento", palavras: ["obrigado", "obrigada", "valeu", "agradeco"], resposta: "Por nada! Espero que o Turismo 360° ajude você a aproveitar melhor Candeias." }
    ];

    const chat = document.getElementById("chat");
    const form = document.getElementById("chat-form");
    const input = document.getElementById("message-input");

    function normalizar(texto) {
      return texto.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    }

    function adicionarMensagem(remetente, texto, tipo) {
      const article = document.createElement("article");
      article.className = `message ${tipo}`;
      const sender = document.createElement("div");
      sender.className = "sender";
      sender.textContent = remetente;
      const content = document.createElement("div");
      content.textContent = texto;
      article.append(sender, content);
      chat.appendChild(article);
      chat.scrollTop = chat.scrollHeight;
    }

    function responder(mensagem) {
      const texto = normalizar(mensagem);
      if (!texto) return "Digite uma pergunta para que eu possa ajudar.";
      for (const servico of servicos) {
        if (servico.palavras.some(palavra => texto.includes(normalizar(palavra)))) {
          return servico.resposta;
        }
      }
      return "Ainda não consegui identificar sua pergunta. Você pode perguntar sobre pontos turísticos, história, eventos, restaurantes, hotéis, mapa ou sobre o Turismo 360°.";
    }

    function enviarMensagem(mensagem) {
      const limpa = mensagem.trim();
      if (!limpa) return;
      adicionarMensagem("Você", limpa, "user");
      adicionarMensagem("Assistente Turismo 360°", responder(limpa), "assistant");
      input.value = "";
      input.focus();
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      enviarMensagem(input.value);
    });

    document.querySelectorAll("[data-question]").forEach(button => {
      button.addEventListener("click", () => enviarMensagem(button.dataset.question));
    });

    adicionarMensagem("Assistente Turismo 360°", `Olá! Seja bem-vindo ao ${empresa.nome}. Como posso ajudar você a explorar ${empresa.cidade}?`, "assistant");
