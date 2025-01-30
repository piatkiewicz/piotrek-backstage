import React, { PropsWithChildren } from 'react';
import { Box } from '@material-ui/core';
import ButtonAppBar from './AppBar';

export const RootNavbar = ({ children }: PropsWithChildren<{}>) => (
  <Box>
    <ButtonAppBar />
    {children}
  </Box>
);
