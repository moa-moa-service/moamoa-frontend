import styled from "styled-components";

export const MenuNavWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 430px;
height: 91px;
background-color: #FFFFFF;
border-radius: 15px 15px 0 0;
box-shadow: 0px -2px 10px 4px rgba(0, 0, 0, 0.09);

position: fixed;
bottom: 0;
`

export const MenuIconListContainer = styled.div`
width: 369px;
height: 54px;
// background-color:blue;
display: flex;
justify-content: space-between;
`

export const MenuIconContainer = styled.div`
height: 54px;
display: flex;
// background-color: green;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const MenuIconImgWrapper = styled.div`
width: 35px;
height: 35px;
background-color: #F85A5A;
border-radius: 15px;
`

export const MenuIconText = styled.span`
color: #2B4760;
text-align: center;
font-family: Inter;
font-size: 11.351px;
font-style: normal;
font-weight: 600;
line-height: 20.305px; /* 178.879% */
letter-spacing: -0.461px;
`