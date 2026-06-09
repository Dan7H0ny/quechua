import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const features = [
  { icon: '📖', title: 'Diccionario Completo',   desc: 'Miles de palabras quechuas con traducción al español, pronunciación y ejemplos de uso en contexto cultural.' },
  { icon: '🎙️', title: 'Audio Nativo',           desc: 'Escucha la pronunciación auténtica de cada palabra grabada por hablantes nativos de Bolivia.' },
  { icon: '📚', title: 'Frases Cotidianas',       desc: 'Aprende expresiones del día a día: saludos, números, familia, naturaleza y mucho más.' },
  { icon: '🔍', title: 'Búsqueda Inteligente',    desc: 'Encuentra palabras aunque no sepas cómo se escriben, con sugerencias en tiempo real.' },
  { icon: '🏆', title: 'Modo Quiz',               desc: 'Pon a prueba tus conocimientos con juegos de vocabulario y sigue tu progreso.' },
  { icon: '🌐', title: 'Sin Internet',            desc: 'Accede al diccionario completo sin conexión. Aprende quechua en cualquier lugar de Bolivia.' },
];

export default function Features() {
  return (
    <Box
      id="features"
      sx={{ py: { xs: 8, md: 13 }, px: { xs: 3, md: '6%' }, background: '#F8F1E7' }}
    >
      <Typography sx={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E87020', mb: 1 }}>
        ¿Qué incluye?
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.4rem' }, textAlign: 'center', color: '#C45C00', mb: 7, lineHeight: 1.2 }}>
        Una app pensada<br />para tu aprendizaje
      </Typography>

      <Grid container spacing={3.5} justifyContent="center" sx={{ maxWidth: 1100, mx: 'auto' }}>
        {features.map((f) => (
          <Grid item xs={12} sm={6} md={4} key={f.title}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                borderBottom: '4px solid #C45C00',
                transition: 'transform 0.25s, box-shadow 0.25s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 16px 44px rgba(100,40,0,0.18)' },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography sx={{ fontSize: '2.8rem', mb: 2 }}>{f.icon}</Typography>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', color: '#C45C00', mb: 1.5 }}>
                  {f.title}
                </Typography>
                <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#7a5a3a' }}>
                  {f.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
