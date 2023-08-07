import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ImagesInterface } from "./ImagesInterface";
import { RoutesInterface } from "./navigateInterface";

export interface language {
  about: About;
  menu: RoutesInterface[];
  MenuAppVerb: RoutesInterface[];
  skillsText: string;
  technologiesText: string;
  experiences: Experience[];
  skils: string[];
  projects: Project[];
  tooltipProjects: string;
  contactList: Contact[];
  PrivacyPolicyAppVerb: PrivacyPolicyAppVerb;
}

export interface Project {
  image: string;
  proyectName: string;
  technology: string;
  description: string;
  url: string;
}

export interface Contact {
  icon: IconProp;
  text: string;
  link: string;
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

export interface PrivacyPolicyAppVerb {
  date: string;
  description: string;
  policyList: PrivacyPolicy[];
}

export interface PrivacyPolicy {
  title: string;
  desc: string;
}
