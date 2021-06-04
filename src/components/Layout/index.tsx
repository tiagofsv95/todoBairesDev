import React from 'react';
import LayoutDiv from './styles';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutDiv>
      <Header />
      {children}
    </LayoutDiv>
  );
};

export default Layout;
