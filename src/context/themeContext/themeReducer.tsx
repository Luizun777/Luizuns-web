type ThemeAction =
  | { type: 'set_ligth-theme' }
  | { type: 'set_dark-theme' }

interface Colors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export interface ThemeState {
  currentTheme: 'ligth' | 'dark';
  colors: Colors,
  dividerColor: string;
  backgroundModal: string;
}

export const LigthTheme: ThemeState = {
  currentTheme: 'ligth',
  dividerColor: 'rgba(0,0,0, 0.3)',
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
  backgroundModal: 'white'
}

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(255,255,255, 0.9)',
  colors: {
    primary: '#75CEDB',
    background: '#191919',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
  backgroundModal: '#333333'
}

export const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'set_ligth-theme':
      return {...LigthTheme}
    case 'set_dark-theme':
      return {...darkTheme}
    default:
       return state
  }
}