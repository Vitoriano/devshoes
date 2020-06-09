import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStayle  from './styles/global';
import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
      <GlobalStayle />
    </BrowserRouter>
  );
}

export default App;
