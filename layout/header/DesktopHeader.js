import styled from 'styled-components';
import { Logo, ThemeSwitch } from 'components';
import useDarkMode from 'use-dark-mode';

export const StyledHeaderWrapper = styled.header`
  user-select: none;
  height: 5rem;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  box-shadow: var(--bs);
`;

export function DesktopHeader() {
  const darkMode = useDarkMode(false);
  return (
    <StyledHeaderWrapper>
      <Logo />
      <ThemeSwitch
        checked={darkMode.value}
        onChange={() => darkMode.toggle()}
      />
    </StyledHeaderWrapper>
  );
}
