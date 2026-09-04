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
    period: '2021',
    name: 'Saraiva Viagens',
    description: 'Site institucional de uma agência de viagens fictícia, criado como atividade prática do curso Recode Pro. Desenvolvido inteiramente em HTML e CSS puro, sem frameworks, com páginas de destinos, promoções e contato — meu primeiro contato prático com estruturação de layout e design responsivo na web.',
    image: 'saraiva-viagens.png',
    techs: ['HTML', 'CSS'],
    repo: 'https://github.com/tiagosaraivadev/Saraiva-Viagens',
  },
  {
    period: '2022',
    name: 'API de Filmes',
    description: 'Interface web para busca e exibição de filmes em cartaz e lançamentos, consumindo uma API pública de filmes. Desenvolvida como atividade prática da disciplina de Desenvolvimento de Interfaces Web, aplicando manipulação do DOM, requisições assíncronas e renderização dinâmica de conteúdo em JavaScript puro.',
    illustration: 'film',
    techs: ['JavaScript'],
    repo: 'https://github.com/tiagosaraivadev/api-filmes',
  },
  {
    period: '2023',
    name: 'Gerenciamento de Biblioteca',
    description: 'Sistema de gerenciamento de biblioteca desenvolvido em Java, simulando o cadastro de itens e o controle de empréstimos. O projeto aplica conceitos de Programação Orientada a Objetos — interfaces e classes abstratas — para modelar diferentes tipos de usuários e materiais de forma extensível.',
    illustration: 'library',
    techs: ['Java', 'POO'],
    repo: 'https://github.com/tiagosaraivadev/gerenciamentoBiblioteca',
  },
  {
    period: '2024',
    name: 'To-Do List',
    description: 'Aplicação de lista de tarefas desenvolvida em Java como exercício prático da disciplina de Laboratório de Desenvolvimento de Software, no curso de Engenharia de Software. Implementa criação, conclusão e remoção de tarefas, reforçando fundamentos de lógica de programação e estruturas de dados.',
    illustration: 'checklist',
    techs: ['Java'],
    repo: 'https://github.com/tiagosaraivadev/to-do-list',
  },
  {
    period: '2025',
    name: 'Round API',
    description: 'API REST em Python que centraliza dados e estatísticas de partidas de Counter-Strike, o cenário competitivo de esports do jogo. Pensada para ser consumida por outras aplicações que precisem exibir informações de rounds, mapas e desempenho de times sem depender diretamente das fontes originais dos dados.',
    illustration: 'api',
    techs: ['Python', 'API REST'],
    repo: 'https://github.com/tiagosaraivadev/round-api',
  },
  {
    period: '2026',
    name: 'Good Hamburguer',
    description: 'Sistema de gestão de pedidos para uma hamburgueria, com back-end em ASP.NET Core expondo uma API REST e front-end em Blazor WebAssembly. Implementa regras de precificação e desconto conforme a combinação de itens do pedido — um clássico desafio de lógica de negócio usado em processos seletivos da área.',
    illustration: 'burger',
    techs: ['C#', 'ASP.NET Core', 'Blazor WebAssembly'],
    repo: 'https://github.com/tiagosaraivadev/GoodHamburguer',
  },
  {
    period: '2026',
    name: 'Este Portfólio',
    description: 'Este próprio site de portfólio profissional, desenvolvido para a disciplina de Projeto de Software da Engenharia de Software (PUC Minas). Construído em HTML, CSS e JavaScript puros, com navegação entre seções, timelines dinâmicas de projetos e experiências, e formulário de contato funcional integrado ao EmailJS.',
    image: 'portfolio.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/tiagosaraivadev/portfolio',
  },
];

const experiencesData = [
  {
    period: 'Junho de 2026 — Atual',
    title: 'Wabtec Corporation',
    subtitle: 'Engenheiro de Software — Contagem, MG',
    description: 'Atuação como Engenheiro de Software em sistemas distribuídos e aplicações web de alta escala, no ecossistema .NET Core.',
  },
  {
    period: 'Julho de 2024 — Maio de 2026 (1 ano e 11 meses)',
    title: 'dti digital',
    subtitle: 'Engenheiro de Software — Belo Horizonte, MG',
    description: 'Desenvolvimento de APIs REST e microsserviços em .NET Core, com integração a interfaces em ReactJS e pipelines de CI/CD via Azure DevOps.',
  },
  {
    period: 'Setembro de 2023 — Junho de 2024 (10 meses)',
    title: 'dti digital',
    subtitle: 'Desenvolvedor Full Stack — Belo Horizonte, MG',
    description: 'Desenvolvimento full stack de aplicações web, unindo back-end em .NET Core a interfaces modernas em ReactJS.',
  },
  {
    period: 'Junho de 2023 — Agosto de 2023 (3 meses)',
    title: 'Dottatec Soluções Inteligentes',
    subtitle: 'Desenvolvedor Full Stack — Nova Lima, MG',
    description: 'Primeira experiência profissional como desenvolvedor full stack, em projetos de desenvolvimento web.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  markActiveNavLink();
  initLanguageToggle();
  renderProjects();
  renderExperiences();
  initContactForm();
});

function renderProjects() {
  const container = document.getElementById('projects-timeline');
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (project) => `
    <li class="timeline-item card">
      <span class="period">${project.period}</span>
      <h3>${project.name}</h3>
      <p class="subtitle">${project.description}</p>
      ${
        project.image
          ? `<img class="project-media" src="assets/img/projects/${project.image}" alt="Captura de tela do projeto ${project.name}" loading="lazy" />`
          : project.illustration
          ? `<div class="project-illustration">${projectIcons[project.illustration] || ''}</div>`
          : `<div class="project-media">${project.media || 'Imagem ou GIF do projeto em funcionamento (placeholder)'}</div>`
      }
      <div class="tech-badges">
        ${project.techs.map((tech) => `<span>${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" rel="noopener">Repositório no GitHub</a>
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
      <span class="period">${exp.period}</span>
      <h3>${exp.title}</h3>
      <p class="subtitle">${exp.subtitle}</p>
      <p>${exp.description}</p>
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
      const lang = btn.getAttribute('data-lang-btn');
      document.body.classList.toggle('lang-en', lang === 'en');
      buttons.forEach((b) => b.classList.toggle('active', b === btn));
      localStorage.setItem('portfolio-lang', lang);
    });
  });

  const saved = localStorage.getItem('portfolio-lang');
  if (saved === 'en') {
    document.querySelector('[data-lang-btn="en"]')?.click();
  }
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
      setStatus('Verifique os campos destacados antes de enviar.', 'error');
      return;
    }

    const emailjsReady =
      typeof emailjs !== 'undefined' &&
      typeof EMAILJS_SERVICE_ID !== 'undefined' &&
      !EMAILJS_SERVICE_ID.startsWith('COLOQUE_AQUI');

    if (!emailjsReady) {
      setStatus('Envio de e-mail ainda não configurado (veja js/email-config.js).', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      })
      .then(() => {
        setStatus('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
        form.reset();
      })
      .catch(() => {
        setStatus('Não foi possível enviar agora. Tente novamente ou use o e-mail direto.', 'error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensagem';
      });
  });
}
