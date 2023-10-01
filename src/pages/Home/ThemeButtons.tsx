import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../constants';
import { Theme, useTheme } from '../../contexts/ThemeContext';

const Section = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  border: none;
  background-color: ${color.ORANGE1};
  font-size: 1rem;

  @media (min-width: ${breakpoint.md}) {
    font-size: 1.5rem;
  }

  ${({ isActive }) => isActive && 'text-decoration: underline'}
`;

const themes: Theme[] = ['Default', 'Dark Mode', 'Fresh'];

const ThemeButtons: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onButtonClick = (val: Theme) => setTheme(val);
  return (
    <Section>
      {themes.map((themeStr) => (
        <StyledButton
          onClick={() => onButtonClick(themeStr)}
          isActive={theme === themeStr}
          key={themeStr}
        >
          {themeStr}
        </StyledButton>
      ))}
    </Section>
  );
};

export default ThemeButtons;
