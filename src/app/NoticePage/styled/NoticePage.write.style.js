import styled from "styled-components";

export const NoticeWriteContainer = styled.div`
    height: 100vh;

    background-color: #2B4760;
    position: relative;
`

export const NoticeHeader = styled.div`
    padding: 50px 20px 0 20px;
    height: 50px;
    display: flex;
    
    div {
        color: #FFFFFF ;
        font-size: 18px;
        font-weight: 600;
        margin-right: 50px;
        width: 100%;
        display: flex ;
        justify-content: center;
        align-items: center;
    }
`

export const WriteContainer = styled.div`
    width: 100%;
    /* height: 70%; */
    position: absolute;
    top: 130px;
    background-color: #FFFFFF;
    position: absolute;
    bottom: 0;
    border-top-left-radius : 15px;
    border-top-right-radius: 15px;
    padding: 10px 25px 90px 25px;
    box-sizing: border-box;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

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