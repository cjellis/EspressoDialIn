import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

export const mainListItems = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <LocalCafeIcon />
        </ListItemIcon>
        <ListItemText primary="Track Shots" />
      </ListItem>
    </div>
  );
};

export default mainListItems;
