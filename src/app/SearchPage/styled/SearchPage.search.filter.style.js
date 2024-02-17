import styled from "styled-components";

export const FilterContainer = styled.div`
    width: 100%;
    display: flex ;
    background-color: rgba(0,0,0,0.5);

    @media screen and (min-width:431px){
        width: 430px;
    }

    ${(props) => {
        props.type !== 'recruit'
            ? `
            height: 100%;
        position: fixed;
        top: 0;
        ` : `
        `
    }}
`

export const FilterContent = styled.div`
width: inherit;
    background-color: #FFFFFF;
    border-top-left-radius : 15px;
    border-top-right-radius: 15px;
    padding: 20px 0;
    box-sizing: border-box;
    ${(props) => {
        props.type !== 'recruit'
            ? `
            position: fixed;
        bottom: 0;
        ` : `
        `
    }}
`

export const FilterTitle = styled.div`
    color: #2B4760;
    font-size: 18px;
    font-weight: 700;
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
`

export const BtnContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-evenly;
`

export const Btn = styled.div`
    ${(props) =>
        props.color == "navy"
        ? `
            background-color: #2B4760 ;
            color: #FFFFFF ;
        `
        : `
            background-color: #FFFFFF ;
            color: #B7B7B7 ;
            border: 1px solid #B7B7B7 ;
        `
    }

    width: 40%;
    height: 45px;
    border-radius: 10px ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
`
