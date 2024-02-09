import styled from "styled-components";

export const AlarmWrapper = styled.div`
width: 100%;
height: 52px;
// background: red;
padding: 20px 0;
display: flex;
flex-direction: row;
`

export const AlarmTextContainer = styled.div`
width: 80%;
// background: blue;
padding-left: 25px;
display: flex;
flex-direction: column;
`
export const TextContainer = styled.div`
width: 100%;
height: 26px;
${(props) =>
        props.type === 'content'
            ? `
    // background-color: yellow;
    ` : `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background: green;
`}
`

export const Text = styled.span`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 25px;
letter-spacing: -0.5768628120422363px;
color: #7D7D7D;
text-align: left;
${(props) =>
        props.type === 'bold'
            ? `
        font-weight: 600;
        font-size: 16px;
        color: #2B4760;
        `
            : props.type === 'content'
                ? `
        color: #000000;
        font-size: 16px;
        `
                : ''}
`