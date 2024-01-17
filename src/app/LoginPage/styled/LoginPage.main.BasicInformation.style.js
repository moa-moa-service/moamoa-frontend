import styled from 'styled-components'

const BasicInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    background-color: #ffffff;
    width: 100%;
    height: 100vh;
    padding: 0;
`

const BasicInformationTitleWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 25vh;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #222222;
    border-radius: 0 0 40px 0;   
`

const BasicInformationTitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 20px;
    margin-bottom: 20px;
`

const BasicInformationContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding: 0 20px;
`

const BasicInformationContentFormItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    align-items: center;
`

const BasicInformationContentFormTitleWrapper = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    text-align: left;
`

const BasicInformationContentFormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;
`

const BasicInformationContentFormInput = styled.input`
    width: calc(100% - 20px);
    padding: 14px 10px;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 10px;
    font-size: 14px;
`

const BasicInformationLocationSettingButton = styled.button`
    position: relative;
    width: 100%;
    padding: 22px 10px;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;

    &::after {
        content: ">";
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
        font-size: 20px;
    }
`

const BasicInformationContentFormGuideText = styled.div`
    font-size: 10px;
    color: #000000;
`

const BasicInformationFooterWrapper = styled.div`
    display: flex;
    padding: 0 20px;
    margin-bottom: 20px;

    > button {
        width: 100%;
        padding: 20px 0;
        text-align: center;
        border: transparent;
        background-color: #222222;
        color: #ffffff;
        font-weight: bold;
        font-size: 14px;
        border-radius: 8px;
    }
`

export {
    BasicInformationContainer,
    BasicInformationTitleWrapper,
    BasicInformationTitle,
    BasicInformationContentWrapper,
    BasicInformationContentFormItemWrapper,
    BasicInformationContentFormTitleWrapper,
    BasicInformationContentFormContentWrapper,
    BasicInformationContentFormInput,
    BasicInformationLocationSettingButton,
    BasicInformationContentFormGuideText,
    BasicInformationFooterWrapper
}