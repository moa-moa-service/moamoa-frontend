import React from "react";
import naverSnsButton from '/public/naver-sns-button.png'
import {
    WelcomeContainer,
    WelcomeContentWrapper,
    WelcomeLogoWrapper,
    WelcomeLogoTitle,
    WelcomeFooterWrapper,
    WelcomeFooterTitleWrapper,
    WelcomeFooterTitle,
    WelcomeFooterContentWrapper,
    WelcomeFooterContentLogoWrapper,
    WelcomeFooterContentLogo
} from "./styled/LoginPage.main.Welcome.style";

const Welcome = () => {
    return (
        <WelcomeContainer>
            <WelcomeContentWrapper>
                <WelcomeLogoWrapper>
                    {/* Use the correct component name: AddressSetupLogoTitle */}
                </WelcomeLogoWrapper>
                <WelcomeLogoTitle>
                        <span>우리동네 공동구매</span>
                        <span><strong>모아모아</strong>로 시작해요!</span>
                    </WelcomeLogoTitle>
            </WelcomeContentWrapper>

            <WelcomeFooterWrapper>
                <WelcomeFooterTitleWrapper>
                    <WelcomeFooterTitle>
                        SNS계정으로 시작하기
                    </WelcomeFooterTitle>
                </WelcomeFooterTitleWrapper>
                <WelcomeFooterContentWrapper>
                        <WelcomeFooterContentLogoWrapper>
                            <WelcomeFooterContentLogo src={naverSnsButton} />
                        </WelcomeFooterContentLogoWrapper>
                    
                </WelcomeFooterContentWrapper>
            </WelcomeFooterWrapper>
        </WelcomeContainer>
    );
};

export default Welcome;