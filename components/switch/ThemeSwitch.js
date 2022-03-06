import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledThemeSwitch = styled.div`
  * {
    -webkit-tap-highlight-color: transparent;
  }

  label {
    display: flex;
    width: 80px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    background: rgba(33, 149, 241, 0.45);
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
  }

  label .fa-sun {
    color: gold;
    transition: 0.8s;
    font-size: 1.7rem;
  }

  label .fa-moon {
    color: #fff;
    transition: 0.8s;
    font-size: 1.5rem;
  }

  label .ball {
    display: none;
  }

  input:checked + label .fa-sun {
    transform: translateX(-43px);
  }

  input:checked + label .fa-moon {
    transform: translateX(43px);
  }

  label .fa-sun {
    opacity: 1;
  }

  input:checked + label .fa-sun {
    opacity: 0;
  }

  label .fa-moon {
    opacity: 0;
  }

  input:checked + label .fa-moon {
    opacity: 1;
  }

  label .ball {
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    top: 5px;
    left: 5px;
    background: #fff;
    border-radius: 50%;
    transition: 0.8s;
  }

  input:checked + label .ball {
    transform: translateX(40px);
  }

  label .fa-moon {
    transform: translateX(43px);
  }

  input:checked + label .fa-moon {
    transform: translateX(0);
  }

  input:checked + label {
    background: #141414;
  }

  input:checked + label .ball {
    background: #222;
  }

  input {
    display: none;
  }
`;

export function ThemeSwitch({ onChange, checked }) {
  return (
    <StyledThemeSwitch>
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="switch">
        <FontAwesomeIcon className="fa-moon" icon={['fa', 'moon']} />
        <FontAwesomeIcon className="fa-sun" icon={['fa', 'sun']} />
        <span className="ball" />
      </label>
    </StyledThemeSwitch>
  );
}
