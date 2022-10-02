import {
  Button,
  ButtonGroup,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import { OptionsBar } from './OptionsBar';

interface ICelestialBodyBar {
  celestialBody: React.ReactNode;
  setCelestialBody: React.Dispatch<React.SetStateAction<JSX.Element>>;
  setCelestialName: (name: string) => void;
}

export const CelestialBodyBar = (params: ICelestialBodyBar) => {
  const { innerWidth: width, innerHeight: height } = window;
  const optionsBar = OptionsBar;
  return (
    <>
      <Grid
        zIndex={100}
        container
        sx={{ position: 'absolute', top: `${height - 100}px` }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <ButtonGroup size="large" aria-label="large button group">
          {optionsBar.map((option, index) => (
            <Button
              key={`button-${index}`}
              onClick={() => {
                params.setCelestialBody(option.component);
                params.setCelestialName(option.name);
              }}
            >
              <img src={option.url} alt="" width="80" />
            </Button>
          ))}
          {/* https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png */}
        </ButtonGroup>
      </Grid>
    </>
  );
};
