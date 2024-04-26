// Menu.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <div
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Лабораторная работа 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Лабораторная работа 2" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
