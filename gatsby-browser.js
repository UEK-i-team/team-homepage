import './src/i18n/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@popperjs/core/dist/umd/popper.min';
import './src/assets/styles/baseStyles.scss';

import React from 'react';

import { Footer } from './src/components/Footer/Footer';
import { Navbar } from './src/components/Navbar/Navbar';
import { ThemeProvider } from './src/context/ThemeContex';
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <Navbar />
    {element}
    <Footer />
  </ThemeProvider>
);
