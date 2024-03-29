import styled from "styled-components";

export const ImgModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex ;
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
    /* height: 55%; */
    border-radius: 13px;
    background-color: #FFFFFF;
    box-shadow: 3px 7px 30px black ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    

    img:nth-child(2) {
        width: 100% ;
        height: 100%;
    }
`

export const angleIcon = styled.img`
    width: 19px;
    height: 35px;
    position: absolute;
    padding: 0 10px;
    
    &:first-child {
        left: 0;
    }

    &:last-child {
        right: 0;
    }
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