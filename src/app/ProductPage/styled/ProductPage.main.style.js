import styled from "styled-components";

export const ProductPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2B4760;
    position: relative;
    justify-content: center;
    align-items: center;
`

export const ImgContainer = styled.div`
    /* width: 100%; */
    width: 430px;
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
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 15px;
    left: 5%;
    background-color: #FFFFFF;
`

export const Btn = styled.div`
    width: 48%;
    background-color: #FF424D;
    border-radius: 13px;
    color: #FFFFFF ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`