// ─────────────────────────────────────────────────────────────
// Conteúdo do portfólio — edite tudo por aqui.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Richard Rocha',
  initials: 'RR',
  role: 'Desenvolvedor Full Stack',
  location: 'Santos, SP',
  available: true, // mostra o selo "Disponível para projetos"

  // Hero
  headline: ['Software que resolve', 'problemas reais'],
  subheadline:
    'Desenvolvo aplicações web, mobile e automações com foco em produto, performance e código sustentável.',

  // Links
  whatsapp: '5513997746004', // só números, com DDI 55
  cv: 'https://drive.google.com/file/d/1Nm1mnHBiy3csL2ozRYKkV3His6YnaCdm/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/richard-rocha-castro/',
  github: 'https://github.com/richardcastro10',
}

export const nav = [
  { label: 'Trabalho', href: '#trabalho' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

// Snippets que aparecem digitando na janela de código do topo.
export const snippets = [
  {
    label: 'C# / .NET',
    code: `public async Task<Result> ExecuteAsync()
{
    try
    {
        var data = await _service.GetByIdAsync(id);
        if (data is null)
            return Result.Fail("Não encontrado");

        return Result.Success(data);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Erro ao buscar");
        return Result.Fail("Erro interno");
    }
}`,
  },
  {
    label: 'React',
    code: `export function Agenda({ lojaId }) {
  const { data, isLoading } = useAgenda(lojaId);

  if (isLoading) return <Skeleton />;

  return (
    <ul className="agenda">
      {data.map((horario) => (
        <Horario key={horario.id} {...horario} />
      ))}
    </ul>
  );
}`,
  },
  {
    label: 'Python / Django',
    code: `class CheckinView(APIView):
    def post(self, request):
        aluno = get_aluno(request.data["cpf"])

        if aluno.checkin_hoje():
            return Response(status=409)

        Checkin.objects.create(aluno=aluno)
        return Response({"ok": True}, status=201)`,
  },
]

export const stats = [
  { value: '4+', label: 'anos de experiência' },
  { value: '5', label: 'experiências profissionais' },
  { value: 'Pós', label: 'em Engenharia de Software' },
]

export const about = {
  paragraphs: [
    'Sou desenvolvedor full stack com experiência em web e mobile. Hoje trabalho na Konia Tecnologia com React, Python e .NET, e nas horas vagas transformo problemas de negócios reais em produtos — como o GymPulse e o AutoCare.',
    'Tenho base sólida em arquitetura (MVVM, .NET Core, Entity Framework) e aplico SOLID para entregar código modular, fácil de manter e escalar.',
    'Valorizo boas práticas, testes e colaboração: trabalho junto a designers e devs, documento para descentralizar o conhecimento e foco na qualidade antes do release.',
  ],
  education: [
    'Pós-graduado em Engenharia de Software',
    'Análise e Desenvolvimento de Sistemas — Unibr, São Vicente',
  ],
}

// Linha do tempo de experiência (mais recente primeiro)
export const experience = [
  {
    role: 'Desenvolvedor Full Stack Pleno',
    company: 'Konia Tecnologia',
    period: '2025 — atual',
    current: true,
    summary: 'Sistemas web e mobile com alta disponibilidade, sustentação N1/N2 e refatorações de performance.',
    tags: ['Python', 'React', 'Kotlin', 'Django', 'Docker', 'SQL'],
  },
  {
    role: 'Analista de Sistemas',
    company: 'Plano Santa Saúde',
    period: '2024 — 2025',
    summary: 'Soluções web com páginas dinâmicas que melhoraram a navegação dos usuários.',
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'Desenvolvedor Mobile Pleno',
    company: 'Verion Agricultura',
    period: '2024',
    summary: 'Apps com .NET MAUI e Avalonia integrados a APIs .NET Core e Entity Framework.',
    tags: ['.NET MAUI', 'Avalonia', 'C#', 'EF Core'],
  },
  {
    role: 'Desenvolvedor Mobile Júnior',
    company: 'iPORT Solutions',
    period: '2022 — 2023',
    summary: 'Apps Xamarin fiéis ao Figma, além de gestão de Google Workspace e ERP.',
    tags: ['Xamarin', 'C#', 'MVVM', 'SQL'],
  },
  {
    role: 'Desenvolvedor Mobile Júnior',
    company: 'Verion Agricultura',
    period: '2022',
    summary: 'Apps Xamarin com SOLID para código modular e reutilizável.',
    tags: ['Xamarin', 'C#', 'SOLID'],
  },
]

// orientation: 'landscape' (16:9, moldura de navegador) ou 'portrait' (4:5, moldura de celular)
export const projects = [
  {
    id: 'gympulse',
    name: 'GymPulse',
    short: 'Gestão de academias com check-in pelo celular',
    label: 'Produto próprio · SaaS para academias',
    desc: 'Plataforma para academias, lutas e boxes. O aluno faz check-in pelo celular e a academia acompanha tudo em tempo real — alunos, presenças, faixas, avisos e financeiro — com a marca de cada academia.',
    highlights: [
      'Check-in do aluno pelo celular, validado no painel na hora',
      'Dashboard em tempo real com presenças por origem (mensalista, Gympass, TotalPass)',
      'Controle de faixas e graduações por modalidade',
      'Avisos publicados pela academia chegam ao aluno na hora',
    ],
    tags: ['Next.js', 'React', 'Vercel'],
    video: '/img/projetos/gympulse.mp4',
    poster: '/img/projetos/gympulse.jpg',
    orientation: 'portrait',
    live: 'https://gympulse-br.vercel.app/plataforma/login',
    repo: '',
  },
  {
    id: 'autocare',
    name: 'AutoCare',
    short: 'Agendamento online para estéticas automotivas',
    label: 'Produto próprio · Marketplace + painel da loja',
    desc: 'O cliente encontra a estética, escolhe o serviço, informa o veículo e reserva um horário livre em menos de 1 minuto. Do lado da loja, um painel completo para tocar a operação do dia.',
    highlights: [
      'Agendamento em 6 passos, mostrando só horários livres',
      'Agenda da loja com confirmação e aviso pelo WhatsApp',
      'Estoque com custo por serviço e baixa automática ao concluir',
      'Financeiro, relatórios e dashboard de faturamento',
    ],
    tags: ['Next.js', 'React', 'Vercel'],
    video: '/img/projetos/autocare.mp4',
    poster: '/img/projetos/autocare.jpg',
    orientation: 'landscape',
    live: 'https://auto-care-red.vercel.app/',
    repo: '',
  },
  {
    id: 'otica',
    name: 'Ótica Menezes',
    short: 'Landing page de alta conversão para óptica',
    label: 'Site para cliente · Óptica em Santos',
    desc: 'Landing page para uma óptica com duas lojas no Centro de Santos, com todo o conteúdo editável pelo próprio cliente.',
    highlights: [
      'Hero com animação de foco',
      'Vitrine de produtos e mapa das unidades',
      'Botões integrados ao WhatsApp',
    ],
    tags: ['React', 'Tailwind', 'Framer Motion'],
    video: '/img/projetos/otica.mp4',
    poster: '/img/projetos/otica.jpg',
    orientation: 'landscape',
    live: '', // coloque a URL quando o site estiver publicado
    repo: '',
  },
  {
    id: 'rgm',
    name: 'RGM Personalizações',
    short: 'Site institucional para loja de personalizados',
    label: 'Site para cliente · Personalizados em Santos',
    desc: 'Site para uma loja de canecas, garrafas, impressões e papelaria, com identidade visual em navy e amarelo.',
    highlights: [
      'Catálogo de produtos e serviços',
      'Seção de currículos',
      'Contato direto via WhatsApp',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: '/img/projetos/rgm.mp4',
    poster: '/img/projetos/rgm.jpg',
    orientation: 'landscape',
    live: '', // coloque a URL quando o site estiver publicado
    repo: 'https://github.com/richardcastro10/RGM',
  },
]

export const skills = [
  { group: 'Linguagens', items: ['C#', 'Python', 'Kotlin', 'JavaScript', 'PHP', 'SQL'] },
  { group: 'Frameworks', items: ['.NET Core', '.NET MAUI', 'Entity Framework', 'React', 'Next.js', 'Django', 'Xamarin'] },
  { group: 'Práticas', items: ['Git', 'Docker', 'MVVM', 'SOLID', 'Testes', 'Scrum / Kanban', 'Figma'] },
]

// ── WhatsApp ──────────────────────────────────────────────
export function waUrl(message) {
  const base = `https://wa.me/${profile.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const contactMessage =
  'Olá, Richard! Vi seu portfólio e gostaria de conversar sobre um projeto.'
