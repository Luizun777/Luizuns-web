
export const useAnimation = () => {

  const animateFadeIn = (delay: number = 2, direction?: 'L' | 'R' | 'U' | 'D' | 'N'): string => {
    let newDirection = '';
    switch (direction) {
      case 'R':
        newDirection = 'Right'
        break;
      case 'U':
        newDirection = 'Up'
        break;
      case 'D':
        newDirection = 'Down'
        break;
      case 'L':
        newDirection = 'Left'
        break;
      default:
        newDirection = ''
        break;
    }
    return `animate__animated animate__fadeIn${newDirection} animate__delay-${delay}s`;
  };

  return {
    animateFadeIn
  }
}
