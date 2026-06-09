import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '96vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 3, md: '6%' },
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at 70% 30%, rgba(228,112,32,0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(212,150,10,0.13) 0%, transparent 55%),
          #FDF6EC
        `,
      }}
    >
      {/* Background pattern */}
      <Box sx={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C45C00'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3C%2Fg%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      {/* Glow */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(228,112,32,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
        {/* Badge */}
        <Chip
          label="⬦  Escuela Superior de Formación de Maestros"
          sx={{
            mb: 3, background: '#C45C00', color: '#FDF6EC',
            fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em',
            height: 32, boxShadow: '0 4px 16px rgba(100,40,0,0.25)',
          }}
        />

        {/* Logo icon */}
        <Box sx={{ fontSize: '5rem', mb: 2, lineHeight: 1, filter: 'drop-shadow(0 8px 24px rgba(196,92,0,0.3))' }}>
          🌿
        </Box>

        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', md: '4rem' },
            lineHeight: 1.1, color: '#C45C00',
            textShadow: '2px 4px 0 rgba(212,150,10,0.2)',
            mb: 1,
          }}
        >
          Diccionario
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', md: '4rem' },
            lineHeight: 1.1, color: '#D4960A',
            textShadow: '2px 4px 0 rgba(212,150,10,0.2)',
            mb: 2,
          }}
        >
          Quechua
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1rem', md: '1.3rem' },
            color: '#6B3A1F', lineHeight: 1.7,
            maxWidth: 560, mx: 'auto', mb: 5,
          }}
        >
          Preservando la lengua ancestral de los Andes. Aprende, explora y conecta con el quechua de Bolivia.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={() => scrollTo('#descarga')}
            sx={{
              background: '#C45C00', color: '#FDF6EC',
              boxShadow: '0 6px 20px rgba(196,92,0,0.4)',
              '&:hover': { background: '#E87020', transform: 'translateY(-3px)', boxShadow: '0 10px 30px rgba(196,92,0,0.4)' },
              transition: 'all 0.2s',
            }}
          >
            Descargar App
          </Button>
          <Button
            variant="outlined"
            startIcon={<InfoOutlinedIcon />}
            onClick={() => scrollTo('#historia')}
            sx={{
              color: '#C45C00', borderColor: '#C45C00', borderWidth: 2.5,
              '&:hover': { background: '#C45C00', color: '#FDF6EC', transform: 'translateY(-3px)' },
              transition: 'all 0.2s',
            }}
          >
            Conocer más
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
