 Chatbots do Turismo 360°

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
Preencham depois de testar as duas versões no navegador.

| Critério | Versão 1 | Versão 2 |
|---|---|---|
| Organização da conversa | ___ | ___ |
| Clareza das respostas | ___ | ___ |
| Facilidade de uso | ___ | ___ |
| Variedade de perguntas reconhecidas | ___ | ___ |
| Adequação ao projeto | ___ | ___ |

## Versão escolhida pela equipe
**Versão ___** *(preencher depois dos testes)*

## Justificativa técnica da escolha
*Adaptem este modelo com base nos testes realizados:*

> Escolhemos a Versão ___ porque, nos testes realizados, ela apresentou melhor organização da conversa, clareza das respostas, facilidade de uso e adequação ao Turismo 360°. Consideramos também a variedade de perguntas compreendidas e os requisitos de manutenção e integração ao site. A escolha foi baseada nos resultados observados nos testes.

**Dados técnicos da Versão 2 que podem apoiar a justificativa**
- Cinco categorias com sugestões de perguntas clicáveis, que orientam o usuário desde a primeira mensagem.
- 13 assuntos cadastrados (atrações, história, eventos, alimentação, hospedagem, horários e preços, mapa e rota, sobre o projeto, conta e perfil, contato, ajuda, saudação e agradecimento), cada um com várias palavras-chave.
- Reconhece a pergunta mesmo com acentos, maiúsculas ou pontuação diferentes e responde com uma mensagem orientadora quando não entende.
- Funciona sem servidor, sem chave e sem internet, o que simplifica a integração ao site final: bastam `style.css`, `script.js` e a estrutura do `index.html`.
- Limitação: só responde ao que foi cadastrado.
