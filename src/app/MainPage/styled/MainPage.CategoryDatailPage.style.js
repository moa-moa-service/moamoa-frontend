import styled from "styled-components"

export const CategoryTitleContainer = styled.div`
${(props) =>
    props.type === 'recruit'
    ? `
    width: 226px;
    ` : `
    width: 287px;
    `}
height: 50px;
margin: 67px 109px 25px 25px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const BackBtn = styled.div`
width: 50px;
height: 50px;
background-color: #FF424D;
border-radius: 15px;
`
export const CategoryTitle = styled.span`
color: #FFF;

text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.434px;
`

export const ContourLine = styled.div`
background-color: #E4E4E4;
width: 385px;
height: 1px;
margin-left: 25px;
`