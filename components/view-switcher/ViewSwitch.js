import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewToggle = styled.button`
  margin-left: 10px;
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
`;

export function ViewSwitch({ view, setView }) {
  return (
    <ViewToggle onClick={() => setView(!view)} className="theme-input">
      {view && <FontAwesomeIcon icon={['fa', 'bars']} />}
      {!view && <FontAwesomeIcon icon={['fa', 'grip-horizontal']} />}
    </ViewToggle>
  );
}
