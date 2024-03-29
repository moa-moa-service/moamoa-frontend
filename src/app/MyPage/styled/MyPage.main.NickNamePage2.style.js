import styled from 'styled-components'

const NickNamePageContainer= styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-width: 600px;
    border: 1px solid #000000;
`

const NickNamePageHeaderContainer= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

const NickNamePageHeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    background-color: #FFFFFF;
    border-radius: 0 0 15px 15px;
`

const NickNamePageBackButton = styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    padding: 15px 20px;
    color: #808080;
    background-color: #FFFFFF;
    border-radius: 15px;
    cursor: pointer;
`

const NickNamePageHeaderTitle = styled.div`
    font-weight: 600;
    text-align: center;
    color: #FFF;
    font-family: Inter;
    font-size: 19.569px;
    font-style: normal;
    line-height: 25.382px; /* 129.707% */
    letter-spacing: -0.577px;
    color: #000;
`

const NickNamePageMapWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`

const NickNamePageBottomWrapper= styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
`

const NickNamePageProfileImage = styled.div`
    background-color: #B7B7B7;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    stroke-width: 5px;
    stroke: #FFF;
    margin-top: 33px; /* 수정된 부분 */
    top: -40px;
    left: 50%;
    transform: translate(0,55%);
    z-index: 1; 
`

const NickNamePageBottomSheetWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 15px 15px 0 0;
    gap: 5px;
`
const NickNamePageBottomNickNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 15px 15px 0 0;
    gap: 5px;
`
const NickNamePageBottomNickNameTitle = styled.div`
    color: #000000;
    text-align: left;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 25.382px; /* 76.915% */
    letter-spacing: -0.577px;
    font-size: 19.569px;
`
const NickNamePageBottomLocationTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    color: #7D7D7D;
    text-align: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 25.382px; /* 126.91% */
    letter-spacing: -0.577px;
    font-size: 16px;
`

const NickNamePageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 5px;
`
const NickNamePageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: 35px;
    text-align: left;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.382px; /* 126.91% */
    letter-spacing: -0.577px;
    color: #888;
`



    


export {
    NickNamePageContainer,
    NickNamePageHeaderContainer,
    NickNamePageHeaderWrapper,
    NickNamePageBackButton,
    NickNamePageHeaderTitle,
    NickNamePageBottomWrapper,
    NickNamePageProfileImage,
    NickNamePageBottomSheetWrapper,
    NickNamePageBottomNickNameWrapper,
    NickNamePageBottomNickNameTitle,
    NickNamePageBottomLocationTitle,
    NickNamePageContentWrapper,
    NickNamePageContent,
    NickNamePageMapWrapper,
};