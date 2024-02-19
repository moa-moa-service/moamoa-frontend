import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
    height: 60px;
    margin-top: 20px;
`

export const UserImg = styled.img`
    width: 42px;
    height: 42px;
    background-color: #2B4760;
    border-radius: 50%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    margin-top: 2px;
    margin-left: 13px;
`

export const WriteInfo = styled.div`
    display: flex;
    align-items: center;
`

export const UserName = styled.div`
    color: #2B4760;
    font-weight: 600;
    font-size: 15px;
`

export const Date = styled.div`
    color: #929191;
    font-size: 11px;
    margin-left: 8px;
`

export const Comment = styled.div`
    color: #000000;
    font-size: 16px;
    margin-top: 5px;
`

export const ReplyBtn = styled.div`
    color: #929191;
    width: 29px;
    height: 15px;
    border: 0.5px solid #B9B9B9;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`