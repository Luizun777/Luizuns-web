import { ImagesInterface } from '../Interfaces/ImagesInterface';
import { photo } from './imageData';

const age = String((new Date()).getFullYear() - 1996);

interface About {
  photo: ImagesInterface;
  name: string;
  desc: string;
  age: string;
  job: string;
}

export const aboutMe: About = {
  photo,
  name: `Hello there 👋, I'm Luis Acosta Tinajero`,
  age,
  job: 'Developer Full Stack',
  desc: 'Soy un desarrollador full-stack con experiencia en el desarrollo de aplicaciones web utilizando tecnologías como Angular, React, React Native, Node.js y .NET Core. He realizado tareas como el desarrollo y mantenimiento de proyectos, integración con REST APIs y servicios en tiempo real, así como pruebas unitarias y despliegue de código en servidores de producción. También tengo conocimientos en bases de datos SQL Server y configuración de servidores IIS. Mi capacidad para adaptarme a diferentes entornos y enfrentar desafíos me ha permitido adquirir habilidades sólidas en el desarrollo de software y ofrecer soluciones de alta calidad. Estoy comprometido con la excelencia y me mantengo actualizado en las nuevas tecnologías para cumplir con los proyectos asignados.',
}