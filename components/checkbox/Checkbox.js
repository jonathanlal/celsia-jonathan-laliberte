import styled from 'styled-components';
import { useState } from 'react';

const StyledCheckBoxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: white;
    border: 1px solid #cacaca;
  }
  input:checked ~ .checkmark {
    background-color: #00d1ff;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    margin-top: -2px;
    margin-left: -1px;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export function Checkbox({
  setActivity,
  activity,
  sector,
  selectedActivities
}) {
  const [checked, setChecked] = useState(
    selectedActivities[sector].includes(activity)
  );

  function toggleChecked() {
    setChecked(!checked);
    setActivity(activity, sector);
  }

  return (
    <StyledCheckBoxContainer>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleChecked()}
      />
      <span className="checkmark" />
    </StyledCheckBoxContainer>
  );
}
