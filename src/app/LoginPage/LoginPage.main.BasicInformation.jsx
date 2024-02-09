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

const BasicInformation = ({
    onNextStep
}) => {
    return (
        <BasicInformationContainer>
            <BasicInformationTitleWrapper>
                <BasicInformationTitle>내 정보</BasicInformationTitle>
            </BasicInformationTitleWrapper>

            <BasicInformationContentWrapper>
                <BasicInformationContentFormItemWrapper>
                    <BasicInformationContentFormTitleWrapper>
                        닉네임
                    </BasicInformationContentFormTitleWrapper>
                    <BasicInformationContentFormContentWrapper>
                        <BasicInformationContentFormInput />
                        <BasicInformationContentFormGuideText>
                            한글, 영어, 숫자로만 구성할 수 있어요.
                        </BasicInformationContentFormGuideText>
                    </BasicInformationContentFormContentWrapper>
                </BasicInformationContentFormItemWrapper>

                <BasicInformationContentFormItemWrapper>
                    <BasicInformationContentFormTitleWrapper>
                        우리 동네 설정
                    </BasicInformationContentFormTitleWrapper>
                    <BasicInformationContentFormContentWrapper>
                        <BasicInformationLocationSettingButton>남가좌동</BasicInformationLocationSettingButton>
                        <BasicInformationContentFormGuideText>
                            우리 동네를 설정해 주세요!
                        </BasicInformationContentFormGuideText>
                    </BasicInformationContentFormContentWrapper>
                </BasicInformationContentFormItemWrapper>
            </BasicInformationContentWrapper>

            <BasicInformationFooterWrapper onClick={() => {
                onNextStep()
            }}>
                <button>확인</button>
            </BasicInformationFooterWrapper>
        </BasicInformationContainer>
    )
}

export default BasicInformation