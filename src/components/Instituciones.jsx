import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const instituciones = [
  { icon: '🌿', label: 'ESFM Simón Rodríguez' },
  { icon: '🇧🇴', label: 'Estado Plurinacional de Bolivia' },
  { icon: '🏛️', label: 'Ministerio de Educación Bolivia' },
  { icon: '🌾', label: 'Cochabamba — Capital Cultural' },
];

export default function Instituciones() {
  return (
    <Box
      id="instituciones"
      sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: '6%' }, background: '#F8F1E7', textAlign: 'center' }}
    >
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E87020', mb: 1 }}>
        Respaldado por
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.2rem' }, color: '#C45C00', mb: 6, lineHeight: 1.2 }}>
        Orgullo Boliviano
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 800, mx: 'auto' }}>
        {instituciones.map((inst) => (
          <Grid item xs={6} sm={3} key={inst.label}>
            <Box
              sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5,
                opacity: 0.85,
                transition: 'opacity 0.2s, transform 0.2s',
                '&:hover': { opacity: 1, transform: 'scale(1.06)' },
                cursor: 'default',
              }}
            >
              <Typography sx={{ fontSize: '4rem', lineHeight: 1 }}>{inst.icon}</Typography>
              <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#C45C00', letterSpacing: '0.05em', maxWidth: 110, textAlign: 'center' }}>
                {inst.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
