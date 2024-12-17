export const studies = [
  {
    title: "Ingenieria en Sistemas (No Concluido)",
    corporation: "UTN (Rosario) ",
    date: "02/2021 – 2/2023",
  },
  {
    title: "Desarrollador Full Stack",
    corporation: "Egg Corporation - Remoto",
    date: "01/2022 – 10/2023",
  },
  {
    title: "Desarrollador Full Stack",
    corporation: "Soy Henry - Remoto",
    date: "04/2024 – 12/2024",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  express : "express",
  postgresql : "postgreSql",
  java : "java",
  nest : "nest",
  mysql : "mysql",
  vscode : "vscode",
  trello : "trello",
  python : "python",
  // here add more icon keys
};


export const frontSkills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
]

export const backSkills = [
  {
    title : "Java",
    icon : IconKeys.java
  },
  {
    title : "PostgreSql",
    icon : IconKeys.postgresql
  },
  {
    title : "",
    icon : IconKeys.express
  },
  {
    title : "Nest",
    icon : IconKeys.nest
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title : "TypeScript",
    icon : IconKeys.typeScript
  },
  {
    title : "DB",
    icon : IconKeys.mysql
  },

]

export const tools = [
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },
  {
    title: "Visual Studio",
    icon: IconKeys.vscode,
  },
  {
    title: "Trello",
    icon: IconKeys.trello,
  },
]

export const training = [
  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title : "Python",
    icon : IconKeys.python
  },
  {
    title : "Astro",
    icon : IconKeys.astro
  },
  
]

export const projects = [
  {
    img: "../../public/img/vicnasolPortada.png",
    title: "Vicnasol Jardineria",
    link: "https://vicnasol-henry.vercel.app/",
    description: `Pagina que comunica facilmente clientes con Jardineros, mendiante registro de cuentas y inicio de sesion. Se incluyen funcionalidades en el dashboard dependiendo el rol + metodo de Pago. `,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.express,
      },
      {
        icon: IconKeys.postgresql,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.trello,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.nest,
      },
      {
        icon: IconKeys.github,
      },
      
    ],
  },
  {
    img: "../../public/img/BarberiaPortada.png",
    title: "Barberia del Nonno",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Pagina de Barberia completa, diversos cortes de pelo y precios implementados, al igual que validaciones de registro de usuario e inicio de sesion.`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.express,
      },
      {
        icon: IconKeys.postgresql,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.redux,
      },
      
    ],
  },
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Ecommerce Stripe",
    link: "https://ecommerce-stripe-763m.vercel.app/",
    description: `Proyecto FullStack de un ecommerce con pasarela de pagos stripe integrada, destalles de el product etc.  `,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.mongodb,
      },
      {
        icon: IconKeys.stripe,
      },
    ],
  },
  {
    img: "../../../img/nexanime.webp",
    title: "NexAnime",
    link: "https://nexanime.vercel.app",
    description: `plataforma de anime para ver los animes en tendencia , más valorados , estadísticas.`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/store-games.webp",
    title: "Store games",
    link: "https://store-games-site.netlify.app/",
    description: `Simulando una página de juegos , consumiendo la API de rawg api
      donde los usuarios pueden buscar videojuegos, ver sus detalles como
      creadores , calificaciones,tiendas donde comprar.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },
  {
    img: "../../../img/movie.webp",
    title: "Movie Tv",
    link: "https://movietvsite.netlify.app/",
    description: `simulando una página de películas , consumiendo la API de themovietv
              donde los usuarios pueden buscar películas y ver trailer.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
];
