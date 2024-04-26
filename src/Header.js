// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './redux/actions';

const Header = ({ toggleDrawer }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const theme = useTheme();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Главная
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
            О себе
          </Link>
        </Typography>
        <IconButton
          color="inherit"
          aria-label="toggle dark mode"
          onClick={handleToggleDarkMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
