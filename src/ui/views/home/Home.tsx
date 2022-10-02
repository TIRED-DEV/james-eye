import { Grid, Typography } from '@mui/material';
import { Canvas } from '../../base/canvas/Canvas';
import { View } from '../../base/view/View';
import { Toolbar } from '../../components/toolbar/Toolbar';
import { useState } from 'react';
import { CelestialBodyBar } from '../../components/celestialBodyBar/CelestialBodyBar';
import { Earth } from '../../components/celestialBodies/earth/Earth';
import { Dialog } from '../../base/dialog/Dialog';

export const Home = () => {
  const [celestialBody, setCelestialBody] = useState(<Earth />);
  const [celestialName, setCelestialName] = useState('earth');
  return (
    <View>
      <Toolbar celestialName={celestialName} />
      <Canvas>{celestialBody}</Canvas>
      <CelestialBodyBar
        celestialBody={celestialBody}
        setCelestialBody={setCelestialBody}
        setCelestialName={setCelestialName}
      />
    </View>
  );
};
