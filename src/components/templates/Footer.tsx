import React from 'react';
import styled from 'styled-components';
import { theme } from '~/theme';

export const Footer: React.FC = () => {
  return <FooterStyle>© Lounge Jungle All rights reserved.</FooterStyle>;
};

const FooterStyle = styled.div`
  height: 50px;
  background-color: ${theme.background.color.main};

  display: flex;
  align-items: center;
  justify-content: center;
`;
