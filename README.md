# Portfólio Profissional — Tiago Saraiva

Website de portfólio profissional desenvolvido para a disciplina **Projeto de Software**
(Engenharia de Software — PUC Minas), Laboratório 1, Segundo Semestre/2026.

> Projeto em desenvolvimento — entrega atual: **Lab01S03** (hospedagem e finalização).

## Site publicado

🔗 **[tiagosaraivadev.github.io/portfolio](https://tiagosaraivadev.github.io/portfolio/)** (GitHub Pages)

## Sobre o projeto

O site apresenta minha trajetória, habilidades, projetos e formas de contato, organizados em
quatro seções acessadas por um menu de navegação. Todo o conteúdo (nav, textos, timelines de
Projetos/Experiências e formulário) tem toggle **PT/EN** no cabeçalho, disponível nas 4 páginas:

- **Sobre Mim** — apresentação profissional, formação e objetivos.
- **Projetos** — linha do tempo de projetos, do mais recente ao mais antigo.
- **Experiências** — trajetória profissional, do vínculo mais recente ao mais antigo.
- **Contato** — ícones para e-mail/LinkedIn/GitHub e formulário de contato funcional.

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

Navegação e layout principal (cabeçalho, rodapé, área de conteúdo) implementados e
funcionando nas 4 páginas, com conteúdo real: bio e experiências profissionais reais, e 7
projetos reais do GitHub (com screenshot real dos que têm front-end, e ilustração nos que
não têm). As timelines de Projetos e Experiências são renderizadas dinamicamente via
JavaScript a partir de um array de dados bilíngue (PT/EN) em `js/main.js`.

| Sobre Mim                                      | Projetos                                         |
| ---------------------------------------------- | ------------------------------------------------ |
| ![Sobre Mim](assets/img/screenshots/sobre.png) | ![Projetos](assets/img/screenshots/projetos.png) |

| Experiências                                             | Contato                                        |
| -------------------------------------------------------- | ---------------------------------------------- |
| ![Experiências](assets/img/screenshots/experiencias.png) | ![Contato](assets/img/screenshots/contato.png) |

## Tecnologias utilizadas

- **HTML5** — estrutura semântica das páginas.
- **CSS3** — estilização, layout responsivo (Flexbox/Grid), variáveis de tema.
- **JavaScript (Vanilla)** — navegação (menu mobile, link ativo), sistema de tradução PT/EN
  em todo o site (dicionário + atributos `data-i18n`), renderização dinâmica das timelines
  (Projetos/Experiências) e validação do formulário.
- **[EmailJS](https://www.emailjs.com/)** — envio do formulário de contato direto do
  navegador, sem back-end (carregado via CDN em `contato.html`).

Nenhum framework/build tool é necessário — o site é HTML/CSS/JS estático puro, o que também
simplifica o deploy gratuito em serviços como GitHub Pages, Vercel ou Render.
