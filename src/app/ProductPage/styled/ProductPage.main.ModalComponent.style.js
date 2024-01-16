import styled from "styled-components";

export const ModalContainer = styled.div`
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
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
`

export const Modal = styled.div`
    width: 70% ;
    height: 45%;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    justify-content: space-around;
    align-items: center;
    padding: 60px 0 20px 0;
    box-sizing: border-box;
`

export const Icon = styled.div`
    width: 140px;
    height: 100px;
    background-color: #D9D9D9;
    border-radius: 10px;
`

export const TextContainer = styled.div`
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    /* margin-bottom: 70px; */
`

export const InfoTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export const InfoText = styled.div`
    font-size: 13px;
    color: #848484;
`

export const TextInput = styled.input`
    width: 110px ;
    height: 25px;
    font-size: 11px;
    text-align: center;
    border: 1px solid #000000 ;
    &::placeholder {
        color: #848484;
    }
`
export const BtnContainer = styled.div`
    display: flex;
    width: 80%;
    height: 30px;
    background-color: #D9D9D9;
    border-radius: 10px;
`

export const CheckBtn = styled.div`
    width: 100%;
    height: 100% ;
    display: flex ;
    justify-content: center ;
    align-items:center;
    color: #848484 ;
    font-size: 13px ;
`