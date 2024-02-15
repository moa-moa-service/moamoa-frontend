import styled from "styled-components"

export const ModalWrapper = styled.div`
position: fixed;
bottom: 0;  /* 화면 아래에 배치 */
left: 50%;  /* 화면 가로 중앙에 정렬 */
transform: translateX(-50%);  /* 가로 중앙에 정렬 */

width: 430px;
border-radius: 15px 15px 0px 0px;
background-color: #FFF;
${(props) =>
    props.type === 'category'
    ? `
    height: 389px;
    ` : `
    height: 239px;
    `}

`

export const Background = styled.div`
display: flex;
flex-direction: column;
// background-color: red;
padding: 25px;
`

export const Wrapper = styled.div`
`

export const ModalText = styled.span`
color: #2B4760;
text-align: center;
font-family: Inter;
font-style: normal;
line-height: 25.382px; /* 115.373% */
letter-spacing: -0.577px;

${(props) =>
    props.type === 'bold'
    ? `
    font-size: 22px;
    font-weight: 700;
    margin-left: 10px;
    ` : `
    font-size: 14.676px;
    font-weight: 500;
    margin-left: 14px;
    `}
`

export const CheckboxContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin: 23px 0 23px 7px;
height: 190px;
justify-content: space-between;
overflow: scroll;
`
export const CheckboxWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin-bottom: 8px;
`

export const ModalInput = styled.input.attrs({ type: 'checkbox' })`
width: 25px;
height: 25px;
border: 10px solid #2B4760;
`

export const ModalBtns = styled.div`
width: 380px;
height: 49px;
display: flex;
margin-left: 25px;
justify-content: space-between;
`

export const ModalBtn = styled.button`
width: 186px;
height: 49px;
border-radius: 15px;

text-align: center;
font-family: Inter;
font-size: 14.676px;
font-style: normal;
font-weight: 600;
line-height: 25.382px; /* 172.943% */
letter-spacing: -0.577px;

${(props) =>
    props.type === 'cancel'
    ? `
    color: #B7B7B7;
    border: 3px solid #B7B7B7;
    background-color: #FFFFFF;
    ` : `
    background: #2B4760;
    color: #FFFFFF;
    border: none;
    `}
`

export const RangeWrapper = styled.div`
width: 100%;
margin: 28px 5px 45px 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const ModalTextWrapper = styled.div`
display: flex;
justify-content: end;
`

export const Range =styled.input.attrs({ type: 'range' })`
width: 100%;
min: 1;
max: 7;
`