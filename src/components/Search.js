import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #202225;
  padding: 15px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
  color: white;

  ::placeholder {
    color: white;
  }
`;

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (event) => {
    console.log(search);

    // clean up string
    // and then redirect to route /:searchString

    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        aria-label="Search"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
};

export default Search;
