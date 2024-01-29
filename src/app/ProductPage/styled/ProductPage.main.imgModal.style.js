import styled from "styled-components";

export const ImgModalContainer = styled.div`
    ${(props) => 
        props.type === "Hidden" 
        ? `
            display: none ;
        ` : `
            display: flex ;
        `
    }

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    /* margin: auto; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    position: fixed ;
    top: 0 ;


    @media screen and (min-width:431px){
        width: 430px;
    }
`

export const ImgModal = styled.div`
    width: 90%;
    height: 55%;
    border-radius: 13px;
    background-color: #D9D9D9;
    box-shadow: 3px 7px 30px black ;
`

export const ImgPageIconContainer = styled.div`
    width: 40px;
    height: 7px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
`

export const ImgPageIcon = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    ${(props) => 
        props.type === 'Current' 
        ? `
            background-color: #FF424D;
        ` : `
            background-color: #D9D9D9;
        `
    }
`