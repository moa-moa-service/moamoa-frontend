import styled from "styled-components";

export const SearchPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2B4760;
    width: 100%;
    height: 100%;
`

export const SearchContainer = styled.div`
    background-color: #FFFFFF;
    width: 92%;
    height: 60px;
    border-radius: 15px;
    margin: 60px auto 20px auto;
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

export const MainContainer = styled.div`
    width: 100%;
    height: 80%;
    background-color: #FFFFFF;
    border-top-left-radius : 15px;
    border-top-right-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    box-sizing: border-box;

    @media screen and (min-width:431px){
        width: 430px;
    }
`

export const KeywordContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Keyword = styled.div`
    ${(props) => 
        props.select === "true"
        ? `
            background-color: #2B4760 ;
            color: #FFFFFF ;
        ` : `
            background-color: #FFFFFF ;
            color: #2B4760;
        `
    }

    width: auto;
    height: 15px;
    margin-right: 10px;
    padding: 7px 18px;
    border-radius: 20px;
    border: 1px solid #2B4760;
`