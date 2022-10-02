import { Alert, Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { DataGame, IResource } from './dataGame';

interface IUseGame {
  celestialName: string;
  onClose: () => void;
}

export const useGame = (params: IUseGame) => {
  const [data, setData] = useState(
    DataGame.find((x) => x.name === params.celestialName)
  );
  const [value, setValue] = useState<IResource>();

  useEffect(() => {
    const random = Math.floor(Math.random() * data?.resources.length!!);
    setValue(data?.resources[random]!!);
  }, []);

  const checkAnswer = (answer: string): boolean => {
    console.log(answer, value?.solution);
    if (answer === value?.solution) {
      return true;
    } else {
      return false;
    }
  };

  return { value, checkAnswer };
};
