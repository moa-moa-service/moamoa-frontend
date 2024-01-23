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
    AddressSetupBottomSheetWrapper
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

                </AddressSetupBottomSheetWrapper>
            </AddressSetupBottomWrapper>
        </AddressSetupContainer>
    )
}

export default AddressSetup