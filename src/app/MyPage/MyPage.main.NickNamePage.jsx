import React from "react";
import IconAngleLeft from "/public/SearchPage/backIcon.png"

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
    NickNamePageFixedBottomWrapper,
    NickNamePageMapWrapper,
    NickNamePageFixedBottomButtonWrapper,
} from './styled/MyPage.main.NickNamePage.style'
import useMyPageAction from './MyPage.service';
import MenuNav from '../MenuNav/MenuNav.main';

const NickNamePage = () => {
    const { handleLogout } = useMyPageAction()

    return (
        <NickNamePageContainer>
            <NickNamePageHeaderContainer>
                <NickNamePageHeaderWrapper>
                    <NickNamePageBackButton>
                        <img src={IconAngleLeft} alt="" />
                    </NickNamePageBackButton>
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
                        <NickNamePageContent onClick={handleLogout}>
                            로그아웃
                        </NickNamePageContent>
                        <NickNamePageContent>
                            계정 탈퇴
                        </NickNamePageContent>
                    </NickNamePageContentWrapper>
                </NickNamePageBottomSheetWrapper>
            </NickNamePageBottomWrapper>
            <MenuNav />
            {/* <NickNamePageFixedBottomWrapper>
                <NickNamePageFixedBottomButtonWrapper>
                    <button>
                        <img src="../MyPage/Home.png" alt="Home" />
                        <div>홈</div>
                    </button>
                </NickNamePageFixedBottomButtonWrapper>
                <NickNamePageFixedBottomButtonWrapper>
                    <button>
                        <img src="../MyPage/Search.png" alt="Search" />
                        <div>검색하기</div>
                    </button>
                </NickNamePageFixedBottomButtonWrapper>
                <NickNamePageFixedBottomButtonWrapper>
                    <button>
                        <img src="../MyPage/Homeground.png" alt="Homeground" />
                        <div>우리동네</div>
                    </button>
                </NickNamePageFixedBottomButtonWrapper>
                <NickNamePageFixedBottomButtonWrapper>
                    <button>
                        <img src="../MyPage/Chatting.png" alt="Chatting" />
                        <div>채팅하기</div>
                    </button>
                </NickNamePageFixedBottomButtonWrapper>
                <NickNamePageFixedBottomButtonWrapper>
                    <button>
                        <img src="../MyPage/Profile.png" alt="Profile" />
                        <div>마이페이지</div>
                    </button>
                </NickNamePageFixedBottomButtonWrapper>
            </NickNamePageFixedBottomWrapper> */}
        </NickNamePageContainer>
    )
}

export default NickNamePage