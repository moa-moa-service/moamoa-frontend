import styled from "styled-components";

export const Title = styled.div`
    color: #2B4760 ;
    font-size: 25px ;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const WriteInfo = styled.div`
    display: flex;
    color: #7D7D7D;
    font-size: 13px;
    width: 100%;
    justify-content: center;
    margin-top: 15px;

    div:nth-child(2) {
        margin: 0 5px;
    }
`

export const MoreIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 90%;
    margin-top: -20px;
`

export const Line = styled.hr`
    margin: 10px 0 15px 0;
    border: 0.2px solid rgb(228, 228, 228);
`

export const Content = styled.div`
    color: #000000;
    font-size: 15px;
    padding: 10px 0;
`

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CommentHeader = styled.div`
    display: flex;
    color: #2B4760;
    font-size: 17px;
    font-weight: 600;

    div {
        margin-left: 7px;
    }
`