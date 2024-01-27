import * as itemMainPage from "../MainPage/styled/MainPage.main.style"
import * as itemCategory from "../MainPage/styled/MainPage.main.CategoryList.style"
import * as itemCategoryDetails from "../MainPage/styled/MainPage.CategoryDatailPage.style"
import * as itemS from "./styled/Recruitment.main.style"

import RecruitmentModal from "./Recruitment.modal"

import React, { useState } from 'react';

function Recruitment() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isType, setIsType] = useState('');

    const toggleModal = (type) => {
        console.log("click");
        setIsType(type);
        setModalOpen(!isModalOpen);
    };
    return (
        <>
            <itemMainPage.MainPageContainer>
                {/* 모달이 열려있을 때만 모달 컴포넌트를 렌더링 */}
                {isModalOpen && (
                    <>
                        <itemS.Backdrop onClick={toggleModal}>
                            <RecruitmentModal data={isType}/>
                        </itemS.Backdrop>
                    </>
                )}
                {!isModalOpen && (
                    <>
                        <itemS.CompleteBtn>모집 완료</itemS.CompleteBtn>
                    </>
                )}
                <itemCategoryDetails.CategoryTitleContainer type='recruit'>
                    <itemCategoryDetails.BackBtn />
                    <itemCategoryDetails.CategoryTitle>모집하기</itemCategoryDetails.CategoryTitle>
                </itemCategoryDetails.CategoryTitleContainer>
                <itemCategory.CategoryListContainer>
                    <itemS.FiltersContainer>
                        <itemS.FilterWrapper>
                            <itemS.FilterText onClick={() => toggleModal('category')}>카테고리 선택</itemS.FilterText>
                        </itemS.FilterWrapper>
                        <itemS.FilterWrapper>
                            <itemS.FilterText onClick={() => toggleModal('date')}>모집 기간 선택</itemS.FilterText>
                        </itemS.FilterWrapper>
                        <itemS.FilterWrapper>
                            <itemS.FilterText onClick={() => toggleModal('people')}>모집 인원 선택</itemS.FilterText>
                        </itemS.FilterWrapper>
                    </itemS.FiltersContainer>
                    <itemS.ProductInfoContainer>
                        <itemS.InfoElementContainer>
                            <itemS.ProductText>상품명<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                            <itemS.ProductInput placeholder='상품명'></itemS.ProductInput>
                        </itemS.InfoElementContainer>
                        <itemS.InfoElementContainer>
                            <itemS.ProductText>이미지 선택<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                            <itemS.SelectImg></itemS.SelectImg>
                        </itemS.InfoElementContainer>
                        <itemS.InfoElementContainer>
                            <itemS.ProductText>거래 희망 장소<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                            <itemS.ProductInput placeholder='위치 추가'></itemS.ProductInput>
                        </itemS.InfoElementContainer>
                        <itemS.InfoElementContainer>
                            <itemS.ProductText>가격<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                            <itemS.ProductInput placeholder='가격을 입력해 주세요'></itemS.ProductInput>
                        </itemS.InfoElementContainer>
                        <itemS.InfoElementContainer>
                            <itemS.ProductText>상세설명</itemS.ProductText>
                            <itemS.ProductInput type='desc' placeholder='게시글 내용을 작성해 주세요'></itemS.ProductInput>
                        </itemS.InfoElementContainer>
                    </itemS.ProductInfoContainer>
                </itemCategory.CategoryListContainer>
            </itemMainPage.MainPageContainer>
        </>
    )
}

export default Recruitment