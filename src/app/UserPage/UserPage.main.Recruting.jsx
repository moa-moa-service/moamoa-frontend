import React from "react";
import IconAngleLeft from "/public/SearchPage/backIcon.png"

import {
    RecruitingContainer,
    RecruitingHeaderContainer,
    RecruitingHeaderWrapper,
    RecruitingBackButton,
    RecruitingHeaderTitle,
    RecruitingBottomWrapper,
    RecruitingProfileImageWrapper,
    RecruitingProfileImage,
    RecruitingBottomSheetWrapper,
    RecruitingBottomNickNameWrapper,
    RecruitingBottomNickNameTitle,
    RecruitingBottomLocationTitle,
    RecruitingBottomMainContentWrapper,
    RecruitingMapWrapper,
    RecruitingTabbarWrapper,
    RecruitingTabbar,
    RecruitingItemWholeWrapper,
    RecruitingItemWrapper,
    RecruitingItemPhotoWrapper,
    RecruitingItemPhoto,
    RecruitingItemDefaultThumbnail,
    RecruitingItemDetailWrapper,
    RecruitingItemDetail,
    RecruitingItemDetailTitle,
    RecruitingItemDetailContent,
    RecruitingItemDetailPrice,



} from './styled/UserPage.main.Recruiting.style.js'
import MenuNav from '../MenuNav/MenuNav.main';
import { RecentKeywordContainer } from '../SearchPage/styled/SearchPage.main.style';

const Recruiting = () => {
    return (
        <RecruitingContainer>
            <RecruitingHeaderContainer>
                <RecruitingHeaderWrapper>
                    <RecruitingBackButton>
                        <img src={IconAngleLeft} alt="" />
                    </RecruitingBackButton>
                    <RecruitingHeaderTitle>닉네임의 공동구매</RecruitingHeaderTitle>
                </RecruitingHeaderWrapper>
            </RecruitingHeaderContainer>

            <RecruitingMapWrapper>

            </RecruitingMapWrapper>

            <RecruitingBottomWrapper>
                
                <RecruitingBottomSheetWrapper>
                <RecruitingProfileImageWrapper>
                <RecruitingProfileImage />
            </RecruitingProfileImageWrapper>

                    <RecruitingBottomNickNameWrapper>
                        
                        <RecruitingBottomNickNameTitle>
                            닉네임
                        </RecruitingBottomNickNameTitle>
                        <RecruitingBottomLocationTitle>
                            서대문구 남가좌동
                        </RecruitingBottomLocationTitle>
                        <RecruitingBottomMainContentWrapper>
                            <RecruitingTabbarWrapper>
                                <RecruitingTabbar>
                                    모집 중
                                </RecruitingTabbar>
                                <RecruitingTabbar>
                                    모집 완료
                                </RecruitingTabbar>
                            </RecruitingTabbarWrapper>
                            <RecruitingItemWholeWrapper>
                                <RecruitingItemWrapper>
                                    <RecruitingItemPhotoWrapper>
                                        <RecruitingItemPhoto>
                                            <RecruitingItemDefaultThumbnail>
                                            </RecruitingItemDefaultThumbnail>
                                        </RecruitingItemPhoto>
                                    </RecruitingItemPhotoWrapper>
                                    <RecruitingItemDetailWrapper>
                                        <RecruitingItemDetail>
                                            <RecruitingItemDetailTitle>
                                                상품명
                                            </RecruitingItemDetailTitle>
                                            <RecruitingItemDetailContent>
                                                모집 인원 | 2명 <br />
                                                모집 마감 | D-2
                                            </RecruitingItemDetailContent>
                                            <RecruitingItemDetailPrice>
                                                25000원
                                            </RecruitingItemDetailPrice>
                                        </RecruitingItemDetail>
                                    </RecruitingItemDetailWrapper>
                                </RecruitingItemWrapper>

                                <RecruitingItemWrapper>
                                    <RecruitingItemPhotoWrapper>
                                        <RecruitingItemPhoto>
                                            <RecruitingItemDefaultThumbnail>
                                            </RecruitingItemDefaultThumbnail>
                                        </RecruitingItemPhoto>
                                    </RecruitingItemPhotoWrapper>
                                    <RecruitingItemDetailWrapper>
                                        <RecruitingItemDetail>
                                            <RecruitingItemDetailTitle>
                                                상품명
                                            </RecruitingItemDetailTitle>
                                            <RecruitingItemDetailContent>
                                                모집 인원 | 5명 <br />
                                                모집 마감 | D-5
                                            </RecruitingItemDetailContent>
                                            <RecruitingItemDetailPrice>
                                                12000원
                                            </RecruitingItemDetailPrice>
                                        </RecruitingItemDetail>
                                    </RecruitingItemDetailWrapper>
                                </RecruitingItemWrapper>

                                <RecruitingItemWrapper>
                                    <RecruitingItemPhotoWrapper>
                                        <RecruitingItemPhoto>
                                            <RecruitingItemDefaultThumbnail>
                                            </RecruitingItemDefaultThumbnail>
                                        </RecruitingItemPhoto>
                                    </RecruitingItemPhotoWrapper>
                                    <RecruitingItemDetailWrapper>
                                        <RecruitingItemDetail>
                                            <RecruitingItemDetailTitle>
                                                상품명
                                            </RecruitingItemDetailTitle>
                                            <RecruitingItemDetailContent>
                                                모집 인원 | 1명 <br />
                                                모집 마감 | D-4
                                            </RecruitingItemDetailContent>
                                            <RecruitingItemDetailPrice>
                                                7000원
                                            </RecruitingItemDetailPrice>
                                        </RecruitingItemDetail>
                                    </RecruitingItemDetailWrapper>
                                </RecruitingItemWrapper>

                                
                            </RecruitingItemWholeWrapper>
                        </RecruitingBottomMainContentWrapper>
                    </RecruitingBottomNickNameWrapper>
                    {/* <RecruitingContentWrapper>
                        <RecruitingContent>
                            우리 동네 설정
                        </RecruitingContent>
                        <RecruitingContent>
                            모집한 공동구매
                        </RecruitingContent>
                        <RecruitingContent>
                            참여한 공동구매
                        </RecruitingContent>
                        <RecruitingContent>
                            로그아웃
                        </RecruitingContent>
                        <RecruitingContent>
                            계정 탈퇴
                        </RecruitingContent>
                    </RecruitingContentWrapper> */}
                </RecruitingBottomSheetWrapper>
            </RecruitingBottomWrapper>
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
        </RecruitingContainer>
    )
}

export default Recruiting