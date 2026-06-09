import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import QrCode2Icon from '@mui/icons-material/QrCode2';

export default function Descarga() {
  return (
    <Box
      id="descarga"
      sx={{ py: { xs: 8, md: 13 }, px: { xs: 3, md: '6%' }, background: '#FDF6EC' }}
    >
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Grid container spacing={6} alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={7}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E87020', mb: 1 }}>
              Descarga Gratuita
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.4rem' }, color: '#C45C00', mb: 2, lineHeight: 1.2 }}>
              Lleva el quechua<br />en tu bolsillo
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.75, color: '#7a5a3a', mb: 4 }}>
              Disponible para Android. Descarga la app del Diccionario Quechua desarrollada porlos estudaintes de la ESFM Simón Rodríguez (Cercado), Bolivia. Estudiantes: Antony Mamani y Cristhian Guardia. Descarga la aplicación ¡Totalmente gratis!
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<AndroidIcon />}
                href="#"
                sx={{
                  background: '#6B3A1F', color: '#FDF6EC', borderRadius: '12px',
                  px: 3, py: 1.5,
                  '&:hover': { background: '#C45C00', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s',
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '0.65rem', opacity: 0.7, lineHeight: 1 }}>Disponible en</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3 }}>Google Play</Typography>
                </Box>
              </Button>
              <Button
                variant="block"
                startIcon={<AppleIcon />}
                href="#"
                sx={{
                  background: '#6B3A1F', color: '#FDF6EC', borderRadius: '12px',
                  px: 3, py: 1.5,
                  '&:hover': { background: '#C45C00', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s',
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '0.65rem', opacity: 0.7, lineHeight: 1 }}>Proximamente en</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3 }}>App Store</Typography>
                </Box>
              </Button>
            </Box>
          </Grid>

          {/* QR box */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 6,
                p: 4,
                textAlign: 'center',
                border: '3px solid #F4A453',
                boxShadow: '0 8px 40px rgba(100,40,0,0.14)',
                maxWidth: 240,
              }}
            >
              <Box sx={{
                width: 180, height: 180, mx: 'auto', mb: 2,
                border: '3px solid #C45C00', borderRadius: 3,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: '#F8F1E7',
              }}>
                <QrCode2Icon sx={{ fontSize: '4rem', color: '#C45C00', opacity: 0.5 }} />
                <Typography sx={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.2rem', color: '#C45C00', mt: 1 }}>
                  QR
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.82rem', color: '#C45C00', fontWeight: 700, letterSpacing: '0.06em' }}>
                Escanea para descargar
              </Typography>
              <Typography sx={{ fontSize: '0.72rem', color: '#aaa', mt: 0.5 }}>
                Android &amp; iOS
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
