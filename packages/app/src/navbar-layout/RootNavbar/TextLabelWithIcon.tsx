import * as React from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
}

export function TextLabelWithIcon({ children }: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>{children}</Box>
  );
}
