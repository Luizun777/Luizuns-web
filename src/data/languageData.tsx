import { faEnvelope, faPhone, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { About, Contact, language, Experience, Project } from '../Interfaces/languageInterface';
import { RoutesInterface } from '../Interfaces/navigateInterface';
import { photo } from './imageData';
import { faLinkedinIn, faGithub, faInstagram, faSteam, faXbox, faDiscord } from '@fortawesome/free-brands-svg-icons';
import gifs from '../assets/proyectos/gifs.jpg';
import lovy from '../assets/proyectos/lovy.jpg';
import mergePdf from '../assets/proyectos/MergePdf.jpg';

const age = String((new Date()).getFullYear() - 1996);

export const contactList: Contact[] = [
  {
    icon: faEnvelope,
    text: 'luisacosta360@gmail.com',
    link: 'mailto:luisacosta360@gmail.com'
  },
  {
    icon: faPhone,
    text: '+525613429414',
    link: 'tel:+525613429414'
  },
  {
    icon: faLinkedinIn,
    text: 'Luis Acosta Tinajero',
    link: 'https://www.linkedin.com/in/luizun/'
  },
  {
    icon: faGithub,
    text: 'Luizun777',
    link: 'https://github.com/Luizun777'
  },
  {
    icon: faDiscord,
    text: 'LuizunSolid#1470',
    link: 'discord://discordapp.com/users/1470'
  },
  {
    icon: faEarthAmericas,
    text: 'threads@luizunda',
    link: 'https://www.threads.net/@luizunda'
  },
  {
    icon: faInstagram,
    text: '@luizunda',
    link: 'https://www.instagram.com/luizunda/'
  },
  {
    icon: faSteam,
    text: 'solid777',
    link: 'https://steamcommunity.com/id/solid777/'
  },
  {
    icon: faXbox,
    text: 'Luizun',
    link: 'https://account.xbox.com/es-mx/profile?gamertag=Luizun'
  }
];

// EN
export const MenuEN: RoutesInterface[] = [
  {
    name: 'About me',
    path: '/Home',
  },
  {
    name: 'Experience',
    path: '/Experience',
  },
  {
    name: 'Project',
    path: '/ProyectsScreen',
  },
  {
    name: 'Contact',
    path: '/ContactScreen',
  },
  // {
  //   name: 'About Web',
  //   path: '/AboutWebScreen',
  // }
];

export const aboutMeEN: About = {
  photo,
  name: `Hello there 👋, I'm Luis Acosta Tinajero`,
  age: `${age} years old`,
  job: 'Developer Full-stack',
  desc: [
    'I am a full-stack developer with experience in web application development using technologies such as Angular, React, React Native, Node.js, and .NET Core.',
    'My tasks have included project development and maintenance, integration with REST APIs and real-time services, as well as unit testing and code deployment to production servers. I also possess knowledge of SQL Server databases and configuration of IIS servers. My ability to adapt to different environments and overcome challenges has allowed me to acquire strong skills in software development and deliver high-quality solutions.',
    'My goal is to provide high-quality work, so I stay up-to-date with the latest technologies to be prepared and successfully deliver assigned projects.'
  ],
};

const ExperienceListEN: Experience[] = [
  {
    job: 'Full Stack Developer',
    company: 'Consejo de la Judicatura Federal México - CJF',
    dateIn: 'May 2022',
    dateOut: 'Present',
    activities: [
      'I took on the responsibility of continuing an Android project using Kotlin, despite not having prior experience in the language.',
      'I successfully overcame the challenge of learning and using Kotlin within a short period of time, demonstrating my ability to quickly adapt to new languages and technologies.',
      'Angular was used to develop interactive and responsive user interfaces, enhancing usability and user experience.',
      'I implemented reusable components in Angular to streamline development and maintain consistency in internal tools.',
      'I consumed and utilized REST APIs and gRPC services to access and retrieve data from various external sources of information.',
      'I designed, developed, and implemented a REST API using .NET Core to provide specific services and functionalities.',
      'I used SignalR to establish persistent and bidirectional connections with clients through WebSockets and other supported transport protocols.'
    ],
    skils: [
      'Angular 10',
      'NetCore 6',
      'HTML5',
      'CSS Flexbox',
      'JavaScript',
      'typescript',
      'Git',
      'Kotlin',
      'PrimeNG',
      'Bootstrap',
      'Ng-bootstrap'
    ]
  },
  {
    job: 'Front-end developer',
    company: 'Santander',
    dateIn: 'February 2022',
    dateOut: 'April 2022',
    activities: [
      'Angular was utilized to develop interactive and responsive user interfaces, enhancing usability and user experience.',
      'I implemented reusable components in Angular to streamline development and maintain consistency in internal tools.',
      'I used Angular services and modules to manage business logic and make API calls to retrieve and update data.',
      'Deploying code to a production server.'
    ],
    skils: [
      'Angular 11',
      'NodeJs',
      'HTML5',
      'CSS Flexbox',
      'JavaScript',
      'typescript',
      'Git'
    ]
  },
  {
    job: 'Front-end developer',
    company: 'GNP Seguros',
    dateIn: 'October 2020',
    dateOut: 'February 2022',
    activities: [
      'I developed and implemented web applications using Angular to create internal tools utilized by the team.',
      'Angular was used to develop interactive and responsive user interfaces, enhancing usability and user experience.',
      'I used Angular services and modules to manage business logic and make API calls to retrieve and update data.',
      'Deploying code to a production server.',
      "I was part of the team responsible for leading the AngularJS to Angular 10 migration project, in response to the company's need to update and modernize the technology being used.",
      'I collaborated on an Angular project where I was assigned the responsibility of adding enhancements and new functionalities to meet client needs and improve user experience.'
    ],
    skils: [
      'Angular 10',
      'HTML5',
      'CSS Flexbox',
      'SCSS',
      'JavaScript',
      'typescript',
      'Git',
      'GitLab',
      'Angular Material',
      'PrimeNG',
      'Bootstrap',
      'Ngx-Bootstrap'
    ]
  },
  {
    job: 'Desarrollador de front-end',
    company: 'ARCSA Servicios S.A. de C.V.',
    dateIn: 'September 2019',
    dateOut: 'October 2020',
    activities: [
      'Angular was used to develop interactive and responsive user interfaces, improving usability and user experience.',
      'Reusable components were implemented in Angular to streamline development and maintain consistency in internal tools.',
      'Angular services and modules were utilized to manage business logic and make API calls to retrieve and update data.',
      'I developed responsive projects using Angular, adapting the user interface and functionality to provide an optimal experience on both desktop and mobile devices.',
      'I used Socket.IO as part of the development of an Angular application to implement a real-time chat and notification system.',
      'Deploying code to a production server.',
    ],
    skils: [
      'Angular 8+',
      'HTML5',
      'CSS Flexbox',
      'SCSS',
      'JavaScript',
      'typescript',
      'Git',
      'Github',
      'Angular Material',
      'PrimeNG',
      'Bootstrap',
    ]
  },
  {
    job: 'Desarrollador full stack',
    company: 'Servicio de Administración Tributaria - SAT',
    dateIn: 'November 2017',
    dateOut: 'September 2019',
    activities: [
      'Angular was used to develop interactive and responsive user interfaces, enhancing usability and user experience.',
      'I implemented reusable components in Angular to streamline development and maintain consistency in internal tools.',
      'I designed, developed, and implemented a REST API using .NET Core to provide specific services and functionalities.',
      'I used SignalR to establish persistent and bidirectional connections with clients through WebSockets and other supported transport protocols.',
      'I designed and developed relational database structures using SQL Server, ensuring data consistency and integrity.',
      'I developed stored procedures to implement business logic and perform complex operations in the database, ensuring optimal performance and improved efficiency in queries.',
      'I performed configurations on an IIS server for deploying Angular 6 and .NET Core 2.0 projects in production environments.'
    ],
    skils: [
      'Angular 6+',
      'NetCore 2.0',
      'HTML5',
      'JavaScript',
      'typescript',
      'Git',
      'Bootstrap',
    ]
  },
];

const SkilsListEN: string[] = [
  'Fast learning ability of new languages and technologies.',
  'Database management with SQL Server and some knowledge of MongoDB.',
  'Real-time data processing and management.',
  'Development of web applications with Angular and React.',
  'Development of Android applications with Kotlin and React Native.',
  'Use of version control tools like Git.',
  'Development of RESTful APIs with .NET Core and some experience with Node.js.',
  'Implementation of authentication and authorization in APIs.',
];

const ProjectsEN: Project[] = [
  {
    description: 'Save your favorite links by organizing them into groups and have them accessible wherever you are. Developed with MongoDB, Express, Angular, and Node.js.',
    image: lovy,
    proyectName: 'Lovy Beta',
    technology: 'Angular - MEAN',
    url: 'https://www.lovy.com.mx/#/'
  },
  {
    description: 'A website to merge PDFs in the desired order.',
    image: mergePdf,
    proyectName: 'Merge PDFs',
    technology: 'Angular',
    url: 'https://luizun777.github.io/pdf-merge/'
  },
  {
    description: 'A website to search for GIFs using an external API.',
    image: gifs,
    proyectName: 'Gifs',
    technology: 'Vite + React',
    url: 'https://stirring-bubblegum-b0412e.netlify.app/'
  }
];

export const LanguageEN: language = {
  about: aboutMeEN,
  menu: MenuEN,
  skillsText: 'Skills',
  technologiesText: 'Languages and Frameworks',
  experiences: ExperienceListEN,
  skils: SkilsListEN,
  projects: ProjectsEN,
  tooltipProjects: 'Click me',
  contactList,
};

// ES
export const MenuES: RoutesInterface[] = [
  {
    name: 'Sobre mi',
    path: '/Home',
  },
  {
    name: 'Experiencia',
    path: '/Experience',
  },
  {
    name: 'Proyectos',
    path: '/ProyectsScreen',
  },
  {
    name: 'Contacto',
    path: '/ContactScreen',
  },
  // {
  //   name: 'Sobre la pagina',
  //   path: '/AboutWebScreen',
  // }
];

export const aboutMeES: About = {
  photo,
  name: `Hola 👋, Soy Luis Acosta Tinajero`,
  age: `${age} años`,
  job: 'Desarrollador Full-stack',
  desc: [
    'Soy un desarrollador full-stack con experiencia en el desarrollo de aplicaciones web utilizando tecnologías como Angular, React, React Native, Node.js y .NET Core.',
    'He realizado tareas como el desarrollo y mantenimiento de proyectos, integración con REST APIs y servicios en tiempo real, así como pruebas unitarias y despliegue de código en servidores de producción. También tengo conocimientos en bases de datos SQL Server y configuración de servidores IIS. Mi capacidad para adaptarme a diferentes entornos y enfrentar desafíos me ha permitido adquirir habilidades sólidas en el desarrollo de software y ofrecer soluciones de alta calidad.',
    'Mi objetivo es ofrecer un trabajo de calidad, por lo que me mantengo al tanto de las últimas tecnologías para estar preparado y cumplir con éxito los proyectos asignados.'
  ],
};

const ExperienceListES: Experience[] = [
  {
    job: 'Desarrollador full stack',
    company: 'Consejo de la Judicatura Federal México - CJF',
    dateIn: 'Mayo 2022',
    dateOut: 'Actual',
    activities: [
      'Asumí la responsabilidad de continuar un proyecto de Android utilizando Kotlin, a pesar de no tener experiencia previa en el lenguaje.',
      'Superé el desafío de aprender y utilizar Kotlin en un corto período de tiempo, demostrando mi capacidad para adaptarme rápidamente a nuevos lenguajes y tecnologías.',
      'Se utilizo Angular para desarrollar interfaces de usuario interactivas y responsivas, mejorando la usabilidad y la experiencia del usuario.',
      'Implementé componentes reutilizables en Angular para agilizar el desarrollo y mantener la consistencia en las herramientas internas.',
      'Consumí y utilizé servicios REST APIs y gRPC para acceder y obtener datos de diferentes fuentes de información externas.',
      'Diseñé, desarrollé e implementé una API REST utilizando .NET Core para proporcionar servicios y funcionalidades específicas.',
      'Utilicé SignalR para establecer conexiones persistentes y bidireccionales con los clientes a través de WebSockets y otros protocolos de transporte compatibles.'
    ],
    skils: [
      'Angular 10',
      'NetCore 6',
      'HTML5',
      'CSS Flexbox',
      'JavaScript',
      'typescript',
      'Git',
      'Kotlin',
      'PrimeNG',
      'Bootstrap',
      'Ng-bootstrap'
    ]
  },
  {
    job: 'Desarrollador de front-end',
    company: 'Santander',
    dateIn: 'Febrero 2022',
    dateOut: 'Abril 2022',
    activities: [
      'Se utilizo Angular para desarrollar interfaces de usuario interactivas y responsivas, mejorando la usabilidad y la experiencia del usuario.',
      'Implementé componentes reutilizables en Angular para agilizar el desarrollo y mantener la consistencia en las herramientas internas.',
      'Utilicé servicios y módulos de Angular para gestionar la lógica de negocio y realizar llamadas a APIs para obtener y actualizar datos.',
      'Realizar deploy de código a servidor de producción'
    ],
    skils: [
      'Angular 11',
      'NodeJs',
      'HTML5',
      'CSS Flexbox',
      'JavaScript',
      'typescript',
      'Git'
    ]
  },
  {
    job: 'Desarrollador de front-end',
    company: 'GNP Seguros',
    dateIn: 'Octubre 2020',
    dateOut: 'Febrero 2022',
    activities: [
      'Desarrollé e implementé aplicaciones web utilizando Angular para crear herramientas internas utilizadas por el equipo.',
      'Se utilizo Angular para desarrollar interfaces de usuario interactivas y responsivas, mejorando la usabilidad y la experiencia del usuario.',
      'Utilicé servicios y módulos de Angular para gestionar la lógica de negocio y realizar llamadas a APIs para obtener y actualizar datos.',
      'Realizar deploy de código a servidor de producción',
      'Formé parte del equipo responsable de liderar el proyecto de migración de AngularJS a Angular 10, en respuesta a la necesidad de la empresa de actualizar y modernizar la tecnología utilizada.',
      'Colaboré en un proyecto de Angular donde se me asignó la responsabilidad de agregar mejoras y nuevas funcionalidades para satisfacer las necesidades del cliente y mejorar la experiencia del usuario.'
    ],
    skils: [
      'Angular 10',
      'HTML5',
      'CSS Flexbox',
      'SCSS',
      'JavaScript',
      'typescript',
      'Git',
      'GitLab',
      'Angular Material',
      'PrimeNG',
      'Bootstrap',
      'Ngx-Bootstrap'
    ]
  },
  {
    job: 'Desarrollador de front-end',
    company: 'ARCSA Servicios S.A. de C.V.',
    dateIn: 'Septiembre 2019',
    dateOut: 'Octubre 2020',
    activities: [
      'Se utilizo Angular para desarrollar interfaces de usuario interactivas y responsivas, mejorando la usabilidad y la experiencia del usuario.',
      'Implementé componentes reutilizables en Angular para agilizar el desarrollo y mantener la consistencia en las herramientas internas.',
      'Utilicé servicios y módulos de Angular para gestionar la lógica de negocio y realizar llamadas a APIs para obtener y actualizar datos.',
      'Desarrollé proyectos responsivos utilizando Angular, adaptando la interfaz de usuario y la funcionalidad para ofrecer una experiencia óptima tanto en dispositivos de escritorio como en dispositivos móviles.',
      'Utilicé Socket.IO como parte del desarrollo de una aplicación Angular para implementar un sistema de chat y notificaciones en tiempo real.',
      'Realizar deploy de código a servidor de producción'
    ],
    skils: [
      'Angular 8+',
      'HTML5',
      'CSS Flexbox',
      'SCSS',
      'JavaScript',
      'typescript',
      'Git',
      'Github',
      'Angular Material',
      'PrimeNG',
      'Bootstrap',
    ]
  },
  {
    job: 'Desarrollador full stack',
    company: 'Servicio de Administración Tributaria - SAT',
    dateIn: 'Noviembre 2017',
    dateOut: 'Septiembre 2019',
    activities: [
      'Se utilizo Angular para desarrollar interfaces de usuario interactivas y responsivas, mejorando la usabilidad y la experiencia del usuario.',
      'Implementé componentes reutilizables en Angular para agilizar el desarrollo y mantener la consistencia en las herramientas internas.',
      'Diseñé, desarrollé e implementé una API REST utilizando .NET Core para proporcionar servicios y funcionalidades específicas.',
      'Utilicé SignalR para establecer conexiones persistentes y bidireccionales con los clientes a través de WebSockets y otros protocolos de transporte compatibles.',
      'Diseñé y desarrollé estructuras de base de datos relacionales utilizando SQL Server, asegurando la coherencia y la integridad de los datos.',
      'Desarrollé procedimientos almacenados para implementar la lógica de negocio y realizar operaciones complejas en la base de datos, asegurando un rendimiento óptimo y una mayor eficiencia en las consultas.',
      'Realicé configuraciones en un servidor IIS para el despliegue de proyectos Angular 6 y .NET Core 2.0 en entornos de producción.'
    ],
    skils: [
      'Angular 6+',
      'NetCore 2.0',
      'HTML5',
      'JavaScript',
      'typescript',
      'Git',
      'Bootstrap',
    ]
  },
];

const SkilsListES: string[] = [
  'Capacidad de aprendizaje rápido de nuevos lenguajes y tecnologías',
  'Manejo de bases de datos con SQL Server y un poco de MongoDB',
  'Procesamiento y gestión de datos en tiempo real',
  'Desarrollo de aplicaciones web con Angular y React',
  'Desarrollo de aplicaciones Android con Kotlin y React Native',
  'Uso de herramientas de control de versiones como Git',
  'Desarrollo de API REST con .NET Corey un poco en Nodejs',
  'Implementación de autenticación y autorización en APIs',
  // 'Consumo de servicios REST APIs y gRPC'
];

const ProjectsES: Project[] = [
  {
    description: 'Guarda tus enlaces favoritos ordenándolos por grupos y tenerlos todos al alcance donde sea que estés. Desarrollado con MongoDB, Express, Angular y NodeJs',
    image: lovy,
    proyectName: 'Lovy Beta',
    technology: 'Angular - MEAN',
    url: 'https://www.lovy.com.mx/#/'
  },
  {
    description: 'Pagina para unir pdfs en el orden que quieras.',
    image: mergePdf,
    proyectName: 'Unir PDFs',
    technology: 'Angular',
    url: 'https://luizun777.github.io/pdf-merge/'
  },
  {
    description: 'Pagina para buscar Gif utilizando una api externo.',
    image: gifs,
    proyectName: 'Gifs',
    technology: 'Vite + React',
    url: 'https://stirring-bubblegum-b0412e.netlify.app/'
  }
];

export const LanguageES: language = {
  about: aboutMeES,
  menu: MenuES,
  skillsText: 'Habilidades',
  technologiesText: 'Lenguajes y Frameworks',
  experiences: ExperienceListES,
  skils: SkilsListES,
  projects: ProjectsES,
  tooltipProjects: 'Haz click',
  contactList
};


