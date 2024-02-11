import styled from "styled-components";

export const ProductListContainer = styled.div`
width: 100%;
height: 110px;
// background-color: #FF424D;
padding: 20px 0;
display: flex;
`
export const ProductImg = styled.img`
width: 110px;
height: 110px;
background-color: #D9D9D9;
border-radius: 15px;
margin-right: 22px;
`

export const ProductInfoContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 8px 0 5px 0 ;
`

export const RecruitTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 30px;
`

export const ProductInfoText = styled.span`
font-family: Inter;
font-size: 18px;
font-style: normal;
letter-spacing: -0.577px;
${(props) =>
        props.type === 'title' || props.type === 'price'
        ? `
            color: #000;
            font-size: 18px;
            font-weight: 500;
            line-height: 25.382px;
        ` : `
            color: #888888;
            font-size: 14px;
    `}
`
