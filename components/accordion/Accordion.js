import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Checkbox } from 'components';

const StyledAccordion = styled.div`
  .show {
    display: block;
  }
`;

const StyledAccordionButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  margin-bottom: 5px;
`;
const StyledAccordionPanel = styled.div`
  padding: 0 18px;
  display: none;
  overflow: hidden;
  margin-top: -5px;
  margin-bottom: 5px;

  div p:first-child {
    margin-top: 0 !important;
  }
  div p {
    margin: 10px 0;
  }
`;

const CheckboxTitleWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  label {
    margin-top: -10px;
  }
  div {
    margin-bottom: -5px;
  }
`;

export function Accordion({
  title,
  description,
  setActivity,
  sector,
  selectedActivities,
  setSomethingChecked
}) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const objectIsEmpty = (obj) =>
      Object.values(obj).every((val) => Array.isArray(val) && val.length === 0);
    setSomethingChecked(!objectIsEmpty(selectedActivities));
  }, [selected]);

  return (
    <StyledAccordion>
      <StyledAccordionButton
        onClick={() => setSelected(!selected)}
        className={
          selected
            ? 'theme-accordion-button-active theme-accordion-button'
            : 'theme-accordion-button'
        }
      >
        <CheckboxTitleWrapper>
          <Checkbox
            setActivity={setActivity}
            activity={title}
            sector={sector}
            selectedActivities={selectedActivities}
          />
          <div>{title}</div>
        </CheckboxTitleWrapper>
      </StyledAccordionButton>
      <StyledAccordionPanel
        className={
          selected ? 'show theme-accordion-panel' : 'theme-accordion-panel'
        }
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </StyledAccordionPanel>
    </StyledAccordion>
  );
}
