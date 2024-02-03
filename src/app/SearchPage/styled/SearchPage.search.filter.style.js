import styled from "styled-components";

export const FilterContainer = styled.div`
    ${(props) => 
            props.display === "none"
            ? `
                display: none ;
            ` : `
                display: flex ;
            `
        }

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0,0,0,0.5);

    @media screen and (min-width:431px){
        width: 430px;
    }
`

export const FilterContent = styled.div`
    width: inherit;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    border-top-left-radius : 15px;
    border-top-right-radius: 15px;
    padding: 20px 0;
    box-sizing: border-box;
    
`

export const FilterTitle = styled.div`
    color: #2B4760;
    font-size: 18px;
    font-weight: 600;
    margin-left: 30px;
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
