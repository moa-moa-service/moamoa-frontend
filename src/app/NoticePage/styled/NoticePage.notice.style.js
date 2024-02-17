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
    position: relative;
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

export const NoticeImgContainer = styled.div`
    width: 100%;
    display: flex;

    img {
        width: 100%;
    }
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

export const WriteCommentContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    background-color: #FFFFFF ;
    border-top-left-radius : 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 0px 10px gray;
    width: 100%;
    padding: 10px 0px 20px 13px;
    box-sizing: border-box;
`

export const UserImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #D9D9D9;
`

export const CommentInput = styled.input`
    width: 80%;
    height: 45px;
    margin-left: 10px;
    border-radius: 10px;
    border: 1px solid #2B4760;
    padding-left: 10px;

    &::placeholder {
        color: #B3B3B3;
        font-weight: 600;
    }
`

export const DoneBtn = styled.div`
    width: 70px;
    height: 38px;
    background-color: #2B4760;
    color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 25px;
`

export const ModalContainer = styled.div`
    width: 120px;
    height: 75px;
    border: 1px solid #E8E8E8;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #FFFFFF;
    right: 10%;
`

export const ModalContent = styled.div`
    ${(props) => 
        props.color === "red" 
        ? `
            color: #FF4242 ;
        ` : `
            color: #7D7D7D ;
        `
    }

    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 15px ;
    box-sizing: border-box;

    &:first-child {
        border-bottom: 1px solid #E8E8E8;
    }
`