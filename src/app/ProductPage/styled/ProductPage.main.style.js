import styled from "styled-components";

export const ProductPageContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #2B4760;
    justify-content: center;
    align-items: center;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 470px;
    margin-top: 52px;
    background-color: #D9D9D9;
    border-radius: 15px;
`

export const ProductImg = styled.img`
    width: inherit;
`

export const IconContainer = styled.div`
    width: inherit;
    height: 9%;
    padding: 15px 10px;
    box-sizing: border-box;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 60px;

    @media screen and (min-width:431px){
        width: 430px;
    }

    img {
        width: 50px;
        height: 50px;
    }
`

export const BtnContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    background-color: #FFFFFF;
    padding: 0 0 15px 0;
    bottom: 0;

    @media screen and (min-width:431px){
        width: 430px;
    }
`

export const Btn = styled.div`
    width: 90%;
    background-color: #FF424D;
    border-radius: 13px;
    color: #FFFFFF ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

export const Loading = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`