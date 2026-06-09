import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const stats = [
  { num: '2M+', label: 'Hablantes de quechua en Bolivia' },
  { num: '500',  label: 'Años de historia viva' },
  { num: '#3',   label: 'Idioma oficial de Bolivia' },
  { num: '36',   label: 'Lenguas indígenas reconocidas' },
];

export default function Historia() {
  return (
    <Box
      id="historia"
      sx={{
        py: { xs: 8, md: 13 }, px: { xs: 3, md: '6%' },
        background: '#C45C00',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      {[{ top: -80, right: -80 }, { bottom: -60, left: -60 }].map((pos, i) => (
        <Box key={i} sx={{
          position: 'absolute', width: i === 0 ? 400 : 300, height: i === 0 ? 400 : 300,
          borderRadius: '50%', background: 'rgba(255,255,255,0.06)', ...pos,
          pointerEvents: 'none',
        }} />
      ))}

      <Box sx={{ maxWidth: 1100, mx: 'auto', position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4960A', mb: 1 }}>
              Raíces Ancestrales
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.4rem' }, color: '#FDF6EC', mb: 3, lineHeight: 1.2 }}>
              El Quechua en Bolivia
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,246,236,0.9)', mb: 2 }}>
              El quechua —<em>Runasimi</em>, "lengua de la gente"— es uno de los idiomas más hablados de América del Sur y lengua oficial de Bolivia. Con más de dos millones de hablantes en el país, es puente entre generaciones.
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,246,236,0.9)', mb: 3 }}>
              En Cochabamba, corazón quechua de Bolivia, esta lengua vibra en mercados, festividades y comunidades. Preservarla es un acto de identidad y resistencia cultural.
            </Typography>
            <Paper
              elevation={0}
              sx={{
                background: 'rgba(255,255,255,0.12)',
                borderLeft: '4px solid #D4960A',
                borderRadius: '0 12px 12px 0',
                p: '18px 22px',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.05rem', color: '#FDF6EC' }}>
                "Mana runasimita rimaspaqa, mana allin kawsakunchu." — Sin hablar nuestra lengua, no vivimos plenamente.
              </Typography>
            </Paper>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2.5}>
              {stats.map((s) => (
                <Grid item xs={6} key={s.num}>
                  <Paper
                    elevation={0}
                    sx={{
                      background: 'rgba(255,255,255,0.13)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      borderRadius: 4,
                      p: { xs: 3, md: 4 },
                      textAlign: 'center',
                      backdropFilter: 'blur(6px)',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.04)' },
                    }}
                  >
                    <Typography sx={{ fontFamily: "'Cinzel Decorative', serif", fontSize: { xs: '1.8rem', md: '2.4rem' }, color: '#D4960A', lineHeight: 1, mb: 1 }}>
                      {s.num}
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: '#FDF6EC', opacity: 0.85, lineHeight: 1.4 }}>
                      {s.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
