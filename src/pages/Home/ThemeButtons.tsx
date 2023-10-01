import { createContext, useState } from 'react';
import styled from 'styled-components';

const Section = styled.div``;
const StyledButton = styled.button``;

type ThemebuttonsProps = {
  theme: string;
  onThemeChange: () => void; // Define a function prop
};

const themes = ['Default', 'Dark Mode', 'Light'];

const ThemeButtons: React.FC<ThemebuttonsProps> = ({
  theme,
  onThemeChange,
}) => {
  return (
    <Section>
      {themes.map((theme) => (
        <StyledButton>{theme}</StyledButton>
      ))}
    </Section>
  );
};

export default ThemeButtons;
