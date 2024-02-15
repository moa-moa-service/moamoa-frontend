import styled from 'styled-components';

export const ItemWrapper = styled.div`
display: inline-block;
`

export const ItemContainer = styled.div`
display: flex;
width: 160.96px;
height: 199px;
flex-direction: column;
margin: 12px 5px 0 5px;
`

export const ItemImg = styled.img`
width: 100%;
height: 160px;
border-radius: 15px;
`

export const ItemImgContainer = styled.div`
position: relative;
`

export const ItemRecruitContainer = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 32.57px;
background-color: #212732;
border-radius: 0 0 15px 15px;
margin-top: 127.43px;
`

export const ItemRecruitTextContainer = styled.div`
display: flex;
justify-content: space-between;
`
export const ItemRecruitText = styled.span`
height: 11px;
${(props) =>
    props.type === 'People'
    ? `
    margin: 10.57px 0 11px 11px;
    ` : `
    margin: 10.57px 7.96px 11px 0px;
    `}
color: #FFF;
font-size: 12px;
font-style: normal;
font-weight: 500;
letter-spacing: -0.193px;
`

export const ItemName = styled.span`
width: 100%;
height: 17px;
color: #3D3D3D;
font-size: 14px;
font-weight: 600;
line-height: normal;
letter-spacing: -0.504px;
margin-top: 6px;
`

export const ItemPrice = styled.span`
width: 100%;
height: 16px;
color: #9B9B9B;
`