import React from "react";

import {
    NickNamePageContainer,
    NickNamePageHeaderContainer,
    NickNamePageHeaderWrapper,
    NickNamePageBackButton,
    NickNamePageHeaderTitle,
    NickNamePageBottomWrapper,
    NickNamePageProfileImage,
    NickNamePageBottomSheetWrapper,
    NickNamePageBottomNickNameWrapper,
    NickNamePageBottomNickNameTitle,
    NickNamePageBottomLocationTitle,
    NickNamePageContentWrapper,
    NickNamePageContent,
    NickNamePageMapWrapper,
} from './styled/MyPage.main.NickNamePage2.style'

const NickNamePage2 = () => {
    return (
        <NickNamePageContainer>
            <NickNamePageHeaderContainer>
                <NickNamePageHeaderWrapper>
                    <NickNamePageBackButton>{'<'}</NickNamePageBackButton>
                    <NickNamePageHeaderTitle>마이페이지</NickNamePageHeaderTitle>
                </NickNamePageHeaderWrapper>
            </NickNamePageHeaderContainer>

            <NickNamePageMapWrapper>

            </NickNamePageMapWrapper>

            <NickNamePageBottomWrapper>
                <NickNamePageProfileImage>

                </NickNamePageProfileImage>

                <NickNamePageBottomSheetWrapper>
                    <NickNamePageBottomNickNameWrapper>
                        <NickNamePageBottomNickNameTitle>
                            닉네임
                        </NickNamePageBottomNickNameTitle>
                        <NickNamePageBottomLocationTitle>
                            서대문구 남가좌동
                        </NickNamePageBottomLocationTitle>
                    </NickNamePageBottomNickNameWrapper>
                    <NickNamePageContentWrapper>
                        <NickNamePageContent>
                            우리 동네 설정
                        </NickNamePageContent>
                        <NickNamePageContent>
                            모집한 공동구매
                        </NickNamePageContent>
                        <NickNamePageContent>
                            참여한 공동구매
                        </NickNamePageContent>
                        <NickNamePageContent>
                            로그아웃
                        </NickNamePageContent>
                        <NickNamePageContent>
                            계정 탈퇴
                        </NickNamePageContent>
                    </NickNamePageContentWrapper>
                </NickNamePageBottomSheetWrapper>
            </NickNamePageBottomWrapper>
        </NickNamePageContainer>
    )
}

export default NickNamePage2