import styled from 'styled-components';
import Link from 'next/link';

const StyledAlert = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 25px;
  text-align: center;

  background-color: rgba(217, 237, 247, 1);
  color: rgba(49, 112, 143, 1);
  border-color: rgba(126, 182, 193, 1);
`;

export function Alert({ title, url }) {
  return (
    <StyledAlert>
      <Link href={url}>
        <a>{title}</a>
      </Link>
    </StyledAlert>
  );
}
