import { Card } from 'components';
import styled from 'styled-components';

const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5vw;
`;
export function Grid({ industries, query, selectSector, selectedSectors }) {
  return (
    <StyledGrid>
      {industries
        .filter((industry) =>
          industry.toLowerCase().includes(query.toLowerCase())
        )
        .map((industry) => (
          <Card
            key={industry}
            title={industry}
            selectSector={selectSector}
            selectedSectors={selectedSectors}
          />
        ))}
    </StyledGrid>
  );
}
