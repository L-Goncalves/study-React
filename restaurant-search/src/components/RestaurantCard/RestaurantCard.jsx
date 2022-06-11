import React from 'react';
import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress, RestaurantPicture } from './styles'
import ReactStars from "react-rating-stars-component";
const RestaurantCard = ({restaurant, onClick}) => (
<Restaurant onClick={onClick}>
    <RestaurantInfo>
        <RestaurantTitle>
            Nome do Restaurante
        </RestaurantTitle>
        <ReactStars
            count={5}
            value={4}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            />
        <RestaurantAddress>
             Avenida X do bairro y, 120
        </RestaurantAddress>
       
    </RestaurantInfo>
    <RestaurantPicture src={restaurant} alt={'Restaurante'}/>

</Restaurant>)

export default RestaurantCard;