import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, Typography, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import WiphalaBar from './WiphalaBar';
import logoHoja from '../image/images.jpg';

const links = [
  { label: 'App',       href: '#features'  },
  { label: 'Historia',  href: '#historia'  },
  { label: 'Descargar', href: '#descarga'  },
  { label: 'Redes',     href: '#redes'     },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <WiphalaBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1201 }} />
      <AppBar
        position="fixed"
        sx={{
          top: 6,
          background: '#C45C00',
          boxShadow: '0 3px 18px rgba(100,40,0,0.18)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: '5%' } }}>
          {/* Logo */}
          <Box
            component="a"
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={logoHoja}
                alt="Logo Quechua"
                sx={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '0.82rem', color: '#FDF6EC', lineHeight: 1.2 }}>
                Diccionario
              </Typography>
              <Typography sx={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '0.82rem', color: '#D4960A', lineHeight: 1.2 }}>
                Quechua
              </Typography>
            </Box>
          </Box>

          {/* Desktop links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {links.map((l) => (
                <Button
                  key={l.label}
                  onClick={() => handleNav(l.href)}
                  sx={{ color: '#FDF6EC', fontWeight: 600, fontSize: '0.88rem', '&:hover': { color: '#D4960A' } }}
                >
                  {l.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton onClick={() => setOpen(true)} sx={{ color: '#FDF6EC' }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 220, pt: 2, background: '#C45C00', height: '100%' }}>
          <List>
            {links.map((l) => (
              <ListItem key={l.label} disablePadding>
                <ListItemButton onClick={() => handleNav(l.href)}>
                  <ListItemText
                    primary={l.label}
                    sx={{ '& .MuiTypography-root': { color: '#FDF6EC', fontWeight: 700 } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Offset for fixed bar (6px wiphala + 64px appbar) */}
      <Box sx={{ height: 70 }} />
    </>
  );
}
