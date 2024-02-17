import styled from "styled-components";

export const Title = styled.div`
    color: #2B4760;
    font-size: 14px;
    display: flex;
    font-weight: 600;
    margin: 25px 0 10px 0;
`

export const TitleInput = styled.input`
    width: 95%;
    height: 30px;
    border: 1.5px solid #2B4760;
    border-radius: 10px;

    &::placeholder {
        color: #B9B9B9 ;
        padding: 5px;
    }
`

export const EssentialIcon = styled.div`
    color: #FF424D;
    margin-left: 3px;
`

export const ImgContainer = styled.div`
display: flex;
flex-direction: row;
`

export const SelectImgLabel = styled.label`
display: inline-block;
width: 150px;
height: 150px;
border: 2px solid #2B4760;
border-radius: 15px;
position: relative;
`

export const CameraIcon = styled.img`
width: 33.333px;
height: 30px;
margin: 60px 58px;
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

export const ItemsContainer = styled.div`
overflow-x: auto; /* 가로 스크롤을 가능하게 하는 속성 */
white-space: nowrap; /* 자식 요소들이 가로로 나열되도록 함 */

&::-webkit-scrollbar {
    display: none;
}
`

export const ImgWrapper = styled.div`
width: 150px;
height: 150px;
margin-left: 8px;
display: inline-block;
`

export const ContentInput = styled.textarea`
    width: 95%;
    height: 300px;
    border: 1.5px solid #2B4760;
    border-radius: 10px;
    padding: 10px;

    &::placeholder {
        color: #B9B9B9 ;
    }

`

export const BtnContainer = styled.div`
    width: inherit;
    height: 80px;
    background-color: #FFFFFF;
    z-index: 90;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: center;
`

export const Btn = styled.div`
    width: 95%;
    height: 55px;
    color: #888888;
    z-index: 999;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    ${(props) => 
        props.type === "complete" 
        ? `
        background-color: #FF424D;
        color: #FFFFFF;
        ` : `
        background-color: #C4C4C4;
        color: #888888;
        `
    }
`