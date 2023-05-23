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
  technologiesText: 'Languages and Frameworks'
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
  technologiesText: 'Lenguajes y Frameworks'
};