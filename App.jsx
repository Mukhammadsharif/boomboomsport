import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './main/Navigation';
import {GlobalProvider} from './main/components/GlobalContext';

export default function App() {
  return (
      <GlobalProvider>
        <StatusBar />
        <Navigation />
      </GlobalProvider>
  );
}
