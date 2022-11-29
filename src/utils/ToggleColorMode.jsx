import React, { useState, createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo();
  return (
    <div>ToggleColorMode</div>
  );
};

export default ToggleColorMode;
