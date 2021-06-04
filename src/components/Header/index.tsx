import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { HeaderDiv, HeaderButton } from './styles';
import Tabs from '../Tabs';
import { useTheme } from '../../hooks/themeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderDiv>
      <Tabs />
      <HeaderButton onClick={toggleTheme}>
        {theme.title === 'light' ? (
          <FiMoon color="#000" size={30} />
        ) : (
          <FiSun color="#fff" size={30} />
        )}
      </HeaderButton>
    </HeaderDiv>
  );
};

export default Header;
