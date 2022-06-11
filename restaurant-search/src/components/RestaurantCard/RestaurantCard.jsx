import React from 'react';
import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress } from './styles'
import ReactStars from "react-rating-stars-component";
const RestaurantCard = () => (
<Restaurant>
    <RestaurantInfo>
        <RestaurantTitle>
            Nome do Restaurante
        </RestaurantTitle>
        <ReactStars
            count={5}
            // onChange={ratingChanged}
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


</Restaurant>)

export default RestaurantCard;