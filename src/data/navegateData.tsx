import { RoutesInterface } from "../Interfaces/navigateInterface";
import { AboutWebScreen } from "../Screens/AboutWebScreen";
import { ContactScreen } from "../Screens/ContactScreen";
import { ExperienceScreen } from "../Screens/ExperienceScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { ProyectsScreen } from "../Screens/ProyectsScreen";

export const navegateList: RoutesInterface[] = [
  {
    path: '/Home',
    element: <HomeScreen />
  },
  {
    path: '/Experience',
    element: <ExperienceScreen />
  },
  {
    path: '/ProyectsScreen',
    element: <ProyectsScreen />
  },
  {
    path: '/ContactScreen',
    element: <ContactScreen />
  },
  {
    path: '/AboutWebScreen',
    element: <AboutWebScreen />
  },
  {
    path: '/*',
    element: <HomeScreen />
  },
];
