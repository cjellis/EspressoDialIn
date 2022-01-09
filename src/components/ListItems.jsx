import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export const mainListItems = () => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <LocalCafeIcon />
      </ListItemIcon>
      <ListItemText primary="Track Shots" />
    </ListItem>
  </div>
);

export default mainListItems;
