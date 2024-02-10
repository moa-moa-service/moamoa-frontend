import styled from "styled-components";

export const TopWrapper = styled.div`

border-radius: 0px 0px 15px 15px;
background: #2B4760;
padding: ${(props) =>
        props.type === 'town'
            ? '67px 0px 25px 25px;' : '67px 27px 25px;'};
`

export const TopContentContainer = styled.div`
height: 50px;
display: flex;
align-items: center;
`;

export const BackBtn = styled.div`
width: 50px;
height: 50px;
background-color: #FF424D;
border-radius: 15px;
margin-right: ${(props) =>
        props.type === 'town'
            ? '20px;' : '83px;'};

`

export const Text = styled.span`
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 19.569px;
font-style: normal;
font-weight: 600;
line-height: 25.382px; /* 129.707% */
letter-spacing: -0.577px;
`

export const BottomWrapper = styled.div`
position: fixed;
bottom: 0;
border-radius: 15px 15px 0px 0px;
background: #FFF;
width: 430px;
height: ${(props) =>
    props.type === 'town'
        ? '' : '214px;'};
box-shadow: 0px -2px 10px 4px rgba(0, 0, 0, 0.09);
`
export const DetailAddressContainer = styled.div`
display: flex;
flex-direction: column;
margin: 30px;
`

export const DetailAddressText = styled.span`
font-family: Inter;
font-style: normal;
line-height: 25.382px; /* 141.011% */
letter-spacing: -0.577px;
margin-left:5px;
${(props) =>
        props.type === 'bold'
            ? `
        color: #2B4760;
        font-size: 18px;
        font-weight: 700;
    
    ` : `
        color: rgba(43, 71, 96, 0.68);
        font-size: 16px;
        font-weight: 500;
    `}
`

export const InputDetailAddressContainer = styled.div`
display: flex;
flex-direction: column;
margin: 30px;
`
export const InputDetailAddress = styled.input`
height: 26px;
border: 3px solid #2B4760;
margin-top: 5px;
border-radius: 15px;
padding: 9px 15px;
`