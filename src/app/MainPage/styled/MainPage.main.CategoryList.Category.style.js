import styled from 'styled-components';

export const CategoryContainer = styled.div`
display: flex;
height: 242px;
flex-direction: column;
margin-bottom: 20px;
`

export const CategoryTextContainer = styled.div`
width: 201px;
height: 31px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const CategoryText = styled.span`
color: #2B4760;
font-size: 18px;
// font-style: normal;
font-weight: 700;
// line-height: normal;
// letter-spacing: -0.434px;
`
export const GreaterThanText = styled.span`
width: 31px;
height: 31px;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: #2B4760;
`

export const ItemsContainer = styled.div`
overflow-x: auto; /* 가로 스크롤을 가능하게 하는 속성 */
white-space: nowrap; /* 자식 요소들이 가로로 나열되도록 함 */
}
&::-webkit-scrollbar {
    display: none;
}
`