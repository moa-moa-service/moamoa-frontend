import React from "react";
import {
    AddressSetupContainer,
    AddressSetupContentWrapper,
    AddressSetupLogoWrapper,
    AddressSetupLogoTitleWrapper,
    AddressSetupLogoTitle,
    AddressSetupFooterWrapper,
    AddressSetupFooterTitleWrapper,
    AddressSetupFooterTitle,
    AddressSetupFooterContentLogoWrapper,
    AddressSetupFooterContentLogo,
    AddressSetupFooterContentWrapper as FooterContentWrapper, // Rename the import
} from "./styled/LoginPage.main.AddressSetup.style";

const AddressSetup = () => {
    return (
        <AddressSetupContainer>
            <AddressSetupContentWrapper>
                <AddressSetupLogoWrapper>
                    {/* Use the correct component name: AddressSetupLogoTitle */}
                    <AddressSetupLogoTitle>
                        우리동네 공동구매<br /> <strong>모아모아</strong>로 시작해요!
                    </AddressSetupLogoTitle>
                </AddressSetupLogoWrapper>
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
                            <AddressSetupFooterContentLogo src="" />
                        </AddressSetupFooterContentLogoWrapper>
                        카카오 로그인
                    </button>
                </AddressSetupFooterContentWrapper>
            </AddressSetupFooterWrapper>
        </AddressSetupContainer>
    );
};

export default AddressSetup;