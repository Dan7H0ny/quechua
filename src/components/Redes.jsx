import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  Grid,
} from '@mui/material';

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

const redes = [
  {
    icon: <FaFacebook size={40} />,
    label: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    icon: <FaInstagram size={40} />,
    label: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    icon: <FaTiktok size={40} />,
    label: 'TikTok',
    href: 'https://tiktok.com',
  },
  {
    icon: <FaYoutube size={40} />,
    label: 'YouTube',
    href: 'https://youtube.com',
  },
  {
    icon: <FaXTwitter size={40} />,
    label: 'X',
    href: 'https://x.com',
  },
  {
    icon: <FaWhatsapp size={40} />,
    label: 'WhatsApp',
    href: 'https://whatsapp.com',
  },
];

export default function Redes() {
  return (
    <Box
      id="redes"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: '6%' },
        background: '#6B3A1F',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#F4A453',
          mb: 1,
        }}
      >
        Síguenos
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.5rem', md: '2.2rem' },
          color: '#FDF6EC',
          mb: 6,
          lineHeight: 1.2,
        }}
      >
        Únete a la comunidad
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          maxWidth: 700,
          mx: 'auto',
          mb: 6,
        }}
      >
        {redes.map((r) => (
          <Grid item xs={6} sm={4} md={2} key={r.label}>
            <Card
              elevation={0}
              sx={{
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: '#C45C00',
                  borderColor: '#C45C00',
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <CardActionArea
                component="a"
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  minHeight: 120,
                }}
              >
                <Box
                  sx={{
                    color: '#FDF6EC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {r.icon}
                </Box>

                <Typography
                  sx={{
                    color: '#FDF6EC',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}
                >
                  {r.label}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          color: 'rgba(255,246,236,0.7)',
          fontSize: '0.95rem',
          maxWidth: 550,
          mx: 'auto',
          lineHeight: 1.7,
        }}
      >
        Comparte el quechua con el mundo. Cada palabra compartida es un paso
        hacia la preservación de nuestra lengua ancestral.
      </Typography>
    </Box>
  );
}