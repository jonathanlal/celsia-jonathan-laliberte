import Link from 'next/link';
import { CelsiaSVG } from 'components';
import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  a svg {
    margin-bottom: -8px;
  }
`;

export function Logo() {
  return (
    <StyledLogo>
      <Link href="/" passHref>
        <a className="theme-link">
          <CelsiaSVG />
        </a>
      </Link>
    </StyledLogo>
  );
}
