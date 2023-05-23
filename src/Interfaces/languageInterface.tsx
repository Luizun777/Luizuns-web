import { ImagesInterface } from "./ImagesInterface";
import { RoutesInterface } from "./navigateInterface";

export interface language {
  about: About;
  menu: RoutesInterface[];
  technologiesText: string;
}

export interface About {
  photo: ImagesInterface;
  name: string;
  desc: string[];
  age: string;
  job: string;
}