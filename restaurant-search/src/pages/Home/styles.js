import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;   
`


export const Container =  styled.aside`
     background-color: ${(props) => props.theme.colors.background};
     width: 360px;
     height: 100vh;
     overflow-y: auto;
    `;


export const Search = styled.section`
    display:flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    padding: 1rem;
`

export const Logo = styled.img`
    margin-bottom: 15px;
`

export const Map = styled.div`
    background-color: red;
    width: 500px;
`

export const CarouselTitle = styled.h1`
    font-family: ${(props) => (props.theme.fonts.fontFamily)};
    color: ${(props) => (props.theme.text)};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
`