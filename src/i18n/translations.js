const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      name: "Kevin Cruz.",
      headline: "I build things for the web & beyond.",
      description:
        "I'm a Fullstack Software Engineer based in Saltillo, Mexico, specializing in building robust web applications and scalable backend systems. Currently at <highlight>Daimler Truck</highlight>, developing internal tools that drive manufacturing innovation.",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "Daimler Truck",
          role: "Fullstack Software Engineer",
          period: "June 2025 - Present",
          location: "Saltillo, Coahuila",
          bullets: [
            "Lead developer of new projects for the expansion of the Daimler Saltillo assembly plant, building full-stack solutions with React, C# .NET Core, SQL Databases, and Ignition.",
            "Built a web hub for creation and deployment of visual alerts across the plant's screens (Quality, Safety, Communications) integrating React frontends with C# .NET APIs and Ignition SCADA.",
            "Developed a file storage web app using Next.js, Node, C# and Azure Blob Storage with security permissions, QR accessibility, massive uploading, folder management, and file previews.",
            "Created the worker access PWA for the new Daimler Plant using React, C# and RFID reader integration, speeding up the employee access process.",
            "Managed deployment and CI/CD pipelines using Kubernetes (Docker, JFrog, Rancher) and GitHub Actions.",
          ],
        },
        {
          company: "Settepi",
          role: "Business Intelligence Analyst",
          period: "Jan 2025 - June 2025",
          location: "Saltillo, Coahuila",
          bullets: [
            "Created Power BI dashboards for all areas of Settepi Saltillo including Logistics, HR, Security, and Finances.",
            "Implemented and managed database systems across the company using SQL Server and automated data retrieval queries in Python.",
            "Collaborated with cross-functional teams to automate data processes implementing ETL workflows.",
          ],
        },
        {
          company: "John Deere",
          role: "Data Analyst Intern",
          period: "July 2024 - Jan 2025",
          location: "Saltillo, Coahuila",
          bullets: [
            "Created and maintained Power BI dashboards for Components Coahuila John Deere plants (Saltillo, Ramos Arizpe, Condor) maintenance team.",
            "Automated manual data processes using complete ETL pipelines: extracting from SAP HANA and Andonix databases with SQL & Python, transforming and loading to Databricks.",
            "Connected live control charts (Andonix) with Power BI using Python to generate automated reports with Power Query and DAX.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      featured: "Featured",
      items: [
        {
          title: "inBytes",
          description:
            "SaaS platform for creating digital invitations for all types of events. Features an internal MCP (Model Context Protocol) for automatic invitation generation through prompts. Currently in active development.",
          tech: ["Next.js", "Hono", "Cloudflare Workers", "MCP", "AI"],
          featured: true,
          category: "personal",
        },
        {
          title: "Visual Alerts Hub",
          description:
            "Web platform for creating and deploying real-time visual alerts across a manufacturing plant's screens. Supports Quality, Safety, and General Communications channels.",
          tech: ["React", "C# .NET", "SQL Server", "Ignition"],
          featured: true,
          category: "work",
        },
        {
          title: "File Storage Web App",
          description:
            "Internal file management system with security permissions, QR accessibility, massive uploading, folder management, and real-time file previews.",
          tech: ["Next.js", "Node.js", "C#", "Azure Blob Storage"],
          featured: true,
          category: "work",
        },
        {
          title: "Worker Access PWA",
          description:
            "Progressive web app for employee access control at the new Daimler plant, integrating RFID reader inputs for physical credentials to streamline entry.",
          tech: ["React", "C# .NET", "PWA", "RFID"],
          featured: true,
          category: "work",
        },
        {
          title: "Wedding Invitation",
          description:
            "Interactive and animated wedding invitation web app with RSVP functionality and elegant design.",
          tech: ["React", "CSS Animations", "JavaScript"],
          link: "https://kevincruxz.github.io/wedding-invitation/",
          github: "https://github.com/kevincruxz/wedding-invitation",
          image: "/img/project-wedding.gif",
          category: "personal",
        },
        {
          title: "Calculator",
          description:
            "A functional web calculator inspired by the iOS design, built as a practice project for JavaScript fundamentals.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://kevincruxz.github.io/Calculator/",
          github: "https://github.com/kevincruxz/Calculator",
          image: "/img/project-calculator.gif",
          category: "personal",
        },
        {
          title: "Etch-a-Sketch",
          description:
            "Digital recreation of the classic Etch-a-Sketch toy with customizable grid sizes and colors.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://kevincruxz.github.io/Etch-a-sketch/",
          github: "https://github.com/kevincruxz/Etch-a-sketch",
          image: "/img/project-etch-a-sketch.gif",
          category: "personal",
        },
        {
          title: "Sword Shield Crossbow",
          description:
            "Rock-paper-scissors style game with a medieval theme featuring swords, shields, and crossbows.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://kevincruxz.github.io/SwordShieldCrossbow/",
          github: "https://github.com/kevincruxz/SwordShieldCrossbow",
          image: "/img/project-ssc.gif",
          category: "personal",
        },
      ],
    },
    skills: {
      title: "Skills & Technologies",
      categories: [
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
          name: "Backend",
          items: ["C# .NET Core", "Node.js", "Hono", "Express", "PHP", "REST APIs"],
        },
        {
          name: "Databases",
          items: ["SQL Server", "MongoDB", "Azure Blob Storage"],
        },
        {
          name: "DevOps & Cloud",
          items: ["Docker", "Kubernetes", "Cloudflare Workers", "Rancher", "JFrog", "GitHub Actions", "Azure"],
        },
        {
          name: "Data & BI",
          items: ["Python", "Power BI", "DAX", "Power Query", "Databricks", "SAP HANA"],
        },
        {
          name: "Tools",
          items: ["Git", "VS Code", "Photoshop", "Canva", "Figma"],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      description:
        "I'm currently open to new opportunities and always interested in hearing about exciting projects. Whether you have a question, a proposal, or just want to say hi, feel free to reach out.",
      emailLabel: "Say Hello",
    },
    footer: {
      built: "Built by Kevin Cruz",
    },
  },
  es: {
    nav: {
      about: "Sobre mi",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, mi nombre es",
      name: "Kevin Cruz.",
      headline: "Construyo soluciones web y mas.",
      description:
        "Soy Ingeniero de Software Fullstack en Saltillo, Mexico, especializado en construir aplicaciones web robustas y sistemas backend escalables. Actualmente en <highlight>Daimler Truck</highlight>, desarrollando herramientas internas que impulsan la innovacion manufacturera.",
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          company: "Daimler Truck",
          role: "Ingeniero de Software Fullstack",
          period: "Junio 2025 - Presente",
          location: "Saltillo, Coahuila",
          bullets: [
            "Desarrollador principal de nuevos proyectos para la expansion de la planta de ensamble Daimler Saltillo, construyendo soluciones full-stack con React, C# .NET Core, SQL y Ignition.",
            "Construi un hub web para la creacion y despliegue de alertas visuales en las pantallas de la planta (Calidad, Seguridad, Comunicaciones) integrando frontends en React con APIs en C# .NET e Ignition SCADA.",
            "Desarrolle una aplicacion web de almacenamiento de archivos usando Next.js, Node, C# y Azure Blob Storage con permisos de seguridad, acceso QR, carga masiva, gestion de carpetas y vistas previas.",
            "Cree la PWA de acceso de trabajadores para la nueva planta Daimler usando React, C# e integracion de lectores RFID, agilizando el proceso de acceso de empleados.",
            "Gestion de despliegue y pipelines CI/CD usando Kubernetes (Docker, JFrog, Rancher) y GitHub Actions.",
          ],
        },
        {
          company: "Settepi",
          role: "Analista de Inteligencia de Negocios",
          period: "Ene 2025 - Junio 2025",
          location: "Saltillo, Coahuila",
          bullets: [
            "Creacion de dashboards en Power BI para todas las areas de Settepi Saltillo incluyendo Logistica, RH, Seguridad y Finanzas.",
            "Implemente y administre sistemas de bases de datos en la empresa usando SQL Server y consultas automatizadas en Python.",
            "Colabore con equipos multifuncionales para automatizar procesos de datos implementando flujos ETL.",
          ],
        },
        {
          company: "John Deere",
          role: "Practicante Analista de Datos",
          period: "Julio 2024 - Ene 2025",
          location: "Saltillo, Coahuila",
          bullets: [
            "Creacion y mantenimiento de dashboards en Power BI para las plantas de Componentes Coahuila de John Deere (Saltillo, Ramos Arizpe, Condor).",
            "Automatizacion de procesos manuales usando pipelines ETL completos: extraccion desde SAP HANA y Andonix con SQL y Python, transformacion y carga a Databricks.",
            "Conexion de graficos de control en vivo (Andonix) con Power BI usando Python para generar reportes automatizados con Power Query y DAX.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      featured: "Destacado",
      items: [
        {
          title: "inBytes",
          description:
            "Plataforma SaaS para la creacion de invitaciones digitales para todo tipo de eventos. Cuenta con un MCP (Model Context Protocol) interno para la generacion automatica de invitaciones a traves de prompts. Actualmente en desarrollo activo.",
          tech: ["Next.js", "Hono", "Cloudflare Workers", "MCP", "AI"],
          featured: true,
          category: "personal",
        },
        {
          title: "Hub de Alertas Visuales",
          description:
            "Plataforma web para crear y desplegar alertas visuales en tiempo real en las pantallas de una planta manufacturera. Soporta canales de Calidad, Seguridad y Comunicaciones Generales.",
          tech: ["React", "C# .NET", "SQL Server", "Ignition"],
          featured: true,
          category: "work",
        },
        {
          title: "App de Almacenamiento",
          description:
            "Sistema interno de gestion de archivos con permisos de seguridad, acceso QR, carga masiva, gestion de carpetas y vistas previas en tiempo real.",
          tech: ["Next.js", "Node.js", "C#", "Azure Blob Storage"],
          featured: true,
          category: "work",
        },
        {
          title: "PWA de Acceso",
          description:
            "Aplicacion web progresiva para control de acceso de empleados en la nueva planta Daimler, integrando lectores RFID para credenciales fisicas.",
          tech: ["React", "C# .NET", "PWA", "RFID"],
          featured: true,
          category: "work",
        },
        {
          title: "Invitacion de Boda",
          description:
            "Aplicacion web interactiva y animada de invitacion de boda con funcionalidad RSVP y diseno elegante.",
          tech: ["React", "CSS Animations", "JavaScript"],
          link: "https://kevincruxz.github.io/wedding-invitation/",
          github: "https://github.com/kevincruxz/wedding-invitation",
          image: "/img/project-wedding.gif",
          category: "personal",
        },
        {
          title: "Calculadora",
          description:
            "Calculadora web funcional inspirada en el diseno de iOS, construida como proyecto de practica de fundamentos de JavaScript.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://kevincruxz.github.io/Calculator/",
          github: "https://github.com/kevincruxz/Calculator",
          image: "/img/project-calculator.gif",
          category: "personal",
        },
        {
          title: "Etch-a-Sketch",
          description:
            "Recreacion digital del clasico juguete Etch-a-Sketch con tamanos de cuadricula y colores personalizables.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://kevincruxz.github.io/Etch-a-sketch/",
          github: "https://github.com/kevincruxz/Etch-a-sketch",
          image: "/img/project-etch-a-sketch.gif",
          category: "personal",
        },
        {
          title: "Espada Escudo Ballesta",
          description:
            "Juego estilo piedra-papel-tijera con tematica medieval con espadas, escudos y ballestas.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://kevincruxz.github.io/SwordShieldCrossbow/",
          github: "https://github.com/kevincruxz/SwordShieldCrossbow",
          image: "/img/project-ssc.gif",
          category: "personal",
        },
      ],
    },
    skills: {
      title: "Habilidades y Tecnologias",
      categories: [
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
          name: "Backend",
          items: ["C# .NET Core", "Node.js", "Hono", "Express", "PHP", "REST APIs"],
        },
        {
          name: "Bases de Datos",
          items: ["SQL Server", "MongoDB", "Azure Blob Storage"],
        },
        {
          name: "DevOps y Nube",
          items: ["Docker", "Kubernetes", "Cloudflare Workers", "Rancher", "JFrog", "GitHub Actions", "Azure"],
        },
        {
          name: "Datos y BI",
          items: ["Python", "Power BI", "DAX", "Power Query", "Databricks", "SAP HANA"],
        },
        {
          name: "Herramientas",
          items: ["Git", "VS Code", "Photoshop", "Canva", "Figma"],
        },
      ],
    },
    contact: {
      title: "Contactame",
      description:
        "Estoy abierto a nuevas oportunidades y siempre interesado en conocer proyectos emocionantes. Ya sea que tengas una pregunta, una propuesta, o simplemente quieras saludar, no dudes en escribirme.",
      emailLabel: "Enviar Saludo",
    },
    footer: {
      built: "Hecho por Kevin Cruz",
    },
  },
};

export default translations;
