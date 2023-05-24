import { About, language } from '../Interfaces/languageInterface';
import { RoutesInterface } from '../Interfaces/navigateInterface';
import { photo } from './imageData';

const age = String((new Date()).getFullYear() - 1996);

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
    name: 'Proyects',
    path: '/ProyectsScreen',
  },
  {
    name: 'Contact',
    path: '/ContactScreen',
  },
  {
    name: 'About Web',
    path: '/AboutWebScreen',
  }
];

export const aboutMeEN: About = {
  photo,
  name: `Hello there 👋, I'm Luis Acosta Tinajero`,
  age: `${age} years old`,
  job: 'Developer Full-stack',
  desc: [
    'I am a full-stack developer with experience in web application development using technologies such as Angular, React, React Native, Node.js, and .NET Core.',
    'My tasks have included project development and maintenance, integration with REST APIs and real-time services, as well as unit testing and code deployment to production servers. I also possess knowledge of SQL Server databases and configuration of IIS servers. My ability to adapt to different environments and overcome challenges has allowed me to acquire strong skills in software development and deliver high-quality solutions.',
    'My objective is to provide exceptional work, which is why I stay up-to-date with the latest technologies to be prepared and successfully fulfill assigned projects.'
  ],
};

export const LanguageEN: language = {
  about: aboutMeEN,
  menu: MenuEN,
  technologiesText: 'Languages and Frameworks',
  experiences: [
    {
      job: 'Desarrollador full stack',
      company: 'Consejo de la Judicatura Federal México',
      dateIn: 'Mayo 2022',
      dateOut: 'Actual',
      activities: [
        'Asumí la responsabilidad de continuar un proyecto de Android utilizando Kotlin, a pesar de no tener experiencia previa en el lenguaje.',
        'Adquirí rápidamente habilidades en Kotlin mediante un proceso de aprendizaje intensivo, dedicando tiempo fuera de las horas de trabajo para estudiar y practicar.',
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
        'Diseñé, desarrollé e implementé aplicaciones web utilizando Angular para crear herramientas internas utilizadas por el equipo.',
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
      company: 'Servicio de Administración Tributaria',
      dateIn: 'Noviembre 2017',
      dateOut: 'Septiembre 2019',
      activities: [
        'Se utilizo Angular para desarrollar interfaces de usuario interactivas y responsivas, mejorando la usabilidad y la experiencia del usuario.',
        'Implementé componentes reutilizables en Angular para agilizar el desarrollo y mantener la consistencia en las herramientas internas.',
        'Diseñé, desarrollé e implementé una API REST utilizando .NET Core para proporcionar servicios y funcionalidades específicas.',
        'Utilicé SignalR para establecer conexiones persistentes y bidireccionales con los clientes a través de WebSockets y otros protocolos de transporte compatibles.',
        'Diseñé y desarrollé estructuras de base de datos relacionales utilizando SQL Server, asegurando la coherencia y la integridad de los datos.',
        'Desarrollé stored procedures para implementar la lógica de negocio y realizar operaciones complejas en la base de datos, asegurando un rendimiento óptimo y una mayor eficiencia en las consultas.',
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
  ],
  skils: [
    'Manejo de bases de datos con SQL Server',
    'Configuración y gestión de conexiones con Socket.IO en el lado del cliente',
    'Procesamiento y gestión de datos en tiempo real',
    'Colaboración efectiva con el equipo de backend y proveedores externos',
    'Desarrollo de aplicaciones web con Angular',
    'Implementación de nuevas características y mejoras',
    'Análisis y evaluación de tecnologías y dependencias existentes',
    'Desarrollo de aplicaciones Android con Kotlin',
    'Capacidad de aprendizaje rápido de nuevos lenguajes y tecnologías',
    'Uso de herramientas de control de versiones como Git',
    'Colaboración y coordinación con equipos multidisciplinarios',
    'Integración de servicios y llamadas a APIs en Angular',
    'Desarrollo de API REST con .NET Core',
    'Implementación de autenticación y autorización en APIs',
    'Patrón de arquitectura MVC de .NET Core',
    'Consumo de servicios REST APIs y gRPC'
  ]
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
  {
    name: 'Sobre la pagina',
    path: '/AboutWebScreen',
  }
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

export const LanguageES: language = {
  about: aboutMeES,
  menu: MenuES,
  technologiesText: 'Lenguajes y Frameworks',
  experiences: [
    {
      job: 'Desarrollador Full stack',
      company: 'Santander',
      dateIn: 'Febrero 2022',
      dateOut: 'Abril 2022',
      activities: [
        'Desarrollo de aplicaciones web con angular para herramientas internas'
      ],
      skils: [
        'Angular',
        'NodeJs',
        'HTML5'
      ]
    }
  ],
  skils: [
    ''
  ]
};