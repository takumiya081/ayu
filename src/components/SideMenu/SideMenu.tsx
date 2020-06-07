import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';

import {Link} from '@/lib/Link';

export const SideMenu: React.FC = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="きときと鮎マップ" />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Link href="/">getting started</Link>} />
      </ListItem>
      <ListItem
        component="a"
        href="https://github.com/takumiya081/ayu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemText primary="GitHub Repository" />
      </ListItem>
    </List>
  );
};