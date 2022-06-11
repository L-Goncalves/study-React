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


export const RestaurantTitle = styled.span`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const RestaurantAddress = styled.span`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 17px;
    line-height: 19px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const RestaurantPicture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px
`