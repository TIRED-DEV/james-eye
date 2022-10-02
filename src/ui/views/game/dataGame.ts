export interface IResource {
  id: number;
  name: string;
  url: string;
  solution: 'HUBBLE' | 'WEBB';
}
interface IDataGame {
  id: number;
  name: string;
  resources: IResource[];
}

export const DataGame: IDataGame[] = [
  {
    id: 1,
    name: 'earth',
    resources: [
      {
        id: 1,
        name: 'earth1',
        url: '/images/game/earth01.jpg',
        solution: 'HUBBLE',
      },
    ],
  },
  {
    id: 2,
    name: 'mars',
    resources: [
      {
        id: 1,
        name: 'mars1',
        url: '/images/game/mars01.png',
        solution: 'WEBB',
      },
      {
        id: 2,
        name: 'mars2',
        url: '/images/game/mars02.png',

        solution: 'HUBBLE',
      },
    ],
  },
  {
    id: 3,
    name: 'jupiter',
    resources: [
      {
        id: 1,
        name: 'jupiter1',
        url: '/images/game/jupiter01.png',
        solution: 'HUBBLE',
      },
      {
        id: 2,
        name: 'jupiter2',
        url: '/images/game/jupiter02.png',
        solution: 'HUBBLE',
      },
      {
        id: 3,
        name: 'jupiter3',
        url: '/images/game/jupiter03.png',
        solution: 'WEBB',
      },
    ],
  },
  {
    id: 4,
    name: 'saturn',
    resources: [
      {
        id: 1,
        name: 'saturn1',
        url: '/images/game/saturn01.png',
        solution: 'HUBBLE',
      },
    ],
  },
];
