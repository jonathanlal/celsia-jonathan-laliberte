import { useState } from 'react';
import { useLocalStorage } from 'lib/useLocalStorage';
import { Container, StyledH1 } from 'styles';
import { Search, Grid, List, ViewSwitch, Alert } from 'components';

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/industries');
  const json = await response.json();
  return {
    props: {
      data: json
    }
  };
}

export default function Home({ data }) {
  const [industries, setIndustries] = useState(data);
  const [selectedActivities, setSelectedActivities] = useLocalStorage(
    'selected-activities',
    {}
  );
  const [selectedSectors, setSelectedSectors] = useState(
    Object.keys(selectedActivities)
  );
  const [query, setQuery] = useState('');
  const [view, setView] = useState(false);

  function setSector(sector) {
    if (selectedActivities.hasOwnProperty(sector)) {
      delete selectedActivities[sector];
      setSelectedActivities(selectedActivities);
    } else {
      selectedActivities[sector] = [];
      setSelectedActivities(selectedActivities);
    }
  }
  function selectSector(sector) {
    if (!selectedSectors.includes(sector)) {
      setSelectedSectors([...selectedSectors, sector]);
    } else {
      setSelectedSectors(
        [...selectedSectors].filter((item) => item !== sector)
      );
    }
    setSector(sector);
  }

  return (
    <Container className="theme-container">
      <StyledH1>Select your company industries:</StyledH1>
      <section>
        <Search query={query} setQuery={setQuery} />
        <ViewSwitch view={view} setView={setView} />
      </section>
      {selectedSectors.length > 0 && (
        <Alert url="/activities" title="Click here to select activities" />
      )}
      {!view && (
        <Grid
          industries={industries}
          query={query}
          selectSector={selectSector}
          selectedSectors={selectedSectors}
        />
      )}
      {view && (
        <List
          industries={industries}
          query={query}
          selectSector={selectSector}
          selectedSectors={selectedSectors}
        />
      )}
    </Container>
  );
}
