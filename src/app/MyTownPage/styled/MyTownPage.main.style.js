import styled from "styled-components";

export const TopTextContainer = styled.div`
display: flex;
flex-direction: column;
`

export const TopText = styled.span`
font-family: Inter;
line-height: 25px;
letter-spacing: -0.5768628120422363px;
text-align: left;
color:#FFF;

${(props) =>
        props.type === 'bold'
            ? `
            font-size: 30px;
            font-weight: 600;
            ` : `
            font-size: 16px;
            font-weight: 300;
            `
    };
`

export const BottomProductWrapper = styled.div`
height: 114px;
margin: 25px 20px 25px 20px;
display: flex;
`

export const ProductImg = styled.div`
width: 114px;
height: 114px;
border-radius: 15px;
background-color: #D9D9D9;
margin-right: 20px;
`

export const ProductTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const ProductTextTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ProductTextMiddle = styled.div`
display: flex;
flex-direction: column;
`

export const ProductTextBottom = styled.div`
display: flex;
align-items: center;
`

export const ProductText = styled.span.attrs((props) => ({
    style: {
        fontFamily: 'Inter',
        lineHeight: '20px',
        letterSpacing: '-0.4587019085884094px',
        textAlign: 'left',
        color: props.type === 'title' ? 'black' :
            props.type === 'location' ? '#AAAAAA' : 
            props.type === 'peopleText' || props.type === 'dateText' ? '#707070' : '#2B4760',
        fontWeight: props.type === 'title' ? 600 : 
            props.type === 'people' || props.type === 'date' ? '700' : '500',
        fontSize: props.type === 'title' ? '20px' :
            props.type === 'price' ? '16px' :
                props.type === 'place' ? '15px' :
                    props.type === 'location' ? '13px' : '14px'
    }
}))``;