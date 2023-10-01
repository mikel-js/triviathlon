import { createContext, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { breakpoint, color } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';

const Section = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  background-color: ${color.ORANGE1};
  font-size: 1rem;

  @media (min-width: ${breakpoint.md}) {
    font-size: 1.5rem;
  }
`;

const themes = ['Default', 'Dark Mode', 'Light'];

const ThemeButtons: React.FC = () => {
  const pro = useTheme();
  console.log({ pro });
  return (
    <Section>
      {themes.map((themeStr) => (
        <StyledButton key={themeStr}>{themeStr}</StyledButton>
      ))}
    </Section>
  );
};

export default ThemeButtons;
