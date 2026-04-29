import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  
  es: {
    translation: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        services: "Servicios",
        blog: "Blog",
        contact: "Contacto",
        about: "Sobre nosotros",
        login: "Iniciar sesión",
        register: "Registrarse"
      },

      login: {
        title: "Inicia sesión",
        subtitle: "Accede a tu cuenta para continuar",

        emailLabel: "Email",
        passwordLabel: "Contraseña",

        emailPlaceholder: "email@example.com",
        passwordPlaceholder: "••••••••",

        button: "Iniciar sesión",
        google: "Continuar con Google",

        noAccount: "¿No tienes cuenta?",
        register: "Regístrate",

        brandingText: "La plataforma moderna para gestionar proyectos, servicios y crecimiento digital",
        ratingTitle: "Valoración de usuarios",
        ratingSimulate: "Simular opiniones",
        ratingLabel: "opiniones"
      },

      register: {
        title: "Crear cuenta",
        subtitle: "Únete a la plataforma en segundos",

        name: "Nombre",
        namePlaceholder: "Tu nombre",

        email: "Email",
        emailPlaceholder: "email@example.com",

        password: "Contraseña",
        passwordPlaceholder: "••••••••",

        accept: "Acepto los",
        terms: "términos y condiciones",

        button: "Crear cuenta",

        haveAccount: "¿Ya tienes cuenta?",
        login: "Inicia sesión",

        brandingText: "La plataforma moderna para gestionar proyectos, servicios y crecimiento digital",
        brandingHighlight:
          "Crea tu cuenta y empieza a construir tu futuro digital en minutos"
      },

      home: {
        welcome: "Bienvenido a la aplicación"
      },

      about: {
        title: "Construyendo el futuro digital",
        subtitle:
          "Una plataforma moderna para crear, gestionar y escalar proyectos digitales sin fricción.",

        missionTitle: "Nuestra misión",
        missionText:
          "Crear herramientas simples pero potentes que permitan a cualquier persona construir productos digitales sin complicaciones.",

        whyTitle: "¿Por qué existimos?",
        whyText:
          "La mayoría de herramientas digitales son complejas, lentas o poco intuitivas. Nuestro objetivo es simplificar la forma en la que las personas crean y gestionan productos digitales.",

        howTitle: "Cómo trabajamos",

        timelineTitle: "Nuestra evolución",
        timeline1: "Nace la idea del proyecto",
        timeline2: "Primer MVP lanzado",
        timeline3: "Expansión internacional",

        testimonialsTitle: "Lo que dicen de nosotros",

        teamTitle: "Equipo",
        role: "Frontend Developer",

        ctaTitle: "¿Listo para empezar?",
        ctaText:
          "Únete a cientos de usuarios que ya están construyendo su futuro digital.",
        ctaButton: "Empezar ahora",

        stats: {
          users: "Usuarios",
          projects: "Proyectos",
          satisfaction: "Satisfacción"
        },
        testimonials: {
          laura: {
            name: "Laura",
            text: "Una de las plataformas más limpias y fáciles que he usado."
          },
          carlos: {
            name: "Carlos",
            text: "Perfecta para gestionar proyectos sin complicaciones."
          },
          andrea: {
            name: "Andrea",
            text: "El diseño y la experiencia son brutales."
          }
        },
        howWork: {
          item1: "⚡ Iteración rápida basada en feedback real",
          item2: "🎯 Diseño centrado en el usuario",
          item3: "🧩 Desarrollo modular y escalable",
          item4: "🚀 Lanzamientos continuos"
        }
      },

      contact: {
        title: "Contacto",
        subtitle:
          "¿Tienes alguna duda o propuesta? Escríbenos y te responderemos en menos de 24h.",

        formTitle: "Envíanos un mensaje",

        name: "Nombre",
        namePlaceholder: "Tu nombre",

        email: "Email",
        message: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje...",

        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "Mensaje enviado correctamente",

        faqTitle: "Preguntas frecuentes",
        faq1q: "¿Cuánto tardáis en responder?",
        faq1a: "Normalmente respondemos en menos de 24 horas.",
        faq2q: "¿Es gratuito?",
        faq2a: "Sí, puedes contactarnos sin coste."
      },

      blog: {
        title: "Blog",
        search: "Buscar artículos...",

        readMore: "Leer más",
        readArticle: "Leer artículo",
        readingTime: "lectura",

        by: "por",

        categories: {
          all: "Todos",
          frontend: "Frontend",
          design: "Diseño",
          css: "CSS",
          product: "Producto"
        },

        imagePlaceholder: "Imagen conceptual del artículo",

        sections: {
          intro: "Introducción",
          architecture: "Arquitectura",
          decisions: "Decisiones técnicas",
          ux: "Experiencia de usuario",
          conclusion: "Conclusión"
        },

        content: {
          intro: "Este artículo explica cómo se construyó este sistema moderno.",
          architecture: "Usamos arquitectura modular basada en componentes reutilizables.",
          decisions: "Tomamos decisiones enfocadas en escalabilidad y rendimiento.",
          ux: "La experiencia de usuario es clave en cualquier producto digital.",
          conclusion: "Un buen producto combina diseño, código y experiencia."
        }
      },

      services: {
        title: "Servicios",
        subtitle: "Construimos productos digitales modernos con diseño, velocidad y escalabilidad.",
        badge: "Startup-grade services",

        cta_contact: "Contactar ahora",
        cta_start: "Empezar ahora",

        testimonials_title: "Lo que dicen nuestros clientes",

        final_title: "¿Listo para construir tu producto?",
        final_subtitle: "Transformamos ideas en productos reales en semanas.",

        stats: {
          projects: "Proyectos entregados",
          performance: "Mejora de rendimiento",
          clients: "Clientes felices"
        },

        items: {
          frontend: {
            title: "Desarrollo Frontend",
            desc: "Interfaces modernas, rápidas y escalables con React y Tailwind."
          },
          uiux: {
            title: "Diseño UI/UX",
            desc: "Diseños centrados en el usuario con experiencia fluida."
          },
          performance: {
            title: "Optimización de rendimiento",
            desc: "Optimización para máxima velocidad y eficiencia."
          },
          api: {
            title: "Integración de APIs",
            desc: "Conexión con servicios externos y arquitecturas escalables."
          }
        },

        how_title: "Cómo trabajamos",

        steps: {
          0: "Analizamos tu idea y objetivos para definir la mejor estrategia.",
          1: "Diseñamos y desarrollamos el producto con enfoque en escalabilidad.",
          2: "Iteramos, optimizamos y lanzamos con mejoras continuas."
        },

        testimonials: {
          0: "Una de las mejores experiencias de desarrollo que he tenido.",
          1: "Producto rápido, limpio y muy profesional.",
          2: "El diseño y la calidad son de nivel startup real."
        }
      },

      home: {
        metrics: {
          users: "12K+",
          projects: "320+",
          satisfaction: "98%",

          usersLabel: "Usuarios activos",
          projectsLabel: "Proyectos creados",
          satisfactionLabel: "Satisfacción"
        },

        features: {
          title: "Todo lo que necesitas",

          items: {
            fast: {
              title: "Rápido",
              desc: "Rendimiento optimizado desde el primer segundo",
              icon: "⚡"
            },
            modern: {
              title: "Moderno",
              desc: "UI/UX tipo startup real",
              icon: "🚀"
            },
            scalable: {
              title: "Escalable",
              desc: "Arquitectura preparada para crecer",
              icon: "📈"
            }
          }
        },

        problemSolution: {
          title: "Problema vs Solución",

          problem: {
            title: "Problema",
            text: "Crear productos digitales suele ser lento y complejo."
          },

          solution: {
            title: "Solución",
            text: "Una base SaaS lista para construir y escalar rápido."
          }
        },

        projects: {
          title: "Proyectos simulados",

          items: {
            crypto: {
              name: "Crypto Dashboard",
              desc: "Inversión simulada con métricas en tiempo real"
            },
            realEstate: {
              name: "Real Estate AI",
              desc: "Análisis de rentabilidad inmobiliaria"
            },
            startup: {
              name: "Startup OS",
              desc: "Gestión completa de equipos y productos"
            }
          }
        },

        blog: {
          title: "Últimos artículos",

          b1: {
            title: "React moderno en producción",
            tag: "Frontend",
            desc: "Arquitectura escalable y buenas prácticas"
          },
          b2: {
            title: "UI/UX en SaaS",
            tag: "Design",
            desc: "Cómo mejorar conversión con diseño"
          },
          b3: {
            title: "Tailwind en proyectos reales",
            tag: "CSS",
            desc: "Velocidad sin perder calidad"
          }
        },

        hero: {
          title: "Construimos productos digitales reales",
          subtitle:
            "Plataforma tipo startup para crear SaaS, dashboards y sistemas escalables.",
          ctaStart: "Empezar",
          ctaMore: "Saber más",

          dashboard: {
            title: "Live Dashboard",
            balance: "Balance",
            activity: "Actividad"
          }
        },

        simulator: {
          title: "Simulador de inversión",
        },

        stack: {
          title: "Stack tecnológico"
        },

        onboarding: {
          title: "Cómo funciona",

          steps: {
            step1: "Crea tu cuenta",
            step2: "Define tu proyecto",
            step3: "Analiza métricas",
            step4: "Escala tu producto"
          }
        },

        useCases: {
          title: "Casos de uso",

          items: {
            saas: "SaaS",
            fintech: "Fintech",
            ecommerce: "E-commerce",
            dashboards: "Dashboards",
            internalApps: "Apps internas",
            startups: "Startups"
          }
        },

        team: {
          title: "Equipo",

          members: {
            alex: { name: "Alex", role: "Frontend" },
            maria: { name: "Maria", role: "UI/UX" },
            david: { name: "David", role: "Backend" }
          }
        },

        cta: {
          title: "Empieza a construir hoy",
          subtitle: "Convierte ideas en productos reales en minutos.",
          button: "Crear cuenta"
        },
      },

      projects: {

        status: {
          open: "En explotación",
          financed: "Financiado",
          renovation: "En reforma"
        },

        card: {
          years: "años",
          annual: "anual",
          view: "Ver proyecto"
        },

        detail: {
          back: "Volver",

          tabs: {
            description: "Descripción",
            location: "Localización",
            token: "Datos del token",
            docs: "Documentos"
          },

          description: {
            title: "Inversión inmobiliaria premium",
            p1: "Este proyecto ofrece una oportunidad de inversión con alta rentabilidad en una ubicación estratégica.",
            p2: "La propiedad está diseñada para maximizar el retorno mediante alquiler y revalorización del activo.",
            p3: "Incluye servicios premium, diseño moderno y alta demanda en el mercado."
          },

          location: {
            title: "Ubicación",
            text: "es una zona estratégica con alta demanda inmobiliaria, turismo y crecimiento constante.",
            map: "Mapa próximamente"
          },

          token: {
            title: "Datos del token",
            total: "Total tokens",
            price: "Precio por token",
            roi: "Rentabilidad estimada",
            duration: "Duración"
          },

          docs: {
            title: "Documentos",
            download: "Descargar"
          },

          invest: {
            title: "Inversión",
            price: "Precio",
            roi: "ROI",
            duration: "Duración",
            button: "Invertir ahora"
          }
        },

        list: {
          search: "Buscar...",

          filters: {
            all: "Todos",
            open: "En explotación",
            financed: "Financiado",
            renovation: "En reforma"
          },

          sort: {
            new: "Fecha (nuevo)",
            priceDesc: "Precio (mayor)",
            priceAsc: "Precio (menor)",
            name: "Nombre"
          }
        }
      },

      footer: {
        desc: "Plataforma moderna de inversión en proyectos inmobiliarios tokenizados.",
        links: "Enlaces",
        company: "Empresa",
        ctaTitle: "Empieza hoy",
        ctaText: "Invierte en proyectos reales de forma simple y rápida.",
        ctaButton: "Crear cuenta",
        rights: "Todos los derechos reservados"
      }
    }
  },

  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        services: "Services",
        blog: "Blog",
        contact: "Contact",
        about: "About us",
        login: "Login",
        register: "Register"
      },

      login: {
        title: "Sign in",
        subtitle: "Access your account to continue",

        emailLabel: "Email",
        passwordLabel: "Password",

        emailPlaceholder: "email@example.com",
        passwordPlaceholder: "••••••••",

        button: "Sign in",
        google: "Continue with Google",

        noAccount: "Don't have an account?",
        register: "Sign up",

        brandingText: "The modern platform to manage projects, services and digital growth",
        ratingTitle: "User ratings",
        ratingSimulate: "Simulate reviews",
        ratingLabel: "reviews"
      },

      register: {
        title: "Create account",
        subtitle: "Join the platform in seconds",

        name: "Name",
        namePlaceholder: "Your name",

        email: "Email",
        emailPlaceholder: "email@example.com",

        password: "Password",
        passwordPlaceholder: "••••••••",

        accept: "I accept the",
        terms: "terms and conditions",

        button: "Create account",

        haveAccount: "Already have an account?",
        login: "Sign in",

        brandingText: "The modern platform to manage projects, services and digital growth",
        brandingHighlight:
          "Create your account and start building your digital future in minutes"
      },

      home: {
        welcome: "Welcome to the application"
      },

      about: {
        title: "Building the digital future",
        subtitle:
          "A modern platform to create, manage and scale digital products without friction.",

        missionTitle: "Our mission",
        missionText:
          "Build simple yet powerful tools that allow anyone to create digital products easily.",

        whyTitle: "Why we exist",
        whyText:
          "Most digital tools are complex, slow or not intuitive. Our goal is to simplify how people build and manage digital products.",

        howTitle: "How we work",

        timelineTitle: "Our journey",
        timeline1: "Project idea is born",
        timeline2: "First MVP launched",
        timeline3: "International expansion",

        testimonialsTitle: "What people say about us",

        teamTitle: "Team",
        role: "Frontend Developer",

        ctaTitle: "Ready to get started?",
        ctaText:
          "Join hundreds of users already building their digital future.",
        ctaButton: "Get started",

        stats: {
          users: "Users",
          projects: "Projects",
          satisfaction: "Satisfaction"
        },

        testimonials: {
          laura: {
            name: "Laura",
            text: "One of the cleanest and easiest platforms I’ve ever used."
          },
          carlos: {
            name: "Carlos",
            text: "Perfect for managing projects without complexity."
          },
          andrea: {
            name: "Andrea",
            text: "The design and experience are amazing."
          }
        },

        howWork: {
          item1: "⚡ Fast iteration based on real feedback",
          item2: "🎯 User-centered design",
          item3: "🧩 Modular and scalable development",
          item4: "🚀 Continuous releases"
        }
      },

      contact: {
        title: "Contact",
        subtitle:
          "Have a question or proposal? Send us a message and we’ll reply within 24h.",

        formTitle: "Send us a message",

        name: "Name",
        namePlaceholder: "Your name",

        email: "Email",
        message: "Message",
        messagePlaceholder: "Write your message...",

        send: "Send message",
        sending: "Sending...",
        success: "Message sent successfully",

        faqTitle: "FAQ",
        faq1q: "How fast do you reply?",
        faq1a: "Usually within 24 hours.",
        faq2q: "Is it free?",
        faq2a: "Yes, contacting us is free."
      },

      blog: {
        title: "Blog",
        search: "Search articles...",

        readMore: "Read more",
        readArticle: "Read article",
        readingTime: "read",

        by: "by",

        categories: {
          all: "All",
          frontend: "Frontend",
          design: "Design",
          css: "CSS",
          product: "Product"
        },

        imagePlaceholder: "Conceptual article image",

        sections: {
          intro: "Introduction",
          architecture: "Architecture",
          decisions: "Technical decisions",
          ux: "User experience",
          conclusion: "Conclusion"
        },

        content: {
          intro: "This article explains how this modern system was built.",
          architecture: "We use a modular architecture based on reusable components.",
          decisions: "We made decisions focused on scalability and performance.",
          ux: "User experience is key in any digital product.",
          conclusion: "A great product combines design, code and experience."
        }
      },

      services: {
        title: "Services",
        subtitle: "We build modern digital products with design, speed and scalability.",
        badge: "Startup-grade services",

        cta_contact: "Contact us",
        cta_start: "Get started",

        testimonials_title: "What our clients say",

        final_title: "Ready to build your product?",
        final_subtitle: "We turn ideas into real products in weeks.",

        stats: {
          projects: "Projects delivered",
          performance: "Performance boost",
          clients: "Happy clients"
        },

        items: {
          frontend: {
            title: "Frontend Development",
            desc: "Modern, fast and scalable interfaces with React and Tailwind."
          },
          uiux: {
            title: "UI/UX Design",
            desc: "User-centered designs with smooth experience."
          },
          performance: {
            title: "Performance Optimization",
            desc: "Optimization for maximum speed and efficiency."
          },
          api: {
            title: "API Integration",
            desc: "Connection with external services and scalable architectures."
          }
        },

        how_title: "How we work",

        steps: {
          0: "We analyze your idea and goals to define the best strategy.",
          1: "We design and build the product with a scalable approach.",
          2: "We iterate, optimize and launch with continuous improvements."
        },

        testimonials: {
          0: "One of the best development experiences I've had.",
          1: "Fast, clean and highly professional product.",
          2: "Design and quality are startup-level."
        }
      },

      home: {
        metrics: {
          users: "12K+",
          projects: "320+",
          satisfaction: "98%",

          usersLabel: "Active users",
          projectsLabel: "Projects created",
          satisfactionLabel: "Satisfaction"
        },

        features: {
          title: "Everything you need",

          items: {
            fast: {
              title: "Fast",
              desc: "Optimized performance from the first second",
              icon: "⚡"
            },
            modern: {
              title: "Modern",
              desc: "Real startup-style UI/UX",
              icon: "🚀"
            },
            scalable: {
              title: "Scalable",
              desc: "Architecture ready to grow",
              icon: "📈"
            }
          }
        },

        problemSolution: {
          title: "Problem vs Solution",

          problem: {
            title: "Problem",
            text: "Building digital products is usually slow and complex."
          },

          solution: {
            title: "Solution",
            text: "A SaaS base ready to build and scale fast."
          }
        },

        projects: {
          title: "Simulated projects",

          items: {
            crypto: {
              name: "Crypto Dashboard",
              desc: "Simulated investing with real-time metrics"
            },
            realEstate: {
              name: "Real Estate AI",
              desc: "Real estate profitability analysis"
            },
            startup: {
              name: "Startup OS",
              desc: "Full team and product management"
            }
          }
        },

        blog: {
          title: "Latest articles",

          b1: {
            title: "Modern React in production",
            tag: "Frontend",
            desc: "Scalable architecture and best practices"
          },
          b2: {
            title: "UI/UX in SaaS",
            tag: "Design",
            desc: "How to improve conversion with design"
          },
          b3: {
            title: "Tailwind in real projects",
            tag: "CSS",
            desc: "Speed without losing quality"
          }
        },

        hero: {
          title: "We build real digital products",
          subtitle:
            "Startup-style platform to create SaaS, dashboards and scalable systems.",
          ctaStart: "Get started",
          ctaMore: "Learn more",

          dashboard: {
            title: "Live Dashboard",
            balance: "Balance",
            activity: "Activity"
          }
        },

        simulator: {
          title: "Investment simulator",
        },

        stack: {
          title: "Tech stack"
        },

        onboarding: {
          title: "How it works",

          steps: {
            step1: "Create your account",
            step2: "Define your project",
            step3: "Analyze metrics",
            step4: "Scale your product"
          }
        },

        useCases: {
          title: "Use cases",

          items: {
            saas: "SaaS",
            fintech: "Fintech",
            ecommerce: "E-commerce",
            dashboards: "Dashboards",
            internalApps: "Internal apps",
            startups: "Startups"
          }
        },

        team: {
          title: "Team",

          members: {
            alex: { name: "Alex", role: "Frontend" },
            maria: { name: "Maria", role: "UI/UX" },
            david: { name: "David", role: "Backend" }
          }
        },

        cta: {
          title: "Start building today",
          subtitle: "Turn ideas into real products in minutes.",
          button: "Create account"
        }
      },

      projects: {
        status: {
          open: "Open",
          financed: "Funded",
          renovation: "Renovation"
        },

        card: {
          years: "years",
          annual: "annual",
          view: "View project"
        },

        detail: {
          back: "Back",

          tabs: {
            description: "Description",
            location: "Location",
            token: "Token data",
            docs: "Documents"
          },

          description: {
            title: "Premium real estate investment",
            p1: "This project offers a high-return investment opportunity in a strategic location.",
            p2: "The property is designed to maximize returns through rental income and appreciation.",
            p3: "Includes premium services, modern design and strong market demand."
          },

          location: {
            title: "Location",
            text: "is a strategic area with high real estate demand, tourism and steady growth.",
            map: "Map coming soon"
          },

          token: {
            title: "Token data",
            total: "Total tokens",
            price: "Token price",
            roi: "Estimated return",
            duration: "Duration"
          },

          docs: {
            title: "Documents",
            download: "Download"
          },

          invest: {
            title: "Investment",
            price: "Price",
            roi: "ROI",
            duration: "Duration",
            button: "Invest now"
          }
        },

        list: {
          search: "Search...",

          filters: {
            all: "All",
            open: "Open",
            financed: "Funded",
            renovation: "Renovation"
          },

          sort: {
            new: "Date (newest)",
            priceDesc: "Price (high)",
            priceAsc: "Price (low)",
            name: "Name"
          }
        }
      },

      footer: {
        desc: "Modern platform for investing in tokenized real estate projects.",
        links: "Links",
        company: "Company",
        ctaTitle: "Get started",
        ctaText: "Invest in real projects easily and quickly.",
        ctaButton: "Create account",
        rights: "All rights reserved"
      }
    }
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false }
});

export default i18n;