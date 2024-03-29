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
import useLoginAction from './LoginPage.service';
import logo from '../../../public/LoginPage/logo.png'

const Welcome = () => {
    const { handleLogin } = useLoginAction()

    return (
        <WelcomeContainer>
            <WelcomeContentWrapper>
                <WelcomeLogoWrapper src={logo}>
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
                        <WelcomeFooterContentLogoWrapper onClick={() => {
                            handleLogin()
                        }}>
                            <WelcomeFooterContentLogo src={naverSnsButton} />
                        </WelcomeFooterContentLogoWrapper>
                    
                </WelcomeFooterContentWrapper>
            </WelcomeFooterWrapper>
        </WelcomeContainer>
    );
};

export default Welcome;