# Portfólio Profissional — Tiago Saraiva

Website de portfólio profissional desenvolvido para a disciplina **Projeto de Software**
(Engenharia de Software — PUC Minas), Laboratório 1, Segundo Semestre/2026.

> Projeto em desenvolvimento — entrega atual: **Lab01S01** (planejamento e prototipação).

## Sobre o projeto

O site apresenta minha trajetória, habilidades, projetos e formas de contato, organizados em
quatro seções acessadas por um menu de navegação:

- **Sobre Mim** — apresentação em português e inglês (com botão de troca de idioma).
- **Projetos** — linha do tempo de projetos, do mais antigo ao mais recente.
- **Experiências** — estágios, freelas, projetos open source e eventos técnicos.
- **Contato** — ícones para e-mail/WhatsApp/LinkedIn/GitHub e formulário de contato.

## Wireframes

Wireframes de média fidelidade das 4 seções, em escala de cinza (foco em estrutura e
navegação, não no visual final):

| Sobre Mim                                          | Projetos                                            |
| --------------------------------------------------- | ---------------------------------------------------- |
| ![Sobre Mim](assets/wireframes/sobre-mim.png)      | ![Projetos](assets/wireframes/projetos.png)         |

| Experiências                                              | Contato                                          |
| ------------------------------------------------------------ | --------------------------------------------------- |
| ![Experiências](assets/wireframes/experiencias.png)        | ![Contato](assets/wireframes/contato.png)          |

**Comportamento responsivo (menu mobile):**

![Menu mobile](assets/wireframes/mobile.png)

## Estrutura Inicial

Navegação e layout principal (cabeçalho, rodapé, área de conteúdo) já implementados e
funcionando nas 4 páginas. Conteúdo abaixo é placeholder — ver seção "Status por sprint".

| Sobre Mim                                      | Projetos                                         |
| ---------------------------------------------- | ------------------------------------------------ |
| ![Sobre Mim](assets/img/screenshots/sobre.png) | ![Projetos](assets/img/screenshots/projetos.png) |

| Experiências                                             | Contato                                        |
| -------------------------------------------------------- | ---------------------------------------------- |
| ![Experiências](assets/img/screenshots/experiencias.png) | ![Contato](assets/img/screenshots/contato.png) |

## Tecnologias utilizadas

- **HTML5** — estrutura semântica das páginas.
- **CSS3** — estilização, layout responsivo (Flexbox/Grid), variáveis de tema.
- **JavaScript (Vanilla)** — navegação (menu mobile, link ativo), toggle de idioma PT/EN
  e validação do formulário de contato.

Nenhum framework/build tool é necessário nesta etapa — o site é HTML/CSS/JS estático puro,
o que também simplifica o deploy gratuito em serviços como GitHub Pages, Vercel ou Render.
