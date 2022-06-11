import styled from 'styled-components';


export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #fff;
    border-left: 5px solid transparent;
    :hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
    `;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;

`