import React from 'react';
import { Nav } from './Nav';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h2 className='logo'>Logo</h2>
      <Nav />
    </header>
  );
};
