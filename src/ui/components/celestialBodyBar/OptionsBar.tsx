import { Earth } from '../celestialBodies/earth/Earth';
import { Jupiter } from '../celestialBodies/jupiter/Jupiter';

import { Mars } from '../celestialBodies/mars/Mars';
import { Saturn } from '../celestialBodies/saturn/Saturn';

interface IOptionBar {
  name: string;
  url: string;
  component: React.SetStateAction<JSX.Element>;
}

export const OptionsBar: IOptionBar[] = [
  {
    name: 'earth',
    url: 'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png',
    component: <Earth />,
  },
  {
    name: 'mars',
    url: 'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png',
    component: <Mars />,
  },
  {
    name: 'jupiter',
    url: 'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png',
    component: <Jupiter />,
  },
  {
    name: 'saturn',
    url: 'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png',
    component: <Saturn />,
  },
];
