import { About, aboutMeEN, aboutMeES } from "../../data/AboutData";

type languageAction =
  | { type: 'set_es-language' }
  | { type: 'set_en-language' }

export const languageReducer = (state: About, action: languageAction): About => {
  switch (action.type) {
    case 'set_en-language':
      return {...aboutMeEN}
    case 'set_es-language':
      return {...aboutMeES}
    default:
       return state
  }
}