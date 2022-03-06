import Image from 'next/image';
import styled from 'styled-components';
import { shimmerEffect } from 'lib';

export const StyledCard = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3em;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  span {
    width: 100% !important;
    height: 150px !important;
    position: relative !important;
  }
  img {
    object-fit: cover;
  }
  section {
    margin: 0.2em 0.5em;
  }
  section div {
    font-size: 1.2em;
    font-weight: normal;
    margin: 0;
    line-height: 30px;
    padding: 10px;
  }
`;

export function Card({ title, selectSector, selectedSectors }) {
  return (
    <StyledCard
      className={
        selectedSectors.includes(title)
          ? 'theme-card active-card'
          : 'theme-card'
      }
      onClick={() => selectSector(title)}
    >
      <Image
        src={`/industries/${title}.jpg`}
        alt={title}
        layout="fill"
        placeholder="blur"
        blurDataURL={`${shimmerEffect()}`}
      />
      <section>
        <div>{title}</div>
      </section>
    </StyledCard>
  );
}
