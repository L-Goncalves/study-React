import React, { useState } from "react";
import { Container, SearchInput, RestaurantLogo, Wrapper, GoogleMap, CarouselTitle} from "./styles";
import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Slider from 'react-slick'
const Home = () => {
  const [searchValue, setSearchValue] = useState("");



  const Carouselsettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  return (
    <Wrapper>
      <Container>
        <SearchInput>
          <RestaurantLogo src={logo} alt="Restaurant Logo" />
          <TextField label={"Pesquisar Restaurantes"} outlined
          trailingIcon={<MaterialIcon role="button" icon="search"/>}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </TextField>
        <CarouselTitle>Na sua Área</CarouselTitle>
        <Slider {...Carouselsettings}>
          <div>
            <img src="#"/>
          </div>
          <div>
            <img src="#"/>
          </div>
          <div>
            <img src="#"/>
          </div>
        </Slider>
        </SearchInput>

      </Container>
      <GoogleMap/>
    </Wrapper>
  );
};

export default Home;
