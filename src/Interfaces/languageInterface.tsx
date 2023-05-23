import { ImagesInterface } from "./ImagesInterface";
import { RoutesInterface } from "./navigateInterface";

export interface language {
  about: About;
  menu: RoutesInterface[]
}

export interface About {
  photo: ImagesInterface;
  name: string;
  desc: string[];
  age: string;
  job: string;
}