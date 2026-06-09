import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import WiphalaBar from './components/WiphalaBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Historia from './components/Historia';
import Descarga from './components/Descarga';
import Instituciones from './components/Instituciones';
import Redes from './components/Redes';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WiphalaBar />
      <Navbar />
      <Hero />
      <Features />
      <Historia />
      <Descarga />
      <Instituciones />
      <Redes />
      <Footer />
    </ThemeProvider>
  );
}
