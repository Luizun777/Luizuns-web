import { RoutesInterface, TypeMenuInterface } from "../Interfaces/navigateInterface";
import { AboutWebScreen } from "../Screens/LuizunWeb/AboutWebScreen";
import { HomeScreen } from "../Screens/LuizunWeb/HomeScreen";
import { ExperienceScreen } from "../Screens/LuizunWeb/ExperienceScreen";
import { ProyectsScreen } from "../Screens/LuizunWeb/ProyectsScreen";
import { ContactScreen } from "../Screens/LuizunWeb/ContactScreen";

import { AppVerbsScreen } from "../Screens/AppVerbs/AppVerbsScreen";

export const navegateList: RoutesInterface[] = [
  {
    path: '/web/Home',
    element: <HomeScreen />
  },
  {
    path: '/web/Experience',
    element: <ExperienceScreen />
  },
  {
    path: '/web/Projects',
    element: <ProyectsScreen />
  },
  {
    path: '/web/Contact',
    element: <ContactScreen />
  },
  {
    path: '/web/AboutWeb',
    element: <AboutWebScreen />
  },
  {
    path: '/*',
    element: <HomeScreen />
  },
  {
    path: '/verb-Quesq/About',
    element: <AppVerbsScreen />
  },
  {
    path: '/verb-quest/*',
    element: <AppVerbsScreen />
  },
];

export const typeMenuList: TypeMenuInterface[] = [
  {
    path: 'web',
    title: '💻 Luizun',
    name: '💻 <Luizun`s Web />'
  },
  {
    path: 'verb-quest',
    title: '🤓 Verb-Quest',
    name: '🤓 Verb-Quest'
  }
];
