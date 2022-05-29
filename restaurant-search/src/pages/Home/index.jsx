import React, { useState } from "react";
import { Container, Search } from "./styles";
import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Container>
        <Search>
          <img src={logo} alt="Restaurant Logo" />
        </Search>
        <TextField label={"Pesquisar"} outlined>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </TextField>
      </Container>
    </>
  );
};

export default Home;
