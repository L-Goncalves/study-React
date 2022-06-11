import React, { useState } from "react";
import {
  Container,
  SearchInput,
  RestaurantLogo,
  Wrapper,
  GoogleMap,
  CarouselTitle,
  Carousel
} from "./styles";
import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import restaurantImage from "../../assets/restaurante-fake.png";
import Slider from "react-slick";
import {Card, RestaurantCard, Modal, Map} from '../../components'
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [modalOpened, setModalOpen] = useState(false);
  return (
    <Wrapper>
      <Container>
        <SearchInput>
          <RestaurantLogo src={logo} alt="Restaurant Logo" />
          <TextField
            label={"Pesquisar Restaurantes"}
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          {SimpleSlider()}
        </SearchInput>
        <RestaurantCard title={'Restaurante da esquina'} address={'Avenida Paulista, 2332 em São Paulo'} onClick={ () => setModalOpen(true)} restaurant={restaurantImage}/>
      </Container>
      {/* <button onClick={ () => setModalOpen(true)}>Open Modal</button> */}
      <Map />
    
      <Modal open={modalOpened} onClose={() => setModalOpen(!modalOpened)}>
        </Modal>
    </Wrapper>
  );
};

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Carousel {...settings}>
        <Card title={'Nome sei la'} photo={restaurantImage}/>
          <Card photo={restaurantImage}/>
          <Card photo={restaurantImage}/>
          <Card photo={restaurantImage}/>
          <Card photo={restaurantImage}/>
          <Card photo={restaurantImage}/>
          <Card photo={restaurantImage}/>
   
    </Carousel>
  );
}
export default Home;
