import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchToken } from '../utils';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { selectGenreOrCategory } from '../features/currenteGenreOrCategory';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: 'd5acd0717244d1da5f13dd8a1c0092fd2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genre }) => {
        console.log('command: ', command, 'mode: ', mode);
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genre.toLowerCase());
          if (foundGenre) {
            history.pushState('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          }
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          history.push('/');
        }
      },
    });
  }, [setMode]);
};

export default useAlan;
