import styled from "styled-components";

export const NoticeModalContainer = styled.div`
    ${(props) => 
        props.type === 'Hidden'
        ? `
            display: none ;
        ` : `
            display: flex ;
        `
    }

    width: 100% ;
    height: 100% ;
    background-color: rgba(0,0,0,0.5);
    position: absolute ;
    z-index: 10 ;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
    position: fixed ;
    top: 0 ;


    @media screen and (min-width:431px){
        width: 430px;
    }
`

export const NoticeIcon = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #FF424D;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoticeText = styled.div`
    color: #FFFFFF;
    ${(props) => 
        props.size === 'small' 
        ? `
            font-size: 12px ;
        ` : `
            font-size: 17px ;
            font-weight: 600 ;
        `
    }
    margin-top: 15px ;
    
`
