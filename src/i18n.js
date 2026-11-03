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
      tagline:
        'I design the interface, then build the thing behind it — research and Figma prototypes on one side, Laravel and React on the other.',
      viewWork: 'See the work',
      downloadCV: 'Download CV',
      email: 'Email me',
      caption: 'Mid-coffee, mid-sprint',
      coords: '10.09° N / 84.47° W',
      place: 'San Ramón, Costa Rica — UTC−6',
    },
    about: {
      label: 'Profile',
      title: 'Design and code, one handoff',
      lead: 'A bachelor’s degree in Informatics and Multimedia Technology from the University of Costa Rica, and a licentiate in progress with a UI/UX emphasis.',
      p1: 'I build web applications end to end — database, API and interface — and I design the experience that holds them together. Research first, then Figma, then React and Laravel in Scrum sprints with Git and CI/CD.',
      p2: 'What I care about: interfaces that respect the person using them, code someone else can read, and decisions backed by evidence instead of taste.',
      factsLabel: 'Fact sheet',
      facts: [
        {
          label: 'Based in',
          value: 'San Ramón, Alajuela, Costa Rica',
        },
        {
          label: 'Studied',
          value: 'B.Sc. Informatics & Multimedia Technology, UCR — 2026',
        },
        {
          label: 'Studying',
          value: 'Licentiate in UI/UX, University of Costa Rica',
        },
        {
          label: 'Languages',
          value: 'Spanish (native), English (C1, certified)',
        },
        {
          label: 'Certified',
          value: 'Google Analytics 4 — 2025',
        },
        {
          label: 'Working style',
          value: 'Scrum teams, research-led, accessibility as a default',
        },
      ],
    },
    work: {
      label: 'Selected work',
      title: 'Projects worth a look',
      stackLabel: 'Built with',
      plates: [
        {
          title: 'LinkTrim',
          kind: 'URL shortener — full stack',
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
          title: 'Grupo Zenith',
          kind: 'E-commerce platform — client project',
          description:
            'Academic project for a real client, built by a six-person Scrum team. I owned the Laravel REST API — JWT auth, Eloquent, pagination — and the React SPA with protected routes and an admin dashboard.',
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
      label: 'What I do',
      title: 'Four ways I help',
      note: 'From the first user interview to the deployed build.',
      givesLabel: 'You get',
      items: [
        {
          glyph: 'research',
          title: 'UX research',
          body: 'Interviews, personas, journey maps and heuristic audits that turn opinions into something you can test.',
          gives: 'Interview notes, audit report, prioritised findings',
        },
        {
          glyph: 'interface',
          title: 'Interface design',
          body: 'Accessible, pixel-precise screens in Figma — design systems, auto layout, component libraries that survive handoff.',
          gives: 'Wireframes, high-fidelity screens, component library',
        },
        {
          glyph: 'stack',
          title: 'Full-stack build',
          body: 'React on the front, Laravel and REST APIs on the back, with the database designed to carry both.',
          gives: 'Working app, API, database schema',
        },
        {
          glyph: 'deploy',
          title: 'Ship & run',
          body: 'Containers, CI/CD and cloud deployments set up so the product can go live and stay that way.',
          gives: 'Docker setup, CI pipeline, cloud deployment',
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
          items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Brand identity'],
        },
        {
          title: 'Frontend',
          items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Recharts'],
        },
        {
          title: 'Backend & data',
          items: ['Laravel', 'PHP', 'Node.js', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB'],
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
      tagline:
        'Diseño la interfaz y después construyo lo que hay detrás: investigación y prototipos en Figma por un lado, Laravel y React por el otro.',
      viewWork: 'Ver proyectos',
      downloadCV: 'Descargar CV',
      email: 'Escríbeme',
      caption: 'A medio café, a medio sprint',
      coords: '10.09° N / 84.47° O',
      place: 'San Ramón, Costa Rica — UTC−6',
    },
    about: {
      label: 'Perfil',
      title: 'Diseño y código, un solo traspaso',
      lead: 'Bachiller en Informática y Tecnología Multimedia por la Universidad de Costa Rica, y Licenciatura en curso con énfasis en UI/UX.',
      p1: 'Construyo aplicaciones web de punta a punta — base de datos, API e interfaz — y diseño la experiencia que las sostiene. Primero la investigación, luego Figma, luego React y Laravel en sprints Scrum con Git y CI/CD.',
      p2: 'Lo que me importa: interfaces que respetan a quien las usa, código que otra persona puede leer y decisiones respaldadas por evidencia y no por gusto.',
      factsLabel: 'Ficha técnica',
      facts: [
        {
          label: 'Ubicación',
          value: 'San Ramón, Alajuela, Costa Rica',
        },
        {
          label: 'Formación',
          value: 'Bach. Informática y Tecnología Multimedia, UCR — 2026',
        },
        {
          label: 'Cursando',
          value: 'Licenciatura en UI/UX, Universidad de Costa Rica',
        },
        {
          label: 'Idiomas',
          value: 'Español (nativo), Inglés (C1 certificado)',
        },
        {
          label: 'Certificado',
          value: 'Google Analytics 4 — 2025',
        },
        {
          label: 'Forma de trabajo',
          value: 'Equipos Scrum, investigación primero, accesibilidad por defecto',
        },
      ],
    },
    work: {
      label: 'Proyectos',
      title: 'Proyectos que vale la pena ver',
      stackLabel: 'Hecho con',
      plates: [
        {
          title: 'LinkTrim',
          kind: 'Acortador de URLs — full stack',
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
          title: 'Grupo Zenith',
          kind: 'Plataforma e-commerce — proyecto de cliente',
          description:
            'Proyecto académico para un cliente real, desarrollado por un equipo Scrum de seis personas. Me encargué de la API REST en Laravel — JWT, Eloquent, paginación — y de la SPA en React con rutas protegidas y dashboard de administración.',
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
      title: 'Cuatro formas de ayudar',
      note: 'Desde la primera entrevista hasta el despliegue.',
      givesLabel: 'Recibes',
      items: [
        {
          glyph: 'research',
          title: 'Investigación UX',
          body: 'Entrevistas, personas, mapas de recorrido y auditorías heurísticas que convierten opiniones en algo que se puede probar.',
          gives: 'Notas de entrevista, informe de auditoría, hallazgos priorizados',
        },
        {
          glyph: 'interface',
          title: 'Diseño de interfaces',
          body: 'Pantallas accesibles y precisas en Figma: sistemas de diseño, auto layout y bibliotecas de componentes que sobreviven al traspaso.',
          gives: 'Wireframes, pantallas de alta fidelidad, biblioteca de componentes',
        },
        {
          glyph: 'stack',
          title: 'Desarrollo full-stack',
          body: 'React en el frontend, Laravel y APIs REST en el backend, con una base de datos pensada para sostener ambos.',
          gives: 'Aplicación funcionando, API, esquema de base de datos',
        },
        {
          glyph: 'deploy',
          title: 'Despliegue y operación',
          body: 'Contenedores, CI/CD y despliegue en la nube configurados para que el producto salga y se mantenga en línea.',
          gives: 'Configuración Docker, pipeline de CI, despliegue cloud',
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
          items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Identidad de marca'],
        },
        {
          title: 'Frontend',
          items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Recharts'],
        },
        {
          title: 'Backend y datos',
          items: ['Laravel', 'PHP', 'Node.js', 'APIs REST', 'MySQL', 'PostgreSQL', 'MongoDB'],
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
