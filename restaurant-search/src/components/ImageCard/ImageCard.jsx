import React from "react"
import styled from 'styled-components'

export const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 5px;
    padding: 5px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`

export const Title = styled.p`
    font-family: ${(props) => props.theme};
    color: #fff;
    font-size: 1rem;
`
const ImageCard = ({photo, title}) => (
<Card photo={photo}>
    <Title>{title}</Title>
</Card>)

export default ImageCard;

