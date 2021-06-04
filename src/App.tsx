import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { MyThemeProvider } from './hooks/themeContext';

import Routes from './routes';

const App: React.FC = () => (
  <MyThemeProvider>
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  </MyThemeProvider>
);

export default App;
