import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const InnerCenterStyles = styled.main`
  margin: 6rem 0;
  padding-right: 1em;
  padding-left: 1em;

  ${mediaQuery.lg`
    margin: 8rem 3rem;
    max-width: var(--max-width);
  `}
`;

export function Page({ children }) {
  return <InnerCenterStyles>{children}</InnerCenterStyles>;
}
