import React, { Suspense } from "react";
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom' 
import MyMap from "../RecruitmentPage/Recruitment.MyMap.jsx";
import { SignUpAtom } from '../../recoil/atoms/AuthAtom'

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
    const [memberInfo, setMemberInfo] = useRecoilState(SignUpAtom)
    const navigate = useNavigate()

    function handleResponseChange(response) {
        try {
            const targetLocationRoadAddress = response?.v2?.address?.roadAddress
            const targetLocationData = response?.v2?.results[0]?.region?.area3
            
            const townName = targetLocationData?.name
            const townCoords = targetLocationData?.coords?.center
            const latitude = townCoords?.x
            const longitude = townCoords?.y

            if (!targetLocationRoadAddress || !townName || !latitude || !longitude) {
                throw Error('Invalid Location Data')
            } else {
                setMemberInfo({
                    ...memberInfo,
                    town: townName,
                    address: {
                        name: targetLocationRoadAddress,
                        latitude: latitude,
                        longitude: longitude
                    }
                })
            }
        } catch (e) {
            console.error(e)
            alert('위치 정보를 불러오는 과정에서 문제가 발생했습니다')
        }
    }
    return (
        <AddressSetupContainer>
            <AddressSetupHeaderContainer>
                <AddressSetupHeaderWrapper>
                    <AddressSetupBackButton onClick={() => {
                        navigate(-1)
                    }}>{'<'}</AddressSetupBackButton>
                    <AddressSetupHeaderTitle>우리 동네 설정</AddressSetupHeaderTitle>
                </AddressSetupHeaderWrapper>
            </AddressSetupHeaderContainer>

            <AddressSetupMapWrapper>
                <Suspense fallback={null}>
                    <MyMap onResponseChange={handleResponseChange} />
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
                        <Input>{memberInfo.town}</Input>
                    </AddressSetupBottomLocationWrapper>
                    <AddressSetupBottomButtonWrapper>
                        <AddressSetupBottomButton onClick={() => {
                            navigate(-1)
                        }}
                        disabled={!memberInfo.town}>
                            선택 확정
                        </AddressSetupBottomButton>
                    </AddressSetupBottomButtonWrapper>
                </AddressSetupBottomSheetWrapper>
            </AddressSetupBottomWrapper>
        </AddressSetupContainer>
    )
}

export default AddressSetup