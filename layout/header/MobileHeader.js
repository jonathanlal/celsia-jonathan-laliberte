import { Logo, Switch } from 'components';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

export const StyledHeaderMobileWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 20;
  width: 100%;
  top: 0;
  height: 5rem;
  padding: 0 30px;
  box-shadow: var(--bs);

  svg {
    font-size: 2.5rem;
  }
`;

export function MobileHeader() {
  const darkMode = useDarkMode(false);

  return (
    <StyledHeaderMobileWrapper>
      <Logo />
      <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
    </StyledHeaderMobileWrapper>
  );
}
