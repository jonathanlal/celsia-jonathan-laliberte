import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
`;

export function NavLink({ title, url }) {
  return (
    <StyledLink>
      <Link href={url} passHref>
        <a className="theme-link">{title}</a>
      </Link>
    </StyledLink>
  );
}
