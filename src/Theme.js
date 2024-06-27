import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

const lightTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
      background: '#FFFFFF',
      text: '#000000',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
});

const darkTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
      background: '#1A1A1A',
      text: '#FFFFFF',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
});

export { lightTheme, darkTheme };
