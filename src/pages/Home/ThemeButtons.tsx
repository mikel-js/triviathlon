import { createContext, useState } from 'react';
import styled from 'styled-components';
import { color } from '../../constants';

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
`;

type ThemebuttonsProps = {
  onThemeChange: (value: string) => void; // Define a function prop
};

const themes = ['Default', 'Dark Mode', 'Light'];

const ThemeButtons: React.FC<ThemebuttonsProps> = ({ onThemeChange }) => {
  return (
    <Section>
      {themes.map((theme) => (
        <StyledButton>{theme}</StyledButton>
      ))}
    </Section>
  );
};

export default ThemeButtons;
