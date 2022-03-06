import styled from 'styled-components';
import { ListItem } from 'components';

const StyledList = styled.main`
  border-radius: 0 0 12px 12px;
  display: grid;
  row-gap: 8px;
`;

export function List({ industries, query, selectSector, selectedSectors }) {
  return (
    <StyledList>
      {industries
        .filter((industry) =>
          industry.toLowerCase().includes(query.toLowerCase())
        )
        .map((industry) => (
          <ListItem
            key={industry}
            title={industry}
            selectSector={selectSector}
            selectedSectors={selectedSectors}
          />
        ))}
    </StyledList>
  );
}
