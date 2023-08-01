import { RoutesInterface } from "../Interfaces/navigateInterface";
import { AboutWebScreen } from "../Screens/LuizunWeb/AboutWebScreen";
import { HomeScreen } from "../Screens/LuizunWeb/HomeScreen";
import { ExperienceScreen } from "../Screens/LuizunWeb/ExperienceScreen";
import { ProyectsScreen } from "../Screens/LuizunWeb/ProyectsScreen";
import { ContactScreen } from "../Screens/LuizunWeb/ContactScreen";

import { AppVerbsScreen } from "../Screens/AppVerbs/AppVerbsScreen";

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
  {
    path: '/AppVerbs',
    element: <AppVerbsScreen />
  },
];
