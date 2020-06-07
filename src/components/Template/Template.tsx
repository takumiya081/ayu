import {css, Global} from '@emotion/core';
import Drawer from '@material-ui/core/Drawer';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import React from 'react';

import {SideMenu} from '@/components/SideMenu';
import {up, useIsUpMd} from '@/style/mediaQuery';
import {styled} from '@/style/styled';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
        }
        #__next {
          height: 100%;
        }
      `}
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ContentsColumn = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`;

const sideWidth = {
  md: '250px',
  sm: '240px',
};

const useMUIStyle = makeStyles((theme) =>
  createStyles({
    drawerPaper: {
      width: sideWidth.sm,
      [theme.breakpoints.up('md')]: {
        width: sideWidth.md,
      },
    },
  }),
);

const SideDrawer = styled(Drawer)`
  width: ${sideWidth.sm};
  ${up('md')} {
    width: ${sideWidth.md};
  }
`;

const Side = styled.nav`
  width: 100%;
`;

interface TemplateProps {
  sidebarOpen: boolean;
  onSidebarClose: () => void;
}

export const Template: React.FC<TemplateProps> = (props) => {
  const {children, sidebarOpen, onSidebarClose} = props;
  const classes = useMUIStyle();
  const isUpMd = useIsUpMd();

  return (
    <Wrapper>
      <GlobalStyle />
      <SideDrawer
        open={sidebarOpen || isUpMd}
        variant={isUpMd ? 'permanent' : 'temporary'}
        anchor="left"
        ModalProps={{
          keepMounted: true,
        }}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={onSidebarClose}
      >
        <Side>
          <SideMenu />
        </Side>
      </SideDrawer>
      <ContentsColumn>{children}</ContentsColumn>
    </Wrapper>
  );
};
