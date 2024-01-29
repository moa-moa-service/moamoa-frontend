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
    /* margin: 67px 25px 25px 25px; */
    margin-top: 52px;
    background-color: #D9D9D9;
    border-radius: 15px;
`

export const IconContainer = styled.div`
    height: 50px;
    margin: 15px 20px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
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
    width: 40%;
    background-color: #2B4760;
    border-radius: 13px;
    color: #FFFFFF ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`