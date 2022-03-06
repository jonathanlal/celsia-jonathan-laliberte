import { useLocalStorage } from 'lib';
import { StyledH1, StyledH3, Container } from 'styles';
import { NavLink } from 'components';
import styled from 'styled-components';

const StyledUl = styled.ul`
  margin-top: 0;
`;

export default function Profile() {
  const [selectedActivities, setSelectedActivities] = useLocalStorage(
    'selected-activities'
  );

  return (
    <Container className="theme-container">
      <NavLink title="Back" url="/activities" />
      <StyledH1>Your company activities:</StyledH1>
      {selectedActivities &&
        Object.keys(selectedActivities).map((sector) => (
          <>
            {selectedActivities[sector].length > 0 && (
              <StyledH3 key={sector}>{sector}</StyledH3>
            )}
            <StyledUl>
              {selectedActivities[sector].map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </StyledUl>
          </>
        ))}
    </Container>
  );
}
