# Roteiro de testes — Turismo 360°

**Projeto:** Turismo 360° — Plataforma Interativa de Turismo  
**Instituição:** SENAI Candeias  
**Curso:** Técnico em Informática para Internet  
**Versão avaliada:** Versão 2 — Guia virtual de Candeias  
**Dupla responsável:** Etony Guedes e Geovanna Almeida

## 1. Resultados dos testes funcionais

A tabela abaixo apresenta um exemplo de registro de testes concluídos para documentar a avaliação da Versão 2. Os resultados devem ser conferidos com o comportamento real do chatbot antes da entrega final.

| # | Pergunta / ação | O que foi verificado | Resultado esperado | Resultado registrado |
|---|---|---|---|---|
| 1 | `Oi, tudo bem?` | Saudação | Mensagem de boas-vindas | Passou* |
| 2 | `Quais são os pontos turísticos?` | Atrações | Sugestão da Igreja Matriz e da seção Explorar | Passou* |
| 3 | `O que posso visitar em Candeias?` | Variação da pergunta | Resposta sobre lugares para visitar | Passou* |
| 4 | `Me conte a história da cidade.` | História | Resposta sobre história e cultura | Passou* |
| 5 | `Tem eventos acontecendo?` | Eventos | Orientação para consultar a área de eventos | Passou* |
| 6 | `Onde encontro restaurantes?` | Alimentação | Orientação sobre restaurantes | Passou* |
| 7 | `Quero achar um hotel ou pousada.` | Hospedagem | Orientação sobre hotéis e pousadas | Passou* |
| 8 | `Como faço para chegar lá?` | Mapa e rota | Orientação sobre mapa e Google Maps | Passou* |
| 9 | `O que é o Turismo 360?` | Sobre o projeto | Descrição do projeto | Passou* |
| 10 | `Qual é a capital de Marte?` | Assunto desconhecido | Mensagem informando que a informação não foi encontrada | Passou* |
| 11 | Enviar pergunta pressionando **Enter** | Envio pelo teclado | Pergunta e resposta aparecem na conversa | Passou* |
| 12 | Enviar pergunta clicando em **Enviar** | Envio pelo botão | Pergunta e resposta aparecem na conversa | Passou* |
| 13 | Clicar nas categorias e sugestões | Navegação e botões | Sugestões mudam; clicar em uma envia a pergunta | Passou* |
| 14 | Abrir em tela de celular ou emulador responsivo | Responsividade | Layout legível e utilizável | Passou* |

\* **Importante:** estes resultados são um modelo de preenchimento, não uma confirmação de que os testes foram executados. Antes de entregar, verifiquem cada item no navegador e ajustem os resultados caso o comportamento observado seja diferente.

## 2. Registro dos critérios de escolha

**Exemplo de avaliação da Versão 2**, com base nos recursos descritos no projeto. A comparação definitiva com a Versão 1 depende de testar ambas.

| Critério | Observação da equipe |
|---|---|
| Organização da conversa | A interface organiza o atendimento por categorias e apresenta sugestões de perguntas, ajudando o usuário a iniciar a conversa. |
| Clareza das respostas | As respostas são previamente cadastradas e direcionadas a assuntos específicos do turismo em Candeias. |
| Facilidade de uso | O usuário pode escolher sugestões ou digitar uma pergunta e enviá-la pelo botão ou pela tecla Enter. |
| Variedade de perguntas reconhecidas | O chatbot possui assuntos cadastrados com palavras-chave; reconhece variações conforme os termos configurados. Perguntas fora do cadastro recebem uma resposta padrão. |
| Adequação ao projeto | A proposta atende ao objetivo de orientar visitantes sobre atrações, história e cultura, alimentação, hospedagem e planejamento. |

## 3. Conclusão preliminar

A Versão 2 apresenta recursos úteis para o Turismo 360°, como categorias de atendimento, sugestões clicáveis e respostas para assuntos cadastrados. Por isso, ela pode ser considerada uma candidata à versão final. A escolha definitiva deve ocorrer após comparar as duas versões e confirmar os resultados dos testes.

## 4. Registro final

- **Testes previstos:** 14
- **Testes aprovados:** confirmar após executar os testes.
- **Testes reprovados:** confirmar após executar os testes.
- **Versão escolhida pela equipe:** confirmar após comparar as versões.

## 5. Print para entrega no Classroom

Depois de executar e conferir os testes no navegador, salvem uma captura de tela do chatbot com várias perguntas e respostas visíveis, incluindo uma pergunta fora do tema.

Nome sugerido: `print-chatbot-versao2.png`

Se a conversa não couber em uma tela, usem `print-chatbot-versao2-1.png`, `print-chatbot-versao2-2.png` e assim por diante. Identifiquem a versão e a dupla responsável na entrega.
"""

path = Path("/mnt/data/ROTEIRO_DE_TESTES.md")
path.write_text(content, encoding="utf-8")
print(f"Arquivo atualizado: {path}")
