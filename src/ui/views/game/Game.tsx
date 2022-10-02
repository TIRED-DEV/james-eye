import { Button, Grid, Paper, Slide, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
} from 'react-icons/bs';
import { ButtonsStyle } from '../../styles/buttons';
import { Colors } from '../../theme';
import { useGame } from './useGame';

interface IGame {
  celestialName: string;
  onClose: () => void;
}

export const Game = (params: IGame) => {
  const buttonsStyle = ButtonsStyle();
  const { value, checkAnswer } = useGame(params);

  const [answer, setAnswer] = useState(0);

  useEffect(() => {
    console.log(answer);
    if (answer === 1 || answer === 2) {
      setTimeout(() => {
        params.onClose();
      }, 1000);
    }
  }, [answer]);

  return (
    <div>
      <Grid
        container
        sx={{ minHeight: '75vh' }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid item xs={6} display={'flex'} justifyContent={'center'}>
          <Typography
            variant="h4"
            component="h1"
            color={Colors.text}
            sx={{
              fontWeight: 'bold',
              '-webkit-text-stroke': `2px ${Colors.textDark}`,
            }}
            gutterBottom
          >
            {'WHO TOOK THIS PICTURE?'}
          </Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'center'}>
          <Paper
            sx={{
              minHeight: '30vh',
              maxWidth: '40em',
              bgcolor: Colors.background,
            }}
          >
            <img
              src={value?.url!!}
              alt=""
              style={{
                maxWidth: '20em',
                padding: '1.5em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'center'}>
          <Grid container justifyContent="center" gap={4}>
            <Button
              className={buttonsStyle.main}
              onClick={() => {
                let result = checkAnswer('Hubble');
                checkAnswer('HUBBLE') ? setAnswer(1) : setAnswer(2);
              }}
            >
              Hubble
            </Button>
            <Button
              className={buttonsStyle.main}
              onClick={() => {
                checkAnswer('WEBB') ? setAnswer(1) : setAnswer(2);
              }}
            >
              Webb
            </Button>
          </Grid>
        </Grid>
        <div
          style={{
            fontSize: '20em',
            position: 'absolute',
          }}
        >
          {answer === 1 && <BsFillHandThumbsUpFill color={Colors.success} />}
          {answer === 2 && <BsFillHandThumbsDownFill color={Colors.error} />}
        </div>
      </Grid>
    </div>
  );
};
