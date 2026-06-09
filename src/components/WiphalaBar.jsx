import React from 'react';
import { Box } from '@mui/material';

export default function WiphalaBar({ sx = {} }) {
  return (
    <Box
      sx={{
        height: 6,
        background: 'linear-gradient(90deg, #CC2222 14.28%, #FF6600 14.28% 28.57%, #F5D000 28.57% 42.85%, #228822 42.85% 57.14%, #1A3C6E 57.14% 71.42%, #4B0082 71.42% 85.71%, #CC2222 85.71%)',
        ...sx,
      }}
    />
  );
}
