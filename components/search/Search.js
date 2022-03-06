import styled from 'styled-components';

export const StyledSearch = styled.div`
  max-width: 500px;

  input {
    padding: 12px;
    font-size: 17px;
    width: 100%;
    background: #f1f1f1;
    outline: none;
    border-radius: 3px;
  }
`;

export function Search({ setQuery, query }) {
  return (
    <StyledSearch>
      <input
        type="search"
        placeholder="Search.."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="theme-input"
      />
    </StyledSearch>
  );
}
