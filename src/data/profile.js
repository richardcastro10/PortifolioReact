// ─────────────────────────────────────────────────────────────
// Conteúdo do portfólio — edite tudo por aqui.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Richard Rocha',
  role: 'Desenvolvedor Full Stack',
  location: 'Santos · SP, Brasil',
  available: true, // mostra o selo "Disponível para projetos"
  photo: '/img/richard.png',

  // Hero
  greeting: 'Olá, eu sou o Richard 👋',
  headline: 'Desenvolvedor Full Stack que transforma ideias em produtos.',
  subheadline:
    'Atuo de ponta a ponta — web e mobile — com C#, .NET, Python e React. Especializado em aplicativos cross-platform de alta qualidade para Android e iOS.',

  // Links
  whatsapp: '5513997746004', // só números, com DDI 55
  cv: 'https://drive.google.com/file/d/1Nm1mnHBiy3csL2ozRYKkV3His6YnaCdm/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/richard-rocha-castro/',
  github: 'https://github.com/richardcastro10',
}

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
]

export const stats = [
  { value: '4+', label: 'anos de experiência' },
  { value: '5', label: 'experiências profissionais' },
  { value: 'Pós', label: 'em Engenharia de Software' },
]

export const about = {
  paragraphs: [
    'Sou desenvolvedor com experiência em web e mobile, com foco em aplicativos cross-platform de alta qualidade para Android e iOS usando .NET MAUI e Xamarin.',
    'Tenho sólido domínio de padrões de arquitetura — especialmente MVVM, .NET Core e Entity Framework — e aplico os princípios SOLID para entregar um código modular, fácil de manter e escalar.',
    'Valorizo boas práticas, testes unitários e colaboração: trabalho junto a designers e outros devs, participo das cerimônias do time e documento para descentralizar o conhecimento, sempre com foco na qualidade antes do release.',
  ],
  education: [
    'Graduando em Análise e Desenvolvimento de Sistemas — Faculdade Unibr, São Vicente',
    'Pós-graduado em Engenharia de Software',
  ],
  focus: 'Desenvolvimento full stack web e mobile na Konia Tecnologia, com React, Python e .NET.',
}

// Linha do tempo de experiência (mais recente primeiro)
export const experience = [
  {
    role: 'Desenvolvedor Full Stack Pleno',
    company: 'Konia Tecnologia',
    period: 'mai 2025 — atual',
    location: 'Remoto',
    current: true,
    bullets: [
      'Desenvolvo sistemas web e mobile com Python, Kotlin, SQL, React e Docker, mantendo alta disponibilidade das aplicações.',
      'Resolvo falhas críticas de níveis 1 e 2 com análise profunda de logs e do comportamento da aplicação.',
      'Implemento melhorias contínuas com refatorações e padronizações que aumentam performance e manutenibilidade.',
    ],
    tags: ['Python', 'React', 'Kotlin', 'Django', 'Docker', 'SQL'],
  },
  {
    role: 'Analista de Sistemas',
    company: 'Plano Santa Saúde',
    period: 'jun 2024 — mai 2025',
    location: 'Santos, SP',
    bullets: [
      'Desenvolvi soluções web intuitivas com HTML5, CSS3, JavaScript e PHP, criando páginas dinâmicas que melhoraram significativamente a experiência de navegação dos usuários.',
    ],
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'Desenvolvedor Mobile Pleno',
    company: 'Verion Agricultura',
    period: 'jan 2024 — jun 2024',
    location: 'Santos, SP · Híbrido',
    bullets: [
      'Construí aplicativos móveis robustos com .NET MAUI, Avalonia e C#, integrando .NET Core e Entity Framework para criar soluções escaláveis com APIs eficientes.',
    ],
    tags: ['.NET MAUI', 'Avalonia', 'C#', '.NET Core', 'Entity Framework'],
  },
  {
    role: 'Desenvolvedor Mobile Júnior',
    company: 'iPORT Solutions',
    period: 'ago 2022 — dez 2023',
    location: 'Santos, SP',
    bullets: [
      'Desenvolvi aplicativos móveis com Xamarin e C#, implementando designs do Figma com precisão para uma experiência consistente e intuitiva.',
      'Configurei e gerenciei usuários no Google Workspace e ERP Themis, otimizando permissões para mais colaboração e segurança.',
    ],
    tags: ['Xamarin', 'C#', 'MVVM', 'SQL', 'Figma'],
  },
  {
    role: 'Desenvolvedor Mobile Júnior',
    company: 'Verion Agricultura',
    period: 'mai 2022 — ago 2022',
    location: 'Santos, SP',
    bullets: [
      'Desenvolvi aplicativos móveis com Xamarin e C#, aplicando princípios SOLID para criar código modular e reutilizável, reduzindo o impacto de mudanças futuras.',
    ],
    tags: ['Xamarin', 'C#', 'SOLID', '.NET Core'],
  },
]

export const services = [
  {
    title: 'Apps Mobile Cross-platform',
    copy: 'Aplicativos para Android e iOS com .NET MAUI, Xamarin e C#, com arquitetura MVVM bem estruturada.',
    icon: 'smartphone',
  },
  {
    title: 'Aplicações Web Full Stack',
    copy: 'Sistemas web do back-end à interface, com React, Python/Django, PHP e .NET.',
    icon: 'globe',
  },
  {
    title: 'Back-end & APIs',
    copy: 'Serviços e integrações escaláveis com .NET Core, Entity Framework e SQL.',
    icon: 'server',
  },
  {
    title: 'Qualidade & Sustentação',
    copy: 'Refatoração, testes unitários e correção de falhas críticas com análise de logs.',
    icon: 'shield',
  },
]

export const projects = [
  {
    id: 'otica',
    name: 'Ótica Menezes',
    label: 'Site para cliente · Óptica em Santos',
    desc: 'Landing page de alta conversão para uma óptica com duas lojas no Centro de Santos. Hero com animação de foco, vitrine de produtos, mapa das unidades e botões integrados ao WhatsApp — com todo o conteúdo editável pelo próprio cliente.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    video: '/img/projetos/otica.mp4',
    poster: '/img/projetos/otica.jpg',
    live: '', // coloque a URL quando o site estiver publicado
    repo: '',
    note: 'Projeto entregue para cliente',
  },
  {
    id: 'rgm',
    name: 'RGM Personalizações',
    label: 'Site para cliente · Personalizados em Santos',
    desc: 'Site institucional para uma loja de personalizados — canecas, garrafas, impressões e papelaria. Catálogo de produtos e serviços, seção de currículos, identidade visual em navy e amarelo, e contato direto via WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: '/img/projetos/rgm.mp4',
    poster: '/img/projetos/rgm.jpg',
    live: '', // coloque a URL quando o site estiver publicado
    repo: 'https://github.com/richardcastro10/RGM',
    note: 'Projeto entregue para cliente',
  },
]

export const skills = [
  { group: 'Linguagens', items: ['C#', 'Python', 'Kotlin', 'JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frameworks & Plataformas', items: ['.NET MAUI', 'Xamarin', '.NET Core', 'Entity Framework', 'Avalonia', 'React', 'Django'] },
  { group: 'Ferramentas & Práticas', items: ['Git', 'Docker', 'MVVM', 'SOLID', 'Scrum / Kanban', 'Testes unitários', 'Figma'] },
]

// ── WhatsApp ──────────────────────────────────────────────
export function waUrl(message) {
  const base = `https://wa.me/${profile.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const contactMessage =
  'Olá, Richard! Vi seu portfólio e gostaria de conversar sobre um projeto.'
