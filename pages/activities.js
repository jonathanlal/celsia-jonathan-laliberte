import { useEffect, useState } from 'react';
import { useLocalStorage } from 'lib';
import { Accordion, Alert, NavLink } from 'components';
import { StyledH1, StyledH3, Container } from 'styles';

export default function Activities() {
  const [data, setData] = useState('');
  const [selectedActivities, setSelectedActivities] = useLocalStorage(
    'selected-activities'
  );
  const [somethingChecked, setSomethingChecked] = useState(false);

  useEffect(async () => {
    const response = await fetch('/api/activities', {
      method: 'POST',
      body: JSON.stringify(Object.keys(selectedActivities))
    });
    const data = await response.json();
    setData(data);
  }, [setData]);

  function setActivity(activity, sector) {
    if (!selectedActivities[sector].includes(activity)) {
      selectedActivities[sector].push(activity);
    } else {
      selectedActivities[sector] = selectedActivities[sector].filter(
        (item) => item !== activity
      );
    }
    setSelectedActivities(selectedActivities);
  }

  return (
    <Container className="theme-container">
      <NavLink title="Back" url="/" />
      <StyledH1>Select your company activities:</StyledH1>
      {somethingChecked && <Alert url="/profile" title="Go to summary" />}
      {data &&
        Object.keys(data).map((sector) => (
          <>
            <StyledH3 key={sector}>{sector}</StyledH3>
            {data[sector].map((activity) => (
              <Accordion
                key={activity.name}
                title={activity.name}
                description={activity.description}
                setActivity={setActivity}
                sector={sector}
                selectedActivities={selectedActivities}
                setSomethingChecked={setSomethingChecked}
              />
            ))}
          </>
        ))}
      {!data && <p>loading...</p>}
    </Container>
  );
}
