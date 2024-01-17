import React from "react";

import {
    AddressSetupContainer,
    AddressSetupContentWrapper,
    AddressSetupLogoWrapper,
    AddressSetupLogo,
    AddressSetupLogoTitleWrapper,
    AddressSetupLogoTitle,
    AddressSetupFooterWrapper,
    AddressSetupFooterTitleWrapper,
    AddressSetupFooterTitle,
    AddressSetupFooterContentLogoWrapper,
} from './styled/LoginPage.main.AddressSetup.style'

const AddressSetup = () => {
    return (
        <AddressSetupContainer>
           <AddressSetupContentWrapper>
                <AddressSetupLogoWrapper>
                    <AddressSetupLogo  />
                </AddressSetupLogoWrapper>
                <AddressSetupLogoTitleWrapper>
                    <AddressSetupLogoTitle>
                        우리동네 공동구매<br /> <strong>모아모아</strong>로 시작해요!
                    </AddressSetupLogoTitle>
                </AddressSetupLogoTitleWrapper>
           </AddressSetupContentWrapper>

           <AddressSetupFooterWrapper>
                <AddressSetupFooterTitleWrapper>
                    <AddressSetupFooterTitle>
                        SNS계정으로 시작하기
                    </AddressSetupFooterTitle>
                </AddressSetupFooterTitleWrapper>
                <AddressSetupFooterContentWrapper>
                    <button>
                    <AddressSetupFooterContentLogoWrapper>
                        <AddressSetupFooterContentLogo />
                    </AddressSetupFooterContentLogoWrapper>
                    카카오 로그인
                    </button>
                </AddressSetupFooterContentWrapper>
           </AddressSetupFooterWrapper>
        </AddressSetupContainer>
    )
}

export default AddressSetup