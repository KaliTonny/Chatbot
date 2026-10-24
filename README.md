# Chatbots do Turismo 360°

**Projeto:** Turismo 360° — Plataforma Interativa de Turismo  
**Instituição:** SENAI Candeias  
**Curso:** Técnico em Informática para Internet

Dois chatbots de respostas prontas para o site do Turismo 360°, que apresenta Candeias, Bahia. Nenhuma das versões usa API de inteligência artificial: ambas rodam no navegador, sem servidor, sem chave e sem internet.

## Integrantes
- Etony Guedes
- Geovanna Almeida
- Nicolle Borges
- Eric das Mercês

## Identificação das versões e das duplas
| Versão | Pasta | Integrantes responsáveis |
|---|---|---|
| **Versão 1** | [`versao-1/`](versao-1/) | Nicolle Borges e Eric das Mercês |
| **Versão 2** | [`versao-2/`](versao-2/) | Etony Guedes e Geovanna Almeida |

## Estrutura do repositório
```
.
├── README.md
├── QUESTOES_TEORICAS.md
├── ROTEIRO_DE_TESTES.md
├── versao-1/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── versao-2/
    ├── index.html
    ├── style.css
    └── script.js
```

## Como executar
Não é preciso instalar nada. Abra no navegador, com dois cliques, o `index.html` da versão que quiser testar:

- `versao-1/index.html`
- `versao-2/index.html`

Também funciona publicado no GitHub Pages.

## Versão 2 — Guia virtual de Candeias
Desenvolvida por Etony Guedes e Geovanna Almeida.

Interface com cinco categorias (início/ajuda, lugares para visitar, história e cultura, alimentação e hospedagem, mapa e planejamento), sugestões de perguntas clicáveis e campo para digitar com envio por Enter ou pelo botão.

**Como funciona**
1. A função `normalizar()` deixa a mensagem em minúsculas, sem acentos e sem pontuação.
2. A função `identificarAssunto()` compara a mensagem com as palavras-chave (`termos`) de cada item do array `servicos`, usando `includes()`. O assunto com mais pontos vence.
3. A função `responder()` devolve a resposta pronta do assunto ou, se nada for reconhecido, a `respostaPadrao`.
4. A função `adicionarMensagem()` mostra a pergunta e a resposta na conversa.

**Como adicionar uma resposta nova:** em `versao-2/script.js`, inclua um objeto no array `servicos`:

```js
{id:"visitas", titulo:"Praias", termos:["praia","praias"], resposta:"Texto da resposta."}
```

Os `termos` devem estar sem acento e em minúsculas, com singular e plural. Use somente informações confirmadas; o chatbot não deve afirmar horários, preços, telefones ou eventos que não estejam verificados.

## Versão 1
Desenvolvida por Nicolle Borges e Eric das Mercês.

Chatbot local de respostas prontas, sem API externa. O código está em `versao-1/` (`index.html`, `style.css` e `script.js`).

## Testes
Os testes das duas versões seguem o [`ROTEIRO_DE_TESTES.md`](ROTEIRO_DE_TESTES.md). Os prints do chatbot completo e testado, com a conversa visível, ficam na pasta `prints/` (ou conforme combinado na entrega).

## Comparativo entre as versões
Comparativo preliminar feito com base na descrição e na estrutura documentadas neste README. A avaliação de clareza e facilidade de uso deve ser confirmada com testes práticos no navegador.

| Critério | Versão 1 | Versão 2 |
|---|---|---|
| Organização da conversa | Chatbot local de respostas prontas | Interface organizada em cinco categorias, com sugestões de perguntas |
| Clareza das respostas | Respostas previamente cadastradas | Respostas previamente cadastradas e mensagem orientadora quando não reconhece o assunto |
| Facilidade de uso | Interação por chatbot no navegador | Sugestões clicáveis e campo de texto com envio por Enter ou botão |
| Variedade de perguntas reconhecidas | Depende dos termos cadastrados no código | 13 assuntos documentados, com várias palavras-chave por assunto |
| Adequação ao projeto | Atende à proposta de chatbot para o site | Também atende à proposta e oferece navegação inicial mais guiada |

## Versão escolhida pela equipe
**Versão 2 — escolha recomendada com base nos recursos documentados.** A equipe deve confirmar a decisão após executar o roteiro de testes das duas versões.

## Justificativa técnica da escolha
> Recomendamos a Versão 2 porque sua interface organiza o atendimento em cinco categorias e oferece sugestões de perguntas clicáveis, facilitando o início da conversa. O código identifica assuntos por palavras-chave, normaliza a mensagem para lidar com diferenças de acentuação, maiúsculas e pontuação, e apresenta uma resposta padrão quando não reconhece a pergunta. Além disso, funciona localmente, sem API externa, servidor ou chave. A limitação é que só responde aos assuntos e às informações cadastradas. A equipe deve validar a experiência prática seguindo o roteiro de testes antes de confirmar definitivamente a escolha.

**Dados técnicos da Versão 2 que podem apoiar a justificativa**
- Cinco categorias com sugestões de perguntas clicáveis, que orientam o usuário desde a primeira mensagem.
- 13 assuntos cadastrados (atrações, história, eventos, alimentação, hospedagem, horários e preços, mapa e rota, sobre o projeto, conta e perfil, contato, ajuda, saudação e agradecimento), cada um com várias palavras-chave.
- Reconhece a pergunta mesmo com acentos, maiúsculas ou pontuação diferentes e responde com uma mensagem orientadora quando não entende.
- Funciona sem servidor, sem chave e sem internet, o que simplifica a integração ao site final: bastam `style.css`, `script.js` e a estrutura do `index.html`.
- Limitação: só responde ao que foi cadastrado.

