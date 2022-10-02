import { useState } from 'react';
import {
  AppBar as MUIAppBar,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GoTelescope } from 'react-icons/go';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const AppBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Grid zIndex={100} container sx={{ position: 'absolute', top: '30px' }}>
      <Grid
        item
        xs={6}
        display={'flex'}
        paddingLeft={'5%'}
        justifyContent={'flex-start'}
      >
        <GoTelescope color="#ffffff" size={50} />
      </Grid>
      <Grid
        item
        xs={6}
        display={'flex'}
        paddingRight={'5%'}
        justifyContent={'flex-end'}
      >
        <AiOutlineInfoCircle color="#ffffff" size={50} />
      </Grid>
    </Grid>
  );
};
