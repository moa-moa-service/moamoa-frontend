import styled from "styled-components";

export const inputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 5px;
`

export const inputText = styled.input`
    width: 35% ;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #B7B7B7;
    padding-left: 10px;
    box-sizing: border-box;

    &::placeholder {
        color: #B7B7B7 ;
    }

    &:focus {
        outline: none;
    }
`

export const line = styled.div`
    width: 3%;
    height: 1px;
    background-color: #B7B7B7;
`