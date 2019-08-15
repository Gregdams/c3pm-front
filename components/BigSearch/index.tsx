import { FormEvent } from 'react';
import styled from 'styled-components';

const BigInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #ccc;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);
`;

interface Props {
  onSearch: (s: string) => void;
}

const BigSearch = ({ onSearch }: Props): JSX.Element => {
  const handleInput = (e: FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    onSearch(value);
  };

  return (
    <BigInput
      id="search"
      type="search"
      onInput={handleInput}
      placeholder="Search anything..."
      className="pl1"
    />
  );
};

export default BigSearch;
