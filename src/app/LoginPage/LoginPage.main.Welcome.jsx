import React from "react";
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
                    <WelcomeLogoTitle>
                        우리동네 공동구매<br /> <strong>모아모아</strong>로 시작해요!
                    </WelcomeLogoTitle>
                </WelcomeLogoWrapper>
            </WelcomeContentWrapper>

            <WelcomeFooterWrapper>
                <WelcomeFooterTitleWrapper>
                    <WelcomeFooterTitle>
                        SNS계정으로 시작하기
                    </WelcomeFooterTitle>
                </WelcomeFooterTitleWrapper>
                <WelcomeFooterContentWrapper>
                    <button>
                        <WelcomeFooterContentLogoWrapper>
                            <WelcomeFooterContentLogo src="" />
                        </WelcomeFooterContentLogoWrapper>
                        카카오 로그인
                    </button>
                </WelcomeFooterContentWrapper>
            </WelcomeFooterWrapper>
        </WelcomeContainer>
    );
};

export default Welcome;