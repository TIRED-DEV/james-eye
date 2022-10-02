import { Grid } from '@mui/material';
import { BsPlayCircle } from 'react-icons/bs';
import { GoTelescope } from 'react-icons/go';
import { Dialog } from '../../base/dialog/Dialog';
import { useState } from 'react';
import { Game } from '../../views/game/Game';
import { InfoTelescope } from '../../views/infoTelescope/InfoTelescope';
import { ButtonsStyle } from '../../styles/buttons';

interface IToolbar {
  celestialName: string;
}

export const Toolbar = (params: IToolbar) => {
  const [gameOpen, setGameOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const buttonsStyle = ButtonsStyle();

  return (
    <Grid zIndex={100} container sx={{ position: 'absolute', top: '30px' }}>
      <Grid
        item
        xs={6}
        display={'flex'}
        paddingLeft={'5%'}
        alignItems={'center'}
        justifyContent={'flex-start'}
      >
        <GoTelescope
          className={buttonsStyle.top}
          onClick={() => {
            setInfoOpen(true);
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        display={'flex'}
        paddingRight={'5%'}
        justifyContent={'flex-end'}
      >
        <BsPlayCircle
          className={buttonsStyle.top}
          size={50}
          onClick={() => setGameOpen(true)}
        />
      </Grid>
      <Dialog
        open={gameOpen}
        onClose={() => setGameOpen(false)}
        maxWidth={'xl'}
        fullWidth={true}
      >
        <Game
          celestialName={params.celestialName}
          onClose={() => {
            setGameOpen(false);
          }}
        />
      </Dialog>
      <Dialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        maxWidth={'xl'}
        fullWidth={true}
      >
        <InfoTelescope />
      </Dialog>
    </Grid>
  );
};
