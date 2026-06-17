const body = document.body;
const header = document.querySelector('.header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('section[id]');
const contactForm = document.getElementById('contactForm');
const appModeTabs = [...document.querySelectorAll('.app-mode-tab')];
const appPreview = document.getElementById('app-preview');
const appEnterButton = document.getElementById('appEnterButton');
const ecosystemNodes = [...document.querySelectorAll('.ecosystem-node')];
const ecosystemDetail = document.querySelector('.ecosystem-detail');
const heroLogoCycle = document.getElementById('heroLogoCycle');

const appModes = {
  easy: {
    label: 'Connect Easy',
    title: 'Cuidado completo na palma da mão.',
    text: 'Tutores encontram profissionais, organizam animais, documentos, exames e agendamentos em uma jornada simples.',
    highlights: ['Cadastro de pet', 'Exames e receitas', 'Emergência rápida'],
    loginTitle: 'Connect Easy',
    loginText: 'Cuidar de quem voce ama ficou muito mais facil.',
    loginButton: 'Entrar',
    greeting: 'Olá, Amanda!',
    headline: 'Como podemos cuidar hoje?',
    avatar: 'A',
    heroTitle: 'Precisando de ajuda?',
    heroText: 'Encontre os melhores profissionais perto de você.',
    heroAction: 'Buscar agora',
    heroVisual: 'Rex',
    quickActions: [['heart', 'Cadastro de pet'], ['file', 'Exames e receitas'], ['bolt', 'Emergência'], ['pin', 'Profissionais']],
    cardHeading: 'Próximos compromissos',
    resultAvatar: 'R',
    resultTitle: 'Consulta do Rex',
    resultMeta: 'Hoje, 15:30 • Dr. Lucas Ferreira',
    resultBadge: 'Confirmado',
    alertTitle: 'Carteira de vacinação',
    alertText: 'Ver carteirinha completa',
    alertIcon: 'heart',
    navItems: ['Início', 'Serviços', 'Mensagens', 'Perfil'],
    tools: [
      {
        icon: 'heart',
        title: 'Cadastro de pet',
        text: 'Crie perfis completos para cada animal com dados, cuidados, vacinas e observações importantes.',
        bullets: ['Dados do animal', 'Historico de cuidados', 'Carteira organizada']
      },
      {
        icon: 'file',
        title: 'Exames e receitas',
        text: 'Receba documentos enviados por profissionais e mantenha tudo salvo na conta do tutor.',
        bullets: ['PDFs recebidos', 'Resultados de exames', 'Receitas por pet']
      },
      {
        icon: 'bolt',
        title: 'Botão de emergência',
        text: 'Acione ajuda rapidamente e encontre profissionais disponiveis para atendimentos urgentes.',
        bullets: ['Contato rapido', 'Localizacao', 'Profissionais 24h']
      },
      {
        icon: 'pin',
        title: 'Encontrar profissionais',
        text: 'Busque veterinarios e servicos proximos por localizacao, especialidade e disponibilidade.',
        bullets: ['Mapa proximo', 'Filtros', 'Perfil verificado']
      }
    ]
  },
  profissional: {
    label: 'Connect Professional',
    title: 'Sua rotina profissional mais inteligente.',
    text: 'Profissionais recebem chamados, gerenciam clientes, receitas, exames, comunidade e impacto solidário.',
    highlights: ['Rotas e agenda', 'Exames e receitas', 'Eu Solidário'],
    loginTitle: 'Connect Professional',
    loginText: 'Conectando profissionais a oportunidades em todo o Brasil.',
    loginButton: 'Entrar',
    greeting: 'Olá, Dr. Lucas!',
    headline: 'Você está disponível.',
    avatar: 'LF',
    heroTitle: 'Chamados próximos',
    heroText: 'Atendimento clínico a 2,8 km de você.',
    heroAction: 'Aceitar',
    heroVisual: '26',
    quickActions: [['pin', 'Rota'], ['calendar', 'Agenda'], ['file', 'Exames'], ['users', 'Perfil'], ['heart', 'Solidário'], ['bolt', 'Emergência']],
    cardHeading: 'Estatísticas do mês',
    resultAvatar: '14',
    resultTitle: 'Novos clientes',
    resultMeta: '+12% neste mês',
    resultBadge: 'Avaliação média 4,9',
    alertTitle: 'Ganhos',
    alertText: 'R$ 8.450 este mês',
    alertIcon: 'bolt',
    navItems: ['Home', 'Ferramentas', 'Comunidade', 'Chat', 'Perfil'],
    tools: [
      {
        icon: 'pin',
        title: 'Planejamento de rota',
        text: 'Organize atendimentos por proximidade, otimize deslocamentos e reduza tempo entre chamados.',
        bullets: ['Rota otimizada', 'Tempo estimado', 'Atendimentos proximos']
      },
      {
        icon: 'calendar',
        title: 'Agendamento',
        text: 'Controle consultas, retornos, visitas domiciliares e disponibilidade profissional em tempo real.',
        bullets: ['Agenda do dia', 'Confirmacoes', 'Lembretes']
      },
      {
        icon: 'file',
        title: 'Exames e receitas',
        text: 'Emita receitas, envie exames e mantenha historicos clinicos vinculados ao tutor e ao animal.',
        bullets: ['Nova receita', 'Novo exame', 'Gerar PDF']
      },
      {
        icon: 'users',
        title: 'Perfil profissional',
        text: 'Apresente especialidades, avaliacoes, portfolio, areas atendidas e dados de verificacao.',
        bullets: ['Portfolio', 'Avaliacoes', 'Perfil verificado']
      },
      {
        icon: 'heart',
        title: 'Eu Solidário',
        text: 'Registre horas voluntarias, apoie projetos e acompanhe seu impacto social dentro da rede.',
        bullets: ['Horas dedicadas', 'Projetos apoiados', 'Selos de impacto']
      },
      {
        icon: 'bolt',
        title: 'Chamado de emergência',
        text: 'Receba solicitacoes urgentes da regiao e aceite atendimentos conforme disponibilidade.',
        bullets: ['Chamado proximo', 'Aceite rapido', 'Contato imediato']
      }
    ]
  }
};

const ecosystemContent = {
  tutor: {
    index: '01 / 06',
    icon: '♥',
    label: 'Connect Easy',
    title: 'Tutores no centro do cuidado.',
    text: 'Uma jornada simples para encontrar profissionais, organizar informações e cuidar de animais de pequeno e grande porte.',
    connections: ['Profissionais', 'Clínicas', 'Serviços'],
    result: 'Mais acesso, confiança e continuidade no cuidado.'
  },
  profissional: {
    index: '02 / 06',
    icon: '+',
    label: 'Connect Professional',
    title: 'Profissionais mais visíveis e conectados.',
    text: 'Ferramentas para apresentar serviços, organizar a rotina, receber oportunidades e construir autoridade no setor animal.',
    connections: ['Tutores', 'Negócios', 'Inteligência'],
    result: 'Mais oportunidades, organização e crescimento profissional.'
  },
  negocios: {
    index: '03 / 06',
    icon: '▦',
    label: 'Empresas e estabelecimentos',
    title: 'Negócios integrados à jornada animal.',
    text: 'Clínicas, pet shops, laboratórios e fornecedores participam de uma rede especializada, próxima de quem precisa.',
    connections: ['Profissionais', 'Tutores', 'Parceiros'],
    result: 'Mais alcance, relacionamento e presença no mercado.'
  },
  solidario: {
    index: '04 / 06',
    icon: '◎',
    label: 'Connect Vet Solidário',
    title: 'Impacto social com alcance e transparência.',
    text: 'ONGs, protetores e voluntários encontram apoio para campanhas, adoções, resgates e necessidades emergenciais.',
    connections: ['Voluntários', 'Empresas', 'Tutores'],
    result: 'Mais apoio, visibilidade e novas chances para os animais.'
  },
  parceiros: {
    index: '05 / 06',
    icon: '◇',
    label: 'Rede de parceiros',
    title: 'Parcerias que ampliam possibilidades.',
    text: 'Instituições, investidores e marcas fortalecem o ecossistema com conhecimento, estrutura e colaboração estratégica.',
    connections: ['Negócios', 'Solidário', 'Inteligência'],
    result: 'Mais capacidade de expansão e impacto em escala nacional.'
  },
  inteligencia: {
    index: '06 / 06',
    icon: '⌁',
    label: 'Dados e tecnologia',
    title: 'Informação que melhora cada conexão.',
    text: 'Dados organizados apoiam decisões, otimizam rotas, revelam necessidades e tornam a experiência mais eficiente.',
    connections: ['Todo o ecossistema', 'Jornadas', 'Resultados'],
    result: 'Mais eficiência, personalização e evolução contínua.'
  }
};

let currentAppMode = 'easy';
let currentAppToolIndex = 0;
let appModeInterval;

const heroLogoVariants = [
  { src: 'assets/svg/Mescla_1.svg', alt: 'Connect Vet do Brasil' },
  { src: 'assets/svg/P_B.svg', alt: 'Connect Vet do Brasil' },
  { src: 'assets/svg/Solidario.svg', alt: 'Connect Vet Solidário' }
];

let currentHeroLogoIndex = 0;

heroLogoVariants.forEach(({ src }) => {
  const image = new Image();
  image.src = src;
});

function setHeroLogo(index) {
  const logo = heroLogoCycle?.querySelector('img');
  if (!heroLogoCycle || !logo) {
    return;
  }

  const variant = heroLogoVariants[index];
  heroLogoCycle.classList.remove('logo-changing');
  void heroLogoCycle.offsetWidth;
  heroLogoCycle.classList.add('logo-changing');
  logo.src = variant.src;
  logo.alt = variant.alt;
  heroLogoCycle.dataset.logoIndex = String(index + 1);
}

heroLogoCycle?.addEventListener('click', () => {
  currentHeroLogoIndex = (currentHeroLogoIndex + 1) % heroLogoVariants.length;
  setHeroLogo(currentHeroLogoIndex);
});

heroLogoCycle?.addEventListener('keydown', (event) => {
  if (!['Enter', ' '].includes(event.key)) {
    return;
  }

  event.preventDefault();
  heroLogoCycle.click();
});

function setMenuOpen(isOpen) {
  body.classList.toggle('menu-open', isOpen);
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
  menuToggle?.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
}

function updateNavigation() {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.hash === `#${currentSection}`;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  header?.classList.toggle('scrolled', window.scrollY > 40);
}

menuToggle?.addEventListener('click', () => {
  setMenuOpen(!body.classList.contains('menu-open'));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && body.classList.contains('menu-open')) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1080) {
    setMenuOpen(false);
  }
});

window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

function handleForm(event) {
  event.preventDefault();

  const nome = document.getElementById('name').value.trim();
  const perfil = document.getElementById('profile').value;
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('phone').value.trim();
  const mensagem = document.getElementById('message').value.trim();

  const texto = `Olá, tenho interesse no Connect Vet do Brasil.

Nome: ${nome}
Perfil: ${perfil}
E-mail: ${email}
Telefone: ${telefone || 'Não informado'}

Mensagem:
${mensagem}`;

  const numeroWhatsApp = '5515996451575';
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  const whatsappWindow = window.open(url, '_blank');

  if (whatsappWindow) {
    whatsappWindow.opener = null;
    event.target.reset();
  } else {
    window.location.href = url;
  }
}

contactForm?.addEventListener('submit', handleForm);

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

const appIconPaths = {
  medical: '<path d="M12 5v14M5 12h14"/>',
  pin: '<path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/>',
  calendar: '<rect x="5" y="6" width="14" height="13" rx="2"/><path d="M8 4v4M16 4v4M5 10h14"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
  bolt: '<path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z"/>',
  users: '<path d="M16 18a4 4 0 0 0-8 0"/><circle cx="12" cy="10" r="3"/><path d="M20 18a3.5 3.5 0 0 0-4-3.4M8 14.6A3.5 3.5 0 0 0 4 18"/><circle cx="18" cy="10" r="2"/><circle cx="6" cy="10" r="2"/>',
  file: '<path d="M7 3h7l4 4v14H7Z"/><path d="M14 3v5h5M9.5 13h5M9.5 17h5"/>',
  target: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  gift: '<rect x="5" y="9" width="14" height="11" rx="2"/><path d="M12 9v11M5 13h14M8 9a2.2 2.2 0 1 1 4 0M16 9a2.2 2.2 0 1 0-4 0"/>'
};

function createAppIcon(iconName) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.innerHTML = appIconPaths[iconName] || appIconPaths.target;
  return svg;
}

function renderAppTool(content, index = 0) {
  const tool = content.tools?.[index];
  const panel = document.getElementById('appToolPanel');
  const bullets = document.getElementById('appToolBullets');

  if (!tool || !panel || !bullets) {
    return;
  }

  currentAppToolIndex = index;
  panel.classList.remove('changing');
  void panel.offsetWidth;
  panel.classList.add('changing');

  setText('appToolKicker', content.label);
  setText('appToolTitle', tool.title);
  setText('appToolText', tool.text);

  bullets.replaceChildren(...tool.bullets.map((text) => {
    const item = document.createElement('small');
    item.textContent = text;
    return item;
  }));

  document.querySelectorAll('#appQuickGrid button').forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
  });
}

function setAppLoggedIn(isLoggedIn) {
  const appScreen = document.querySelector('.app-screen');
  appScreen?.classList.toggle('app-logged-in', isLoggedIn);
}

function renderAppMode(mode, moveFocus = false) {
  const content = appModes[mode];
  const appScreen = document.querySelector('.app-screen');
  const description = document.querySelector('.app-mode-description');
  const highlights = document.getElementById('appModeHighlights');
  const quickGrid = document.getElementById('appQuickGrid');
  const bottomNav = document.querySelector('.app-bottom-nav');
  const alertIcon = document.querySelector('.app-alert-icon');

  if (!content || !appScreen || !description || !highlights || !quickGrid) {
    return;
  }

  currentAppMode = mode;
  description.classList.add('changing');
  appScreen.classList.add('changing');

  window.setTimeout(() => {
    setText('appModeLabel', content.label);
    setText('appModeTitle', content.title);
    setText('appModeText', content.text);
    setText('appLoginTitle', content.loginTitle);
    setText('appLoginText', content.loginText);
    setText('appEnterButton', content.loginButton);
    setText('appGreeting', content.greeting);
    setText('appHeadline', content.headline);
    setText('appAvatar', content.avatar);
    setText('appHeroTitle', content.heroTitle);
    setText('appHeroText', content.heroText);
    setText('appHeroAction', content.heroAction);
    setText('appHeroVisual', content.heroVisual);
    setText('appCardHeading', content.cardHeading);
    setText('appResultAvatar', content.resultAvatar);
    setText('appResultTitle', content.resultTitle);
    setText('appResultMeta', content.resultMeta);
    setText('appResultBadge', content.resultBadge);
    setText('appAlertTitle', content.alertTitle);
    setText('appAlertText', content.alertText);

    highlights.replaceChildren(...content.highlights.map((text) => {
      const item = document.createElement('span');
      item.textContent = text;
      return item;
    }));

    quickGrid.replaceChildren(...content.quickActions.map(([icon, label], index) => {
      const button = document.createElement('button');
      const iconElement = document.createElement('span');
      button.type = 'button';
      button.dataset.appTool = String(index);
      iconElement.append(createAppIcon(icon));
      button.append(iconElement, label);
      button.addEventListener('click', () => {
        setAppLoggedIn(true);
        renderAppTool(content, index);
        window.clearInterval(appModeInterval);
      });
      return button;
    }));

    if (alertIcon) {
      alertIcon.replaceChildren(createAppIcon(content.alertIcon));
    }

    if (bottomNav) {
      bottomNav.style.gridTemplateColumns = `repeat(${content.navItems.length}, 1fr)`;
    }

    bottomNav?.replaceChildren(...content.navItems.map((label, index) => {
      const item = document.createElement('span');
      const small = document.createElement('small');
      item.textContent = ['⌂', '◇', '☰', '●', '○'][index] || '○';
      item.classList.toggle('active', index === 0);
      small.textContent = label;
      item.append(small);
      return item;
    }));

    appScreen.dataset.mode = mode;
    setAppLoggedIn(false);
    renderAppTool(content, 0);
    appPreview?.setAttribute('aria-labelledby', `tab-${mode}`);

    appModeTabs.forEach((tab) => {
      const isActive = tab.dataset.appMode === mode;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;

      if (isActive && moveFocus) {
        tab.focus();
      }
    });

    description.classList.remove('changing');
    appScreen.classList.remove('changing');
  }, 180);
}

function restartAppModeRotation() {
  window.clearInterval(appModeInterval);
}

appModeTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    renderAppMode(tab.dataset.appMode);
    restartAppModeRotation();
  });

  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + appModeTabs.length) % appModeTabs.length;
    renderAppMode(appModeTabs[nextIndex].dataset.appMode, true);
    restartAppModeRotation();
  });
});

appPreview?.addEventListener('mouseenter', () => window.clearInterval(appModeInterval));
appPreview?.addEventListener('mouseleave', restartAppModeRotation);
appPreview?.addEventListener('focusin', () => window.clearInterval(appModeInterval));
appPreview?.addEventListener('focusout', restartAppModeRotation);
appEnterButton?.addEventListener('click', () => {
  setAppLoggedIn(true);
  window.clearInterval(appModeInterval);
});

if (appModeTabs.length) {
  renderAppMode(currentAppMode);
  restartAppModeRotation();
}

function renderEcosystemNode(nodeKey, moveFocus = false) {
  const content = ecosystemContent[nodeKey];
  const connections = document.getElementById('ecosystemDetailConnections');

  if (!content || !ecosystemDetail || !connections) {
    return;
  }

  ecosystemDetail.classList.add('changing');

  window.setTimeout(() => {
    setText('ecosystemDetailIndex', content.index);
    setText('ecosystemDetailIcon', content.icon);
    setText('ecosystemDetailLabel', content.label);
    setText('ecosystemDetailTitle', content.title);
    setText('ecosystemDetailText', content.text);
    setText('ecosystemDetailResult', content.result);

    connections.replaceChildren(...content.connections.map((connection) => {
      const item = document.createElement('span');
      item.textContent = connection;
      return item;
    }));

    ecosystemNodes.forEach((node) => {
      const isActive = node.dataset.ecosystemNode === nodeKey;
      node.classList.toggle('active', isActive);
      node.setAttribute('aria-pressed', String(isActive));

      if (isActive && moveFocus) {
        node.focus();
      }
    });

    ecosystemDetail.classList.remove('changing');
  }, 160);
}

ecosystemNodes.forEach((node, index) => {
  node.addEventListener('click', () => {
    renderEcosystemNode(node.dataset.ecosystemNode);
  });

  node.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
    const nextIndex = (index + direction + ecosystemNodes.length) % ecosystemNodes.length;
    renderEcosystemNode(ecosystemNodes[nextIndex].dataset.ecosystemNode, true);
  });
});

if (ecosystemNodes.length) {
  renderEcosystemNode('tutor');
}
