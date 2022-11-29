import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { ColorModeContext } from '../utils/ToggleColorMode';

const useAlan = () => {
  useEffect(() => {
    alanBtn({
      key: 'd5acd0717244d1da5f13dd8a1c0092fd2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode }) => {
        console.log(command, mode);
      },
    });
  }, []);
};

export default useAlan;
