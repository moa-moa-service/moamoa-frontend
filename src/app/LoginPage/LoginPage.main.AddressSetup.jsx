import React from "react";

import {
    AddressSetupContainer,
    AddressSetupHeaderContainer,
    AddressSetupHeaderWrapper,
    AddressSetupBackButton,
    AddressSetupHeaderTitle,
    AddressSetupMapWrapper,
    AddressSetupBottomWrapper,
    AddressSetupCurrentLocationWrapper,
    AddressSetupBottomSheetWrapper,
    AddressSetupBottomLocationWrapper,
    AddressSetupBottomLocationTitle,
    Input,
    AddressSetupBottomButtonWrapper,
    AddressSetupBottomButton,

} from './styled/LoginPage.main.AddressSetup.style'

const AddressSetup = () => {
    return (
        <AddressSetupContainer>
            <AddressSetupHeaderContainer>
                <AddressSetupHeaderWrapper>
                    <AddressSetupBackButton>{'<'}</AddressSetupBackButton>
                    <AddressSetupHeaderTitle>우리 동네 설정</AddressSetupHeaderTitle>
                </AddressSetupHeaderWrapper>
            </AddressSetupHeaderContainer>

            <AddressSetupMapWrapper>

            </AddressSetupMapWrapper>

            <AddressSetupBottomWrapper>
                <AddressSetupCurrentLocationWrapper>

                </AddressSetupCurrentLocationWrapper>

                <AddressSetupBottomSheetWrapper>
                    <AddressSetupBottomLocationWrapper>
                        <AddressSetupBottomLocationTitle>
                            내 위치
                        </AddressSetupBottomLocationTitle>
                        <Input>남가좌동</Input>
                    </AddressSetupBottomLocationWrapper>
                    <AddressSetupBottomButtonWrapper>
                        <AddressSetupBottomButton>
                            선택 확정
                        </AddressSetupBottomButton>
                    </AddressSetupBottomButtonWrapper>
                </AddressSetupBottomSheetWrapper>
            </AddressSetupBottomWrapper>
        </AddressSetupContainer>
    )
}

export default AddressSetup