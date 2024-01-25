import styled from "styled-components";

export const SearchPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #2B4760;
    width: 430px;
    height: 930px;
`

export const SearchContainer = styled.div`
    background-color: #FFFFFF;
    width: 400px;
    height: 65px;
    border-radius: 15px;
    margin: 60px auto 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 15px;
    box-sizing: border-box;
`

export const SearchBox = styled.input`
    background-color: inherit;
    width: 70%;
    height: 50px;
    border: none;
    font-size: 20px;
    outline: none;
`

export const KeywordContainer = styled.div`
    width: 430px;
    height: 770px;
    background-color: #FFFFFF;
    border-top-left-radius : 15px;
    border-top-right-radius: 15px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
`

export const KeywordTitle = styled.div`
    margin-top: 25px;
    font-size: 18px;
    font-weight: 600;
    color: #000000;
`

export const TopKeywordContainer = styled.div`
    display: flex;
    margin: 15px 0;
`

export const TopKeyword = styled.div`
    margin-right: 10px;
    padding: 7px 18px;
    border-radius: 20px;
    border: 1px solid #2B4760;
    color: #2B4760;
`