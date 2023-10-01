import { createContext, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { breakpoint, color } from '../../constants';

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

type ThemebuttonsProps = {
  onThemeChange: (value: string) => void; // Define a function prop
};

const themes = ['Default', 'Dark Mode', 'Light'];

const ThemeButtons: React.FC<ThemebuttonsProps> = ({ onThemeChange }) => {
  const theme = useContext(ThemeContext);
  return (
    <Section>
      {themes.map((themeStr) => (
        <StyledButton>{themeStr}</StyledButton>
      ))}
    </Section>
  );
};

export default ThemeButtons;
