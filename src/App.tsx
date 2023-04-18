import React from 'react';
import './App.scss';
import { Body } from './components/Body';

export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo'></div>
      </header>
      <Body />
    </div>
  );
};
