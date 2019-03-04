import React from 'react';
import GaleryContainer from './containers/GaleryContainer';
import ControlsContainer from './containers/ControlsContainer';
import './App.css';

const App = props => {
  return (<main>
    <ControlsContainer />
    <GaleryContainer />
  </main>)
}

export default App;