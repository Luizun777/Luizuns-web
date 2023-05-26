import { ImagesInterface } from '../Interfaces/ImagesInterface';
import profilePhoto from '../assets/photo-profile.jpg';
import reactLogo from '../assets/Logos/react.svg';
import angularLogo from '../assets/Logos/angular.png';
import html5Logo from '../assets/Logos/html5.png';
import cssLogo from '../assets/Logos/css.png';
import cSharpLogo from '../assets/Logos/C-sharp.png';
import javascriptLogo from '../assets/Logos/javascript.png';
import netCoreLogo from '../assets/Logos/netCore.png';
import bootstrapLogo from '../assets/Logos/bootstrap.png';
import typescriptLogo from '../assets/Logos/typescript.png';
import nodejsLogo from '../assets/Logos/nodejs.png';
import sqlLogo from '../assets/Logos/sql.png';
import mongoDBLogo from '../assets/Logos/mongoDB.png';
import primefacesLogo from '../assets/Logos/primefaces.png';
import gitLogo from '../assets/Logos/git.png';
import githubLogo from '../assets/Logos/github.png';

export const photo: ImagesInterface = {
  src: profilePhoto,
  name: 'Luizun'
}

export const carouselData: ImagesInterface[] = [
  {
    src: githubLogo,
    name: 'github'
  },
  {
    src: gitLogo,
    name: 'git'
  },
  {
    src: javascriptLogo,
    name: 'javascript'
  },
  {
    src: reactLogo,
    name: 'react'
  },
  {
    src: angularLogo,
    name: 'angular'
  },
  {
    src: typescriptLogo,
    name: 'typescript'
  },
  {
    src: nodejsLogo,
    name: 'nodejs'
  },
  {
    src: sqlLogo,
    name: 'SQL'
  },
  {
    src: mongoDBLogo,
    name: 'Mongo DB'
  },
  {
    src: cSharpLogo,
    name: 'C#'
  },
  {
    src: netCoreLogo,
    name: 'net Core'
  },
  {
    src: bootstrapLogo,
    name: 'Bootstrap'
  },
  {
    src: primefacesLogo,
    name: 'Primefaces'
  },
  {
    src: html5Logo,
    name: 'html'
  },
  {
    src: cssLogo,
    name: 'css'
  },
];
