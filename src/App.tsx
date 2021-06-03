import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import GlobalStyle from './styles/global';

// import AppProvider from './hooks/index';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
