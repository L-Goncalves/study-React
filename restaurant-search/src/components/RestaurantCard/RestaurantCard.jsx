import React from 'react';
import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress, RestaurantPicture } from './styles'
import ReactStars from "react-rating-stars-component";
const RestaurantCard = ({restaurant, onClick, title, address}) => (
<Restaurant onClick={onClick}>
    <RestaurantInfo>
        <RestaurantTitle>
            {title}
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
            {address}
        </RestaurantAddress>
       
    </RestaurantInfo>
    <RestaurantPicture src={restaurant} alt={'Restaurante'}/>

</Restaurant>)

export default RestaurantCard;