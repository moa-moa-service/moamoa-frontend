import React from "react";
import {
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
} from './styled/LoginPage.main.BasicInformation.style'

const BasicInformation = () => {
    return (
        <WelcomeContainer>
            <WelcomeTitleContainerWrapper>
                <WelcomeIconContainerWrapper>
                    <img src="" alt="" />
                </WelcomeIconContainerWrapper>
                <WelcomeTitle>우리 동네 설정</WelcomeTitle>
            </WelcomeTitleContainerWrapper>
            <WelcomeDirectionIconContainer>
                <img src="" alt="" />
            </WelcomeDirectionIconContainer>
            <WelcomeFooterContentWrapper>

            </WelcomeFooterContentWrapper>
        </WelcomeContainer>
    )
}

export default BasicInformation