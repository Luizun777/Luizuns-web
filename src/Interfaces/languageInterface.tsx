import { ImagesInterface } from "./ImagesInterface";
import { RoutesInterface } from "./navigateInterface";

export interface language {
  about: About;
  menu: RoutesInterface[];
  technologiesText: string;
  experiences: Experience[];
  skils: string[];
}

export interface About {
  photo: ImagesInterface;
  name: string;
  desc: string[];
  age: string;
  job: string;
}

export interface Experience {
  job: string;
  company: string;
  dateIn: string;
  dateOut: string;
  activities: string[];
  skils: string[]
}
