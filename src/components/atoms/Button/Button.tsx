import React from 'react';

import {styled} from '@/style/styled';

const StyledButton = styled.button`
  background: ${({theme}) => theme.colors.primary.default};
`;

export const Button: React.FC = () => {
  return (
    <>
      <StyledButton type="button">hoge</StyledButton>
    </>
  );
};
