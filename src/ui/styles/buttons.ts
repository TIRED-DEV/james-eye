import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Colors } from '../theme';

export const ButtonsStyle = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '10em',
      height: '3em',
      fontWeight: 'bold' + ' !important',
      fontSize: '1em' + '!important',
      backgroundColor: Colors.primary + ' !important',
      color: Colors.textDark + ' !important',
      '&:hover': {
        backgroundColor: Colors.space2 + ' !important',
        color: Colors.text + ' !important',
      },
    },
    top: {
      fontSize: '4em',
      cursor: 'pointer',
      color: Colors.textOpacity,
      transition: 'all 0.3s ease',
      '&:hover': {
        color: Colors.textLight + '!important',
      },
    },
  })
);
