import { RoutesInterface } from "../Interfaces/navigateInterface";
import { AboutWebScreen } from "../Screens/AboutWebScreen";
import { ContactScreen } from "../Screens/ContactScreen";
import { ExperienceScreen } from "../Screens/ExperienceScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { ProyectsScreen } from "../Screens/ProyectsScreen";

export const navegateList: RoutesInterface[] = [
  {
    name: 'About me',
    path: '/Home',
    element: <HomeScreen />
  },
  {
    name: 'Experience',
    path: '/Experience',
    element: <ExperienceScreen />
  },
  {
    name: 'Proyects',
    path: '/ProyectsScreen',
    element: <ProyectsScreen />
  },
  {
    name: 'Contact',
    path: '/ContactScreen',
    element: <ContactScreen />
  },
  {
    name: 'About Web',
    path: '/AboutWebScreen',
    element: <AboutWebScreen />
  },
  {
    path: '/*',
    element: <HomeScreen />
  },
];
