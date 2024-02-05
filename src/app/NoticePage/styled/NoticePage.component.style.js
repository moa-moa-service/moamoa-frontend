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