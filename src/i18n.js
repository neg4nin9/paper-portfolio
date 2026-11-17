export const translations = {
  en: {
    meta: {
      title: 'Eddy Conejo — UI/UX designer & full-stack developer',
      description:
        'Eddy Conejo designs and builds web products in Costa Rica: UX research and Figma prototypes, Laravel and React. Portfolio, CV and contact.',
    },
    nav: {
      skip: 'Skip to content',
      navigation: 'Navigation',
      menu: 'Menu',
      close: 'Close menu',
      about: 'Profile',
      work: 'Work',
      services: 'Services',
      skills: 'Stack',
      contact: 'Contact',
      talk: "Let's talk",
      switchName: 'Español',
      switchCode: 'ES',
      switchTo: 'Switch to Spanish',
    },
    hero: {
      eyebrow: 'Portfolio 2026',
      available: 'Open to work — remote or on-site',
      role: 'UI/UX designer & full-stack developer',
      tagline: 'Polished designs. Intelligent systems. Beyond the pixel.',
      viewWork: 'See the work',
      downloadCV: 'Download CV',
      email: 'Email me',
      caption: 'Mid-coffee, mid-sprint',
      coords: '10.09° N / 84.47° W',
      place: 'San Ramón, Costa Rica — UTC−6',
    },
    about: {
      label: 'Profile',
      title: 'Design and code, seamless handoff',
      lead: 'B.Sc. in Informatics and Multimedia Technology from the University of Costa Rica, with a Licentiate in progress focusing on UI/UX.',
      p1: 'I take digital products from initial research to production-ready code: UX research, interface design, and full-stack development, ensuring technical decisions always elevate the user experience.',
      p2: 'What I value: respectful interfaces built for humans, readable and maintainable code, and decisions backed by evidence rather than guesswork.',
      factsLabel: 'Fact sheet',
      facts: [
        {
          label: 'Based in',
          value: 'San Ramón, Alajuela, Costa Rica',
        },
        {
          label: 'Education',
          value: 'B.Sc. Informatics & Multimedia Technology, UCR —\u00A02025',
        },
        {
          label: 'Specialization',
          value: 'Licentiate in UI/UX, University of Costa Rica (In progress)',
        },
        {
          label: 'Languages',
          value: 'Spanish (Native), English (C1 Certified)',
        },
        {
          label: 'Certifications',
          value: 'Google Analytics 4 (2025), English C1 — CINDE\u00A0Jobs\u00A0Belt',
        },
        {
          label: 'Working style',
          value: 'Scrum agile teams, research-driven, accessibility-first',
        },
      ],
    },
    work: {
      label: 'Selected work',
      title: 'Projects worth a look',
      stackLabel: 'Built with',
      zoom: 'enlarge',
      close: 'Close',
      plates: [
        {
          title: 'LinkTrim',
          kind: 'URL shortener — full stack',
          imageAlt:
            'LinkTrim home screen: the field for pasting a URL and the Shorten button.',
          description:
            'Low-latency redirects with three layers of collision prevention, automatic cleanup of dormant links on a cron schedule, and a decoupled cloud deployment across Vercel, Render and Aiven. The interface follows ISO 9241 accessibility guidance.',
          stack: ['React', 'Laravel', 'Docker', 'GitHub Actions', 'MySQL'],
        },
        {
          title: 'Winter Olympics',
          kind: 'Data visualization — web app',
          description:
            'Interactive dashboard for historical medal data from 1980 to 2014. A hand-cleaned dataset drives synchronized charts — medals per year, top ten countries, medals by sport — behind reactive filters for year, country and sport.',
          stack: ['React', 'Recharts', 'Excel', 'Vercel'],
        },
        {
          title: 'Ciclo Hidalgo - Grupo Zenith',
          kind: 'E-commerce platform — client project',
          description:
            'Academic project built by a six-person Scrum team. I owned the Laravel REST API — JWT auth, Eloquent, pagination — and the React SPA with protected routes and an admin dashboard.',
          stack: ['React', 'Laravel', 'Tailwind CSS', 'Chart.js', 'JWT'],
        },
        {
          title: 'CRFiguras',
          kind: 'E-commerce & brand identity',
          description:
            'Collaborative store on WordPress and WooCommerce. I built the full identity — logo, type scale, palette — plus the responsive catalogue layouts, the WooCommerce setup and the deployment on Pantheon.',
          stack: ['WordPress', 'WooCommerce', 'Elementor', 'Branding'],
        },
        {
          title: 'Almacenes Unidos',
          kind: 'UX redesign — case study',
          description:
            'A redesign grounded in evidence: competitive benchmarking, a full Nielsen heuristic evaluation, and navigable high-fidelity prototypes with an accessibility pass in Figma.',
          stack: ['Figma', 'UX research', 'Heuristic evaluation', 'Prototyping'],
        },
      ],
    },
    services: {
      label: 'Services',
      title: 'Core expertise & deliverables',
      note: 'From user discovery to robust production deployment.',
      givesLabel: 'Deliverables',
      items: [
        {
          glyph: 'research',
          title: 'UX Research',
          body: 'User interviews, personas, journey maps, and heuristic audits turning insights into actionable strategies.',
          gives: 'Research notes, audit reports, prioritized findings',
        },
        {
          glyph: 'interface',
          title: 'UI Design & Systems',
          body: 'Accessible, pixel-precise Figma interfaces, design systems, and component libraries engineered for smooth handoff.',
          gives: 'Wireframes, high-fidelity screens, component libraries',
        },
        {
          glyph: 'stack',
          title: 'Full-Stack Development',
          body: 'React frontends paired with robust Laravel and REST APIs, backed by scalable database schemas.',
          gives: 'Production-ready app, API architecture, DB schema',
        },
        {
          glyph: 'deploy',
          title: 'Deployment & Ops',
          body: 'Containerization, CI/CD pipelines, and cloud deployments built for high availability and performance.',
          gives: 'Docker config, CI pipeline, cloud infrastructure',
        },
      ],
    },
    skills: {
      label: 'The stack',
      title: 'Tools I actually use',
      note: 'Certified C1 English and Google Analytics 4. Comfortable in a terminal, a Figma file and a client meeting — often in the same afternoon.',
      groups: [
        {
          title: 'Design & research',
          items: [
            'UX research',
            'Usability testing',
            'Heuristic evaluation',
            'Wireframes',
            'Prototyping',
            'Design systems',
          ],
        },
        {
          title: 'Design tools',
          items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'ArtCraft Suite', 'Brand identity'],
        },
        {
          title: 'Frontend',
          items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Recharts'],
        },
        {
          title: 'Backend & data',
          items: ['Laravel', 'PHP', 'Node.js', 'Python', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB'],
        },
        {
          title: 'Infrastructure',
          items: [
            'Git & GitHub',
            'Docker',
            'GitHub Actions',
            'Vercel',
            'AWS',
            'Linux',
            'Windows',
            'Bash',
            'GA4',
          ],
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Let’s build something',
      lead: 'A product, a redesign, or a role on your team. I answer email within a day.',
      emailLabel: 'Write to',
      phoneLabel: 'tel.',
      copy: 'Copy address',
      copied: 'Address copied',
      downloadCV: 'Download CV',
      availability: 'Open to work — remote or on-site in Costa Rica',
      place: 'San Ramón, Costa Rica — UTC−6',
      cvNote: 'CV in English (PDF, 1 page)',
      linksLabel: 'Elsewhere',
      githubNote: 'Profile and repositories',
      githubCta: 'Open GitHub profile',
    },
    footer: {
      rights: '© 2026 Eddy Conejo',
      inkNote: 'Printed in two inks — cobalt #1E2BD0 and magenta #FF3D7F on bone paper.',
      typeNote: 'Set in Archivo and Space Mono.',
      buildNote: 'Built with React and Tailwind CSS.',
      top: 'Back to top',
    },
  },

  es: {
    meta: {
      title: 'Eddy Conejo — Diseñador UI/UX y desarrollador full-stack',
      description:
        'Eddy Conejo diseña y construye productos web en Costa Rica: investigación UX y prototipos en Figma, Laravel y React. Portafolio, CV y contacto.',
    },
    nav: {
      skip: 'Saltar al contenido',
      navigation: 'Navegación',
      menu: 'Menú',
      close: 'Cerrar menú',
      about: 'Perfil',
      work: 'Proyectos',
      services: 'Servicios',
      skills: 'Stack',
      contact: 'Contacto',
      talk: 'Hablemos',
      switchName: 'English',
      switchCode: 'EN',
      switchTo: 'Cambiar a inglés',
    },
    hero: {
      eyebrow: 'Portafolio 2026',
      available: 'Disponible — remoto o presencial',
      role: 'Diseñador UI/UX y desarrollador full-stack',
      tagline: 'Diseños pulidos. Sistemas inteligentes. Más allá del pixel.',
      viewWork: 'Ver proyectos',
      downloadCV: 'Descargar CV',
      email: 'Escríbeme',
      caption: 'A medio café, a medio sprint',
      coords: '10.09° N / 84.47° O',
      place: 'San Ramón, Costa Rica — UTC−6',
    },
    about: {
      label: 'Perfil',
      title: 'Diseño y código sin fricción',
      lead: 'Bachiller en Informática y Tecnología Multimedia por la Universidad de Costa Rica, con Licenciatura en curso enfocada en UI/UX.',
      p1: 'Conduzco productos digitales desde la investigación inicial hasta código en producción: investigación UX, diseño de interfaces y desarrollo full-stack, asegurando que las decisiones técnicas potencien la experiencia.',
      p2: 'Lo que valoro: interfaces respetuosas centradas en las personas, código limpio y mantenible, y decisiones respaldadas por evidencia en lugar de intuición.',
      factsLabel: 'Ficha técnica',
      facts: [
        {
          label: 'Ubicación',
          value: 'San Ramón, Alajuela, Costa Rica',
        },
        {
          label: 'Formación',
          value: 'Bach. Informática y Tecnología Multimedia, UCR —\u00A02025',
        },
        {
          label: 'Especialización',
          value: 'Licenciatura en UI/UX, Universidad de Costa Rica (En curso)',
        },
        {
          label: 'Idiomas',
          value: 'Español (Nativo), Inglés (C1 Certificado)',
        },
        {
          label: 'Certificaciones',
          value: 'Google Analytics 4 (2025), Inglés C1 — CINDE\u00A0Jobs\u00A0Belt',
        },
        {
          label: 'Metodología',
          value: 'Equipos ágiles Scrum, enfoque en investigación y accesibilidad',
        },
      ],
    },
    work: {
      label: 'Proyectos',
      title: 'Proyectos que vale la pena ver',
      stackLabel: 'Hecho con',
      zoom: 'ampliar',
      close: 'Cerrar',
      plates: [
        {
          title: 'LinkTrim',
          kind: 'Acortador de URLs — full stack',
          imageAlt:
            'Pantalla de inicio de LinkTrim: el campo para pegar una URL y el botón Acortar.',
          description:
            'Redirecciones de baja latencia con tres capas de prevención de colisiones, limpieza automática de enlaces inactivos por cron y un despliegue cloud desacoplado entre Vercel, Render y Aiven. La interfaz sigue la guía de accesibilidad ISO 9241.',
          stack: ['React', 'Laravel', 'Docker', 'GitHub Actions', 'MySQL'],
        },
        {
          title: 'Winter Olympics',
          kind: 'Visualización de datos — aplicación web',
          description:
            'Dashboard interactivo con datos históricos de medallas de 1980 a 2014. Un dataset limpiado a mano alimenta gráficos sincronizados — medallas por año, top diez países, medallas por deporte — con filtros reactivos de año, país y deporte.',
          stack: ['React', 'Recharts', 'Excel', 'Vercel'],
        },
        {
          title: 'Ciclo Hidalgo - Grupo Zenith',
          kind: 'Plataforma e-commerce — proyecto de cliente',
          description:
            'Proyecto académico desarrollado por un equipo Scrum de seis personas. Me encargué de la API REST en Laravel — JWT, Eloquent, paginación — y de la SPA en React con rutas protegidas y dashboard de administración.',
          stack: ['React', 'Laravel', 'Tailwind CSS', 'Chart.js', 'JWT'],
        },
        {
          title: 'CRFiguras',
          kind: 'E-commerce e identidad de marca',
          description:
            'Tienda colaborativa en WordPress y WooCommerce. Construí la identidad completa — logo, escala tipográfica, paleta — además de la maquetación responsive del catálogo, la configuración de WooCommerce y el despliegue en Pantheon.',
          stack: ['WordPress', 'WooCommerce', 'Elementor', 'Branding'],
        },
        {
          title: 'Almacenes Unidos',
          kind: 'Rediseño UX — caso de estudio',
          description:
            'Un rediseño basado en evidencia: benchmarking competitivo, una evaluación heurística completa de Nielsen y prototipos navegables de alta fidelidad con revisión de accesibilidad en Figma.',
          stack: ['Figma', 'Investigación UX', 'Evaluación heurística', 'Prototipado'],
        },
      ],
    },
    services: {
      label: 'Servicios',
      title: 'Áreas de especialización y entregables',
      note: 'Desde el descubrimiento de usuario hasta el despliegue en producción.',
      givesLabel: 'Entregables',
      items: [
        {
          glyph: 'research',
          title: 'Investigación UX',
          body: 'Entrevistas, personas, mapas de recorrido y auditorías heurísticas que transforman insights en estrategias accionables.',
          gives: 'Notas de investigación, informes de auditoría, hallazgos priorizados',
        },
        {
          glyph: 'interface',
          title: 'Diseño UI y Sistemas',
          body: 'Interfaces accesibles y precisas en Figma, sistemas de diseño y librerías de componentes optimizados para el traspaso.',
          gives: 'Wireframes, pantallas de alta fidelidad, librería de componentes',
        },
        {
          glyph: 'stack',
          title: 'Desarrollo Full-Stack',
          body: 'Interfaces en React conectadas a APIs REST y Laravel, respaldadas por esquemas de base de datos escalables.',
          gives: 'Aplicación funcional, arquitectura de API, esquema de base de datos',
        },
        {
          glyph: 'deploy',
          title: 'Despliegue y Operaciones',
          body: 'Contenedores, pipelines de CI/CD y despliegues en la nube configurados para garantizar alta disponibilidad y rendimiento.',
          gives: 'Configuración Docker, pipeline de CI, infraestructura cloud',
        },
      ],
    },
    skills: {
      label: 'Stack',
      title: 'Herramientas que uso de verdad',
      note: 'Inglés C1 certificado y Google Analytics 4. Cómodo en una terminal, en un archivo de Figma y en una reunión con cliente — a veces la misma tarde.',
      groups: [
        {
          title: 'Diseño e investigación',
          items: [
            'Investigación UX',
            'Pruebas de usabilidad',
            'Evaluación heurística',
            'Wireframes',
            'Prototipado',
            'Sistemas de diseño',
          ],
        },
        {
          title: 'Herramientas de diseño',
          items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'ArtCraft Suite', 'Identidad de marca'],
        },
        {
          title: 'Frontend',
          items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Recharts'],
        },
        {
          title: 'Backend y datos',
          items: ['Laravel', 'PHP', 'Node.js', 'Python', 'APIs REST', 'MySQL', 'PostgreSQL', 'MongoDB'],
        },
        {
          title: 'Infraestructura',
          items: [
            'Git y GitHub',
            'Docker',
            'GitHub Actions',
            'Vercel',
            'AWS',
            'Linux',
            'Windows',
            'Bash',
            'GA4',
          ],
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Construyamos algo',
      lead: 'Un producto, un rediseño o un puesto en tu equipo. Respondo el correo en menos de un día.',
      emailLabel: 'Escribe a',
      phoneLabel: 'tel.',
      copy: 'Copiar dirección',
      copied: 'Dirección copiada',
      downloadCV: 'Descargar CV',
      availability: 'Disponible — remoto o presencial en Costa Rica',
      place: 'San Ramón, Costa Rica — UTC−6',
      cvNote: 'CV en español (PDF, 1 página)',
      linksLabel: 'También en línea',
      githubNote: 'Perfil y repositorios',
      githubCta: 'Abrir perfil de GitHub',
    },
    footer: {
      rights: '© 2026 Eddy Conejo',
      inkNote: 'Impreso en dos tintas — cobalto #1E2BD0 y magenta #FF3D7F sobre papel hueso.',
      typeNote: 'Compuesto en Archivo y Space Mono.',
      buildNote: 'Hecho con React y Tailwind CSS.',
      top: 'Volver arriba',
    },
  },
}
