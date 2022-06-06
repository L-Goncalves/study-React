import React, { useState } from "react";
import { Container, Search, Logo, Wrapper, Map, CarouselTitle} from "./styles";
import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Restaurant Logo" />
          <TextField label={"Pesquisar Restaurantes"} outlined
          trailingIcon={<MaterialIcon role="button" icon="search"/>}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </TextField>
        <CarouselTitle>Na sua Área</CarouselTitle>
        </Search>

      </Container>
      <Map/>
    </Wrapper>
  );
};

export default Home;
