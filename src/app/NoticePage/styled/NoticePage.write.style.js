import styled from "styled-components";

export const Title = styled.div`
    color: #2B4760;
    font-size: 14px;
    display: flex;
    font-weight: 600;
    margin: 25px 0 10px 0;
`

export const TitleInput = styled.input`
    width: 95%;
    height: 30px;
    border: 1.5px solid #2B4760;
    border-radius: 10px;

    &::placeholder {
        color: #B9B9B9 ;
        padding: 5px;
    }
`

export const EssentialIcon = styled.div`
    color: #FF424D;
    margin-left: 3px;
`

export const ImgInput = styled.div`
    width: 150px;
    height: 150px;
    border: 1.5px solid #2B4760;
    border-radius: 15px;
`

export const ContentInput = styled.input`
    width: 95%;
    height: 300px;
    border: 1.5px solid #2B4760;
    border-radius: 10px;

    &::placeholder {
        color: #B9B9B9 ;
        padding: 5px;
    }

`

export const BtnContainer = styled.div`
    width: inherit;
    height: 80px;
    background-color: #FFFFFF;
    z-index: 90;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: center;
`

export const Btn = styled.div`
    width: 95%;
    height: 55px;
    background-color: #C4C4C4;
    color: #888888;
    z-index: 999;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`