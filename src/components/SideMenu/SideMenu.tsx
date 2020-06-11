import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import React from 'react';

import {Link} from '@/lib/Link';
import {styled} from '@/style/styled';

const TwitterIconWrapper = styled.i`
  color: #1da1f2;
`;

export const SideMenu: React.FC = () => {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary={
            <Link href="/" underline="none">
              <Typography component="h1" color="textPrimary" variant="h6">
                きときと鮎マップ
              </Typography>
            </Link>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={<Link href="/getting-started">getting started</Link>} />
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
        <ListItemText primary="GitHub" />
      </ListItem>
      <ListItem>
        <ListItemText primary="contributor" />
      </ListItem>
      <List component="div" disablePadding>
        <ListItem
          component="a"
          href="https://twitter.com/nayakaya0606"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon>
            <TwitterIconWrapper>
              <Twitter />
            </TwitterIconWrapper>
          </ListItemIcon>
          <ListItemText primary="なやかや" />
        </ListItem>
      </List>
    </List>
  );
};
