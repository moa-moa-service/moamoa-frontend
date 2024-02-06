import React, { Suspense } from "react";
import MyMap from "../RecruitmentPage/Recruitment.MyMap.jsx";

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
                <Suspense fallback={null}>
                    <MyMap />
                </Suspense>
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
                        <AddressSetupBottomButton onClick={() => {
                            console.log('로그인 화면으로 routing')
                        }}>
                            선택 확정
                        </AddressSetupBottomButton>
                    </AddressSetupBottomButtonWrapper>
                </AddressSetupBottomSheetWrapper>
            </AddressSetupBottomWrapper>
        </AddressSetupContainer>
    )
}

export default AddressSetup