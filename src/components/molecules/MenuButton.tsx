import React from 'react';
import { Box, Line } from '~/components/atoms';

type MenuButton = {
  onClick: () => void;
};

export const MenuButton: React.FC<MenuButton> = ({ onClick }) => {
  return (
    <Box
      width="70px"
      height="70px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding="26px 24px"
      onClick={onClick}
    >
      <Line />
      <Line />
      <Line />
    </Box>
  );
};
