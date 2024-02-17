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
import { AuthAtom, SignUpAtom } from '../../recoil/atoms/AuthAtom'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import client from '../../client'

const BasicInformation = () => {
    const [accessToken] = useRecoilState(AuthAtom)
    const [memberInfo, setMemberInfo] = useRecoilState(SignUpAtom)
    const navigate = useNavigate()

    const handleNameInput = (e) => {
        setMemberInfo({
            ...memberInfo,
            nickname: e.target.value
        })
    }

    const handleClickSubmitButton = async (e) => {
        try {
            const response = await client(accessToken).post('/auth/member-info', JSON.stringify(memberInfo))
            
            if (response.data.isSuccess) {
                navigate('/')
            } else {
                throw Error(response)
            }
        } catch (error) {
            console.error(error)
            alert('문제가 발생했습니다.')
        }
    }

    const isValidMemberInfo = () => {
        return Boolean(memberInfo.nickname && memberInfo.nickname !== '' && memberInfo.town && memberInfo.town !== '' && memberInfo.address.name && memberInfo.address.latitude && memberInfo.address.longitude)
    }

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
                        <BasicInformationContentFormInput value={memberInfo.nickname} onChange={handleNameInput} />
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
                        <BasicInformationLocationSettingButton onClick={() => {
                            navigate("/signup/address-setup")
                        }}>{memberInfo.town}</BasicInformationLocationSettingButton>
                        <BasicInformationContentFormGuideText>
                            우리 동네를 설정해 주세요!
                        </BasicInformationContentFormGuideText>
                    </BasicInformationContentFormContentWrapper>
                </BasicInformationContentFormItemWrapper>
            </BasicInformationContentWrapper>

            <BasicInformationFooterWrapper>
                <button 
                disabled={!isValidMemberInfo()}
                onClick={() => {
                    if (isValidMemberInfo()) {
                        handleClickSubmitButton()
                    }
                }}>확인</button>
            </BasicInformationFooterWrapper>
        </BasicInformationContainer>
    )
}

export default BasicInformation