import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ClassNames } from '@emotion/react';

const Search = () => {
  console.log('search');
  return (
    <div className={ClassNames.searchContainer}>Search...</div>
  );
};

export default Search;
