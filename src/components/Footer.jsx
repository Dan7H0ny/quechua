import React from 'react';
import { Box, Typography } from '@mui/material';
import WiphalaBar from './WiphalaBar';

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: '#1A0B00', py: 5, px: '6%', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2.5 }}>
        <Typography sx={{ fontSize: '2.2rem' }}>🌿</Typography>
        <Typography sx={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '0.95rem', color: '#F4A453' }}>
          Diccionario Quechua · ESFM Simón Rodríguez
        </Typography>
      </Box>

      <Box sx={{ width: 60, height: 2, background: '#C45C00', mx: 'auto', borderRadius: 1, mb: 2.5 }} />

      <Box sx={{ fontSize: '0.82rem', color: 'rgba(255,246,236,0.5)', lineHeight: 1.9 }}>
        <Typography component="p" sx={{ fontSize: 'inherit', color: 'inherit' }}>
          © 2026 <strong style={{ color: '#F4A453' }}>Diccionario Quechua App</strong> — Todos los derechos reservados.
        </Typography>
        <Typography component="p" sx={{ fontSize: 'inherit', color: 'inherit' }}>
          Desarrollado por <strong style={{ color: '#F4A453' }}>Cristhian Eddy Guardia Alcocer y Antony Alcaro Mamani Hinojosa</strong>
        </Typography>
        <Typography component="p" sx={{ fontSize: 'inherit', color: 'inherit' }}>
          Cochabamba — Bolivia · <em>Runasimi Kamachiq</em>
        </Typography>
      </Box>

      <WiphalaBar sx={{ mt: 3, borderRadius: '3px' }} />
    </Box>
  );
}
