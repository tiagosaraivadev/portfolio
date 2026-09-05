const translations = {
  pt: {
    'nav.sobre': 'Sobre Mim',
    'nav.projetos': 'Projetos',
    'nav.experiencias': 'Experiências',
    'nav.contato': 'Contato',
    'nav.toggleLabel': 'Abrir menu de navegação',
    'lang.selectLabel': 'Selecionar idioma',
    'footer.copyright': '&copy; 2026 Tiago Saraiva. Todos os direitos reservados.',
    'footer.email': 'E-mail',

    'about.title': 'Sobre Mim',
    'about.subtitle': 'Um pouco da minha trajetória, formação e objetivos profissionais.',
    'about.bio': `
      <p>Olá! Eu sou o <strong>Tiago Saraiva</strong>, Engenheiro de Software Pleno atualmente na <strong>Wabtec Corporation</strong>, com sólida experiência no desenvolvimento de sistemas distribuídos e aplicações web de alta escala. Sou especialista no ecossistema <strong>.NET Core</strong>, com foco na criação de microsserviços e APIs REST integrados a interfaces modernas em ReactJS.</p>
      <p>Tenho domínio em SQL Server, com ênfase em modelagem relacional e otimização de performance, além de experiência em ambientes ágeis e cultura DevOps, gerenciando pipelines de CI/CD via Azure DevOps. Também curso Engenharia de Software na PUC Minas, e este portfólio reúne meus projetos, experiências e formas de contato.</p>
    `,
    'about.formacao.label': 'Formação',
    'about.formacao.value': 'Engenharia de Software — PUC Minas (2022–2027)',
    'about.area.label': 'Área de atuação',
    'about.area.value': 'Engenheiro de Software Pleno — .NET Core &amp; ReactJS',
    'about.interesses.label': 'Interesses',
    'about.interesses.value': 'Sistemas distribuídos, microsserviços, APIs REST',
    'about.objetivo.label': 'Objetivo',
    'about.objetivo.value': 'Evoluir como Engenheiro de Software, aprofundando atuação em arquitetura de sistemas distribuídos',

    'projetos.title': 'Projetos',
    'projetos.subtitle': 'Linha do tempo dos meus projetos, do mais recente ao mais antigo.',
    'projetos.repoLink': 'Repositório no GitHub',

    'experiencias.title': 'Experiências',
    'experiencias.subtitle': 'Minha trajetória profissional como desenvolvedor e Engenheiro de Software.',

    'contato.title': 'Contato',
    'contato.subtitle': 'Fique à vontade para entrar em contato por qualquer um dos canais abaixo.',
    'contato.canaisDiretos': 'Canais diretos',
    'contato.enviarMensagem': 'Envie uma mensagem',
    'contato.iconEmail': 'E-mail',
    'contato.labelNome': 'Nome',
    'contato.labelEmail': 'E-mail',
    'contato.labelMensagem': 'Mensagem',
    'contato.placeholderNome': 'Seu nome',
    'contato.placeholderEmail': 'voce@exemplo.com',
    'contato.placeholderMensagem': 'Sua mensagem',
    'contato.errorNome': 'Informe seu nome.',
    'contato.errorEmail': 'Informe um e-mail válido.',
    'contato.errorMensagem': 'Escreva uma mensagem.',
    'contato.btnEnviar': 'Enviar mensagem',
    'contato.btnEnviando': 'Enviando...',
    'contato.statusInvalid': 'Verifique os campos destacados antes de enviar.',
    'contato.statusNotConfigured': 'Envio de e-mail ainda não configurado (veja js/email-config.js).',
    'contato.statusSuccess': 'Mensagem enviada com sucesso! Obrigado pelo contato.',
    'contato.statusError': 'Não foi possível enviar agora. Tente novamente ou use o e-mail direto.',
  },
  en: {
    'nav.sobre': 'About Me',
    'nav.projetos': 'Projects',
    'nav.experiencias': 'Experience',
    'nav.contato': 'Contact',
    'nav.toggleLabel': 'Open navigation menu',
    'lang.selectLabel': 'Select language',
    'footer.copyright': '&copy; 2026 Tiago Saraiva. All rights reserved.',
    'footer.email': 'Email',

    'about.title': 'About Me',
    'about.subtitle': 'A little about my background, education and professional goals.',
    'about.bio': `
      <p>Hi! I'm <strong>Tiago Saraiva</strong>, a Mid-level Software Engineer currently at <strong>Wabtec Corporation</strong>, with solid experience building distributed systems and high-scale web applications. I specialize in the <strong>.NET Core</strong> ecosystem, focused on building microservices and REST APIs integrated with modern ReactJS interfaces.</p>
      <p>I have strong SQL Server skills, with an emphasis on relational modeling and performance optimization, along with experience in agile environments and DevOps culture, managing CI/CD pipelines through Azure DevOps. I'm also studying Software Engineering at PUC Minas, and this portfolio gathers my projects, experience and contact information.</p>
    `,
    'about.formacao.label': 'Education',
    'about.formacao.value': 'Software Engineering — PUC Minas (2022–2027)',
    'about.area.label': 'Current Role',
    'about.area.value': 'Mid-level Software Engineer — .NET Core &amp; ReactJS',
    'about.interesses.label': 'Interests',
    'about.interesses.value': 'Distributed systems, microservices, REST APIs',
    'about.objetivo.label': 'Goal',
    'about.objetivo.value': 'Grow as a Software Engineer, deepening my work in distributed systems architecture',

    'projetos.title': 'Projects',
    'projetos.subtitle': 'Timeline of my projects, from most recent to oldest.',
    'projetos.repoLink': 'GitHub Repository',

    'experiencias.title': 'Experience',
    'experiencias.subtitle': 'My professional journey as a developer and Software Engineer.',

    'contato.title': 'Contact',
    'contato.subtitle': 'Feel free to reach out through any of the channels below.',
    'contato.canaisDiretos': 'Direct channels',
    'contato.enviarMensagem': 'Send a message',
    'contato.iconEmail': 'Email',
    'contato.labelNome': 'Name',
    'contato.labelEmail': 'Email',
    'contato.labelMensagem': 'Message',
    'contato.placeholderNome': 'Your name',
    'contato.placeholderEmail': 'you@example.com',
    'contato.placeholderMensagem': 'Your message',
    'contato.errorNome': 'Please enter your name.',
    'contato.errorEmail': 'Please enter a valid email.',
    'contato.errorMensagem': 'Please write a message.',
    'contato.btnEnviar': 'Send message',
    'contato.btnEnviando': 'Sending...',
    'contato.statusInvalid': 'Please check the highlighted fields before sending.',
    'contato.statusNotConfigured': 'Email sending not configured yet (see js/email-config.js).',
    'contato.statusSuccess': 'Message sent successfully! Thanks for reaching out.',
    'contato.statusError': "Couldn't send right now. Please try again or email me directly.",
  },
};

let currentLang = localStorage.getItem('portfolio-lang') === 'en' ? 'en' : 'pt';

function t(key) {
  return translations[currentLang]?.[key] ?? translations.pt[key] ?? key;
}

const projectIcons = {
  library: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="10" y="14" width="10" height="38" rx="1"/>
    <rect x="22" y="10" width="10" height="42" rx="1"/>
    <rect x="34" y="18" width="10" height="34" rx="1"/>
    <line x1="8" y1="52" x2="46" y2="52"/>
    <line x1="14" y1="20" x2="16" y2="20"/>
    <line x1="26" y1="16" x2="28" y2="16"/>
  </svg>`,
  checklist: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="8" width="40" height="48" rx="4"/>
    <path d="M20 24l4 4 8-8"/>
    <line x1="34" y1="26" x2="46" y2="26"/>
    <path d="M20 40l4 4 8-8"/>
    <line x1="34" y1="42" x2="46" y2="42"/>
  </svg>`,
  api: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="10" y="10" width="44" height="12" rx="2"/>
    <rect x="10" y="26" width="44" height="12" rx="2"/>
    <rect x="10" y="42" width="44" height="12" rx="2"/>
    <circle cx="18" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="18" cy="32" r="1.5" fill="currentColor"/>
    <circle cx="18" cy="48" r="1.5" fill="currentColor"/>
  </svg>`,
  burger: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 24c0-8 9-14 22-14s22 6 22 14"/>
    <line x1="8" y1="28" x2="56" y2="28"/>
    <line x1="10" y1="36" x2="54" y2="36"/>
    <line x1="8" y1="44" x2="56" y2="44"/>
    <path d="M10 44c0 6 9 10 22 10s22-4 22-10"/>
  </svg>`,
  film: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="22" width="48" height="32" rx="3"/>
    <path d="M12 22l6-12h7l-6 12M29 22l6-12h7l-6 12M46 22l4-8h2l-3 8"/>
    <line x1="8" y1="30" x2="56" y2="30"/>
  </svg>`,
};

const projectsData = [
  {
    period: '2026',
    name: { pt: 'Good Hamburguer', en: 'Good Hamburguer' },
    description: {
      pt: 'Sistema de gestão de pedidos para uma hamburgueria, com back-end em ASP.NET Core expondo uma API REST e front-end em Blazor WebAssembly. Implementa regras de precificação e desconto conforme a combinação de itens do pedido — um clássico desafio de lógica de negócio usado em processos seletivos da área.',
      en: 'Order management system for a burger restaurant, with an ASP.NET Core back-end exposing a REST API and a Blazor WebAssembly front-end. Implements pricing and discount rules based on order item combinations — a classic business logic challenge used in technical interviews.',
    },
    illustration: 'burger',
    techs: { pt: ['C#', 'ASP.NET Core', 'Blazor WebAssembly'], en: ['C#', 'ASP.NET Core', 'Blazor WebAssembly'] },
    repo: 'https://github.com/tiagosaraivadev/GoodHamburguer',
  },
  {
    period: '2025',
    name: { pt: 'Round API', en: 'Round API' },
    description: {
      pt: 'API REST em Python que centraliza dados e estatísticas de partidas de Counter-Strike, o cenário competitivo de esports do jogo. Pensada para ser consumida por outras aplicações que precisem exibir informações de rounds, mapas e desempenho de times sem depender diretamente das fontes originais dos dados.',
      en: "REST API in Python that centralizes Counter-Strike match data and statistics, the game's competitive esports scene. Designed to be consumed by other applications that need to display round, map and team performance information without depending directly on the original data sources.",
    },
    illustration: 'api',
    techs: { pt: ['Python', 'API REST'], en: ['Python', 'REST API'] },
    repo: 'https://github.com/tiagosaraivadev/round-api',
  },
  {
    period: '2024',
    name: { pt: 'To-Do List', en: 'To-Do List' },
    description: {
      pt: 'Aplicação de lista de tarefas desenvolvida em Java como exercício prático da disciplina de Laboratório de Desenvolvimento de Software, no curso de Engenharia de Software. Implementa criação, conclusão e remoção de tarefas, reforçando fundamentos de lógica de programação e estruturas de dados.',
      en: 'To-do list application built in Java as a hands-on exercise for the Software Development Laboratory course, part of the Software Engineering program. Implements creating, completing and removing tasks, reinforcing programming logic and data structure fundamentals.',
    },
    illustration: 'checklist',
    techs: { pt: ['Java'], en: ['Java'] },
    repo: 'https://github.com/tiagosaraivadev/to-do-list',
  },
  {
    period: '2023',
    name: { pt: 'Gerenciamento de Biblioteca', en: 'Library Management' },
    description: {
      pt: 'Sistema de gerenciamento de biblioteca desenvolvido em Java, simulando o cadastro de itens e o controle de empréstimos. O projeto aplica conceitos de Programação Orientada a Objetos — interfaces e classes abstratas — para modelar diferentes tipos de usuários e materiais de forma extensível.',
      en: 'Library management system built in Java, simulating item registration and loan control. The project applies Object-Oriented Programming concepts — interfaces and abstract classes — to model different types of users and materials in an extensible way.',
    },
    illustration: 'library',
    techs: { pt: ['Java', 'POO'], en: ['Java', 'OOP'] },
    repo: 'https://github.com/tiagosaraivadev/gerenciamentoBiblioteca',
  },
  {
    period: '2022',
    name: { pt: 'API de Filmes', en: 'Movie API' },
    description: {
      pt: 'Interface web para busca e exibição de filmes em cartaz e lançamentos, consumindo uma API pública de filmes. Desenvolvida como atividade prática da disciplina de Desenvolvimento de Interfaces Web, aplicando manipulação do DOM, requisições assíncronas e renderização dinâmica de conteúdo em JavaScript puro.',
      en: 'Web interface for searching and displaying now-showing and upcoming movies, consuming a public movie API. Built as a hands-on activity for the Web Interface Development course, applying DOM manipulation, async requests and dynamic content rendering in plain JavaScript.',
    },
    illustration: 'film',
    techs: { pt: ['JavaScript'], en: ['JavaScript'] },
    repo: 'https://github.com/tiagosaraivadev/api-filmes',
  },
  {
    period: '2021',
    name: { pt: 'Saraiva Viagens', en: 'Saraiva Viagens' },
    description: {
      pt: 'Site institucional de uma agência de viagens fictícia, criado como atividade prática do curso Recode Pro. Desenvolvido inteiramente em HTML e CSS puro, sem frameworks, com páginas de destinos, promoções e contato — meu primeiro contato prático com estruturação de layout e design responsivo na web.',
      en: 'Corporate website for a fictional travel agency, built as a hands-on project for the Recode Pro course. Developed entirely in plain HTML and CSS, with pages for destinations, promotions and contact — my first hands-on experience structuring web layout and responsive design.',
    },
    image: 'saraiva-viagens.png',
    techs: { pt: ['HTML', 'CSS'], en: ['HTML', 'CSS'] },
    repo: 'https://github.com/tiagosaraivadev/Saraiva-Viagens',
  },
];

const experiencesData = [
  {
    period: { pt: 'Junho de 2026 — Atual', en: 'June 2026 — Present' },
    title: 'Wabtec Corporation',
    subtitle: { pt: 'Engenheiro de Software — Contagem, MG', en: 'Software Engineer — Contagem, MG' },
    description: {
      pt: 'Atuação como Engenheiro de Software em sistemas distribuídos e aplicações web de alta escala, no ecossistema .NET Core.',
      en: 'Working as a Software Engineer on distributed systems and high-scale web applications within the .NET Core ecosystem.',
    },
  },
  {
    period: { pt: 'Julho de 2024 — Maio de 2026 (1 ano e 11 meses)', en: 'July 2024 — May 2026 (1 year 11 months)' },
    title: 'dti digital',
    subtitle: { pt: 'Engenheiro de Software — Belo Horizonte, MG', en: 'Software Engineer — Belo Horizonte, MG' },
    description: {
      pt: 'Desenvolvimento de APIs REST e microsserviços em .NET Core, com integração a interfaces em ReactJS e pipelines de CI/CD via Azure DevOps.',
      en: 'Development of REST APIs and microservices in .NET Core, integrating ReactJS interfaces and managing CI/CD pipelines via Azure DevOps.',
    },
  },
  {
    period: { pt: 'Setembro de 2023 — Junho de 2024 (10 meses)', en: 'September 2023 — June 2024 (10 months)' },
    title: 'dti digital',
    subtitle: { pt: 'Desenvolvedor Full Stack — Belo Horizonte, MG', en: 'Full Stack Developer — Belo Horizonte, MG' },
    description: {
      pt: 'Desenvolvimento full stack de aplicações web, unindo back-end em .NET Core a interfaces modernas em ReactJS.',
      en: 'Full stack development of web applications, combining a .NET Core back-end with modern ReactJS interfaces.',
    },
  },
  {
    period: { pt: 'Junho de 2023 — Agosto de 2023 (3 meses)', en: 'June 2023 — August 2023 (3 months)' },
    title: 'Dottatec Soluções Inteligentes',
    subtitle: { pt: 'Desenvolvedor Full Stack — Nova Lima, MG', en: 'Full Stack Developer — Nova Lima, MG' },
    description: {
      pt: 'Primeira experiência profissional como desenvolvedor full stack, em projetos de desenvolvimento web.',
      en: 'First professional experience as a full stack developer, working on web development projects.',
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  markActiveNavLink();
  initLanguageToggle();
  applyLanguage(currentLang);
  initContactForm();
});

function applyLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'pt';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
  });

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === currentLang);
  });

  renderProjects();
  renderExperiences();

  localStorage.setItem('portfolio-lang', currentLang);
}

function renderProjects() {
  const container = document.getElementById('projects-timeline');
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (project) => `
    <li class="timeline-item card">
      <span class="period">${project.period}</span>
      <h3>${project.name[currentLang]}</h3>
      <p class="subtitle">${project.description[currentLang]}</p>
      ${
        project.image
          ? `<img class="project-media" src="assets/img/projects/${project.image}" alt="${project.name[currentLang]}" loading="lazy" />`
          : project.illustration
          ? `<div class="project-illustration">${projectIcons[project.illustration] || ''}</div>`
          : `<div class="project-media">${project.media || ''}</div>`
      }
      <div class="tech-badges">
        ${project.techs[currentLang].map((tech) => `<span>${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" rel="noopener">${t('projetos.repoLink')}</a>
      </div>
    </li>`
    )
    .join('');
}

function renderExperiences() {
  const container = document.getElementById('experiences-timeline');
  if (!container) return;

  container.innerHTML = experiencesData
    .map(
      (exp) => `
    <li class="timeline-item card">
      <span class="period">${exp.period[currentLang]}</span>
      <h3>${exp.title}</h3>
      <p class="subtitle">${exp.subtitle[currentLang]}</p>
      <p>${exp.description[currentLang]}</p>
    </li>`
    )
    .join('');
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function markActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initLanguageToggle() {
  const buttons = document.querySelectorAll('[data-lang-btn]');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang-btn'));
    });
  });
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  if (typeof emailjs !== 'undefined' && typeof EMAILJS_PUBLIC_KEY !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  function setStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('success', 'error');
    status.classList.add('visible', type);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    form.querySelectorAll('.form-field').forEach((field) => {
      const input = field.querySelector('input, textarea');
      if (!input) return;

      const value = input.value.trim();
      let fieldValid = value.length > 0;

      if (input.type === 'email' && value) {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      field.classList.toggle('invalid', !fieldValid);
      if (!fieldValid) valid = false;
    });

    if (!valid) {
      setStatus(t('contato.statusInvalid'), 'error');
      return;
    }

    const emailjsReady =
      typeof emailjs !== 'undefined' &&
      typeof EMAILJS_SERVICE_ID !== 'undefined' &&
      !EMAILJS_SERVICE_ID.startsWith('COLOQUE_AQUI');

    if (!emailjsReady) {
      setStatus(t('contato.statusNotConfigured'), 'error');
      return;
    }

    const sendingLabel = t('contato.btnEnviando');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = sendingLabel;

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      })
      .then(() => {
        setStatus(t('contato.statusSuccess'), 'success');
        form.reset();
      })
      .catch(() => {
        setStatus(t('contato.statusError'), 'error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      });
  });
}
