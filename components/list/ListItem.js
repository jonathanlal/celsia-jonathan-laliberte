import Image from 'next/image';
import styled from 'styled-components';

const StyledListItem = styled.article`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &&:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  span {
    width: 85px !important;
    height: 85px !important;
    position: relative !important;
    margin-right: 12px !important;
  }
  img {
    object-fit: cover;
    border-radius: 50%;
  }
  p {
    font-weight: 600;
    //margin-left: 12px;
    line-height: 22px;
  }
`;

export function ListItem({ title, selectSector, selectedSectors }) {
  return (
    <StyledListItem
      key={title}
      className={
        selectedSectors.includes(title)
          ? 'theme-list active-card'
          : 'theme-list'
      }
      onClick={() => selectSector(title)}
    >
      <Image src={`/industries/${title}.jpg`} alt={title} layout="fill" />
      <p>{title}</p>
    </StyledListItem>
  );
}
