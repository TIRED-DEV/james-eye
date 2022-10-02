import { createTheme } from '@mui/material';

export const Colors = {
  primary: '#F9B36E',
  primaryOpacity: 'rgba(249, 179, 110, 0.5)',
  secondary: '#A94E66',
  secondaryOpacity: 'rgba(169, 78, 102, 0.5)',
  secondaryDark: '#A94E66',
  space1: '#23455E',
  space1Opacity: 'rgba(35, 69, 94, 0.5)',
  space2: '#216576',
  space2Opacity: 'rgba(33, 101, 118, 0.5)',
  background: '#CDBEB1',
  backgroundOpacity: 'rgba(205, 190, 177, 0.4)',

  text: '#F0EDEA',
  textOpacity: 'rgba(240, 237, 234, 0.3)',
  textLight: '#BDBAB8',
  textDark: '#2C2014',
  linkGrayText: '#AFAFAF',
  exit: '#EB3F3B',
  error: 'rgba(225, 62, 62, 0.8)',
  success: 'rgba(62, 225, 62, 0.8)',
};

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
});
