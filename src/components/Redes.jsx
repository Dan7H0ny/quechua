import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, Grid } from '@mui/material';

const redes = [
  { icon: '📘', label: 'Facebook',   href: '#' },
  { icon: '📸', label: 'Instagram',  href: '#' },
  { icon: '🎵', label: 'TikTok',     href: '#' },
  { icon: '▶️', label: 'YouTube',    href: '#' },
  { icon: '🐦', label: 'X / Twitter',href: '#' },
  { icon: '💬', label: 'WhatsApp',   href: '#' },
];

export default function Redes() {
  return (
    <Box
      id="redes"
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: '6%' }, background: '#6B3A1F', textAlign: 'center' }}
    >
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F4A453', mb: 1 }}>
        Síguenos
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.2rem' }, color: '#FDF6EC', mb: 6, lineHeight: 1.2 }}>
        Únete a la comunidad
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}>
        {redes.map((r) => (
          <Grid item xs={6} sm={4} md={2} key={r.label}>
            <Card
              elevation={0}
              sx={{
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.12)',
                transition: 'background 0.2s, transform 0.2s',
                '&:hover': { background: '#C45C00', borderColor: '#C45C00', transform: 'translateY(-6px)' },
              }}
            >
              <CardActionArea component="a" href={r.href} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontSize: '2rem' }}>{r.icon}</Typography>
                <Typography sx={{ color: '#FDF6EC', fontWeight: 600, fontSize: '0.82rem' }}>{r.label}</Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography sx={{ color: 'rgba(255,246,236,0.6)', fontSize: '0.9rem', maxWidth: 500, mx: 'auto', lineHeight: 1.7 }}>
        Comparte el quechua con el mundo. Cada palabra compartida es un paso hacia la preservación de nuestra lengua ancestral.
      </Typography>
    </Box>
  );
}
