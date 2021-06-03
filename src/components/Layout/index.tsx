import React from 'react';
import LayoutDiv from './styles';
import Tabs from '../Tabs';

// eslint-disable-next-line react/prop-types
const Layout: React.FC = ({ children }) => {
  return (
    <LayoutDiv>
      <Tabs />
      {children}
    </LayoutDiv>
  );
};

export default Layout;
