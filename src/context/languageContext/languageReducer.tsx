import { language } from "../../Interfaces/languageInterface";
import { LanguageEN, LanguageES } from "../../data/languageData";

type languageAction =
  | { type: 'set_es-language' }
  | { type: 'set_en-language' }

export const languageReducer = (state: language, action: languageAction): language => {
  switch (action.type) {
    case 'set_en-language':
      return {...LanguageEN}
    case 'set_es-language':
      return {...LanguageES}
    default:
       return state
  }
}