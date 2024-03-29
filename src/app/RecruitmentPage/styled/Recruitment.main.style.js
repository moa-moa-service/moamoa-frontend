import styled from "styled-components"

export const FiltersContainer = styled.div`
width: 100%;
height: 31px;
// background-color: red;
display: flex;
justify-content: space-between;

`;

export const FilterWrapper = styled.div`
width: 118px;
height: 31px;
// background-color: yellow;
border-radius: 15px;
border: 1px solid #2B4760;
display: flex;
justify-content: center;
align-items: center;
${(props) =>
        props.type === 'margin'
            ? `
             margin-right: 10px;
    ` : `
    `}
`

export const FilterText = styled.span`
color: #2B4760;
text-align: center;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 26.113px; /* 200.87% */
letter-spacing: -0.593px;
`

export const ProductInfoContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 20px;
`

export const InfoElementContainer = styled.div`
width: 100%;
display: flex;  
flex-direction: column;
margin-bottom: 30px;
`

export const ImgContainer = styled.div`
display: flex;
flex-direction: row;
`

export const ImgWrapper = styled.div`
width: 150px;
height: 150px;
margin-left: 8px;
display: inline-block;
`

export const ProductText = styled.span`
font-family: Inter;
font-size: 14.676px;
font-style: normal;
font-weight: 600;
line-height: 25.382px; /* 172.943% */
letter-spacing: -0.577px;
margin: 0 0 5px 5px;

${(props) =>
        props.type === 'asterisk'
            ? `
    color: #FF424D;
    ` : `
    color: #2B4760;
    `}
`

export const ProductInput = styled.input`
border: 2px solid #2B4760;
border-radius: 15px;
padding-left :15px;

${(props) =>
        props.type === 'desc'
            ? `
    height: 160px;
    ` : `
    height: 44px;
    `}
`

export const SelectImgLabel = styled.label`
display: inline-block;
width: 150px;
height: 150px;
border: 2px solid #2B4760;
border-radius: 15px;
position: relative;
`

export const SelectImg = styled.input`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0,0,0,0);
border: 0;
`

export const CameraIcon = styled.img`
width: 33.333px;
height: 30px;
margin: 60px 58px;
`

export const CompleteBtn = styled.div`
width: 400px;
height: 55px;
border-radius: 7px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 25px;
left: 50%;
transform: translateX(-50%);

${(props) =>
        props.type === 'complete' ?
            `
    background-color: #FF424D;
    color: #FFF;
    
    ` : `
    background-color: #C4C4C4;
    color: #888;
    `
    }

font-family: Inter;
font-size: 14.676px;
font-style: normal;
font-weight: 600;
line-height: 25.382px; /* 172.943% */
letter-spacing: -0.577px;
`

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.3);
`;
