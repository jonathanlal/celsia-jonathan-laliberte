import Image from 'next/image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  .card-image {
    object-fit: cover;
    max-width: 100px;
  }
`;

export function CardImage({ ...props }) {
  return <StyledImage {...props} layout="fill" className="card-image" />;
}
