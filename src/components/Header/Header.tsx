import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

import {up, useIsUpMd} from '@/style/mediaQuery';
import {styled} from '@/style/styled';

const HeaderLayout = styled.header`
  width: 100%;
  position: relative;
  z-index: ${({theme}) => theme.zIndices.appBar};
  display: flex;
  padding-top: ${({theme}) => theme.spaces[2]}px;
  ${up('md')} {
    padding-left: ${({theme}) => theme.spaces[3]}px;
  }
`;

interface HeaderProps {
  onMenuButtonClick?: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const {children, onMenuButtonClick} = props;
  const isUpMd = useIsUpMd();

  return (
    <HeaderLayout>
      {!isUpMd && (
        <>
          {onMenuButtonClick && (
            <IconButton aria-label="メニュー" onClick={onMenuButtonClick}>
              <MenuIcon />
            </IconButton>
          )}
          <IconButton
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/takumiya081/ayu"
          >
            <GitHubIcon />
          </IconButton>
        </>
      )}
      {children}
    </HeaderLayout>
  );
};
