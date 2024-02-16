import * as itemMainPage from "../MainPage/styled/MainPage.main.style"
import * as itemCategory from "../MainPage/styled/MainPage.main.CategoryList.style"
import * as itemCategoryDetails from "../MainPage/styled/MainPage.CategoryDatailPage.style"
import * as itemS from "./styled/Recruitment.main.style"
import * as itemC from "../MainPage/styled/MainPage.main.CategoryList.Category.style";
import camera from  "../../../public/RecruitmentPage/camera.png"

import TradingLocation from "./Recruitment.TradingLocation"
import RecruitmentModal from "./Recruitment.modal"
import client from "../../client"

import React, { useState, startTransition, useRef } from 'react';
import { useNavigate } from "react-router-dom"

function Recruitment() {
    const navigate = useNavigate();
    // const date = new Date(Date.now);

    const [formData, setFormData] = useState({
        'deadline': "2024-02-15T00:00:00.000Z",
    });
    const [selectedCategory, setSelectedCategory] = useState();

    const [isModalOpen, setModalOpen] = useState(false);
    const [isTradingLocation, setIsTradingLocation] = useState(false);
    const [isType, setIsType] = useState('');

    const inputFileRef = useRef(null);
    const MAX_IMAGES = 10; // 최대 이미지 수
    const [selectedImages, setSelectedImages] = useState([]);

    const handleCategory = (category) => {
        setSelectedCategory(category);
        setFormData({
            ...formData,
            'categoryId': category.id,
        });
    };

    const handlePeople = (value) => {
        setFormData({
            ...formData,
            'personnel': parseInt(value, 10),
        });
    };

    const handleLocationData = (data) => {
        setFormData({
            ...formData,
            'dealLocation': {
                "name": data.roadAddress,
                "latitude": data.myLocation.lat,
                "longitude": data.myLocation.lng
            },
            'dealTown': data.dealTown,
        });
    };

    const handleProductName = (e) => {
        setFormData({
            ...formData,
            'productName': e.target.value,
        });
    }

    const handlePrice = (e) => {
        setFormData({
            ...formData,
            'price': e.target.value,
        });
    }

    const handleDesc = (e) => {
        setFormData({
            ...formData,
            'description': e.target.value,
        });
    }

    const toggleModal = (type) => {
        setIsType(type);
        setModalOpen(!isModalOpen);
    };

    const openTradingLocation = () => {
        startTransition(() => {
            setIsTradingLocation(!isTradingLocation);
            console.log(isTradingLocation);
        });
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (selectedImages.length < MAX_IMAGES) { // 이미지 수 제한 확인
            setSelectedImages([...selectedImages, file]);
        } else {
            // 이미지 수 초과 처리
            alert('이미지는 최대 열 개까지 선택할 수 있습니다.');
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        setSelectedImages(selectedImages.filter((_, index) => index !== indexToRemove));
    };

    const submitBtn = () => {
        const auth = import.meta.env.VITE_AUTH;
        const requestBody = new FormData();
        // JSON 데이터를 Blob 형태로 변환하여 FormData에 추가
        const jsonRecruitmentData = JSON.stringify(formData);
        const jsonBlob = new Blob([jsonRecruitmentData], { type: 'application/json' });
        requestBody.append('request', jsonBlob);
        selectedImages.forEach(image => requestBody.append('files', image));

        const fetchData = async () => {
            try {
                const response = await client(auth).post(
                    '/posts',  // 요청을 보낼 엔드포인트 URL
                    // 전송할 데이터
                    requestBody,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",  // 전송할 데이터의 타입
                        }
                    }
                );
                console.log('응답 받았다!', response);
                alert('모집 글이 등록되었습니다!')
                navigate('/');
            } catch (error) {
                console.error('안된다!!:', error);
            }
        };
        fetchData();
    }

    return (
        <>
            <itemMainPage.MainPageContainer>
                {/* 모달이 열려있을 때만 모달 컴포넌트를 렌더링 */}
                {isModalOpen && (
                    <>
                        <itemS.Backdrop onClick={toggleModal}>
                            <RecruitmentModal data={isType} onCategory={handleCategory} onPeople={handlePeople} />
                        </itemS.Backdrop>
                    </>
                )}
                {!isModalOpen && (
                    <>
                        {formData.categoryId && formData.personnel && formData.productName && formData.dealLocation && formData.dealTown && formData.price && selectedImages.length !== 0 ? (
                            <itemS.CompleteBtn onClick={submitBtn} type='complete'>모집 완료</itemS.CompleteBtn>
                        ) : (
                            <itemS.CompleteBtn>모집 완료</itemS.CompleteBtn>
                        )}

                    </>
                )}
                {isTradingLocation && (
                    <>
                        <TradingLocation openTradingLocation={openTradingLocation} onLocationData={handleLocationData} />
                    </>
                )}
                {!isTradingLocation && (<>
                    <itemCategoryDetails.CategoryTitleContainer type='recruit'>
                        <itemCategoryDetails.BackBtn onClick={() => { navigate(-1); }} />
                        <itemCategoryDetails.CategoryTitle>모집하기</itemCategoryDetails.CategoryTitle>
                    </itemCategoryDetails.CategoryTitleContainer>
                    <itemCategory.CategoryListContainer>
                        <itemS.FiltersContainer>
                            {selectedCategory ? (
                                <>
                                    <itemS.FilterWrapper style={{ background: "#2B4760" }} type='margin'>
                                        <itemS.FilterText style={{ color: "#FFF" }} onClick={() => toggleModal('category')}>{selectedCategory.name}</itemS.FilterText>
                                    </itemS.FilterWrapper>
                                </>
                            ) : (
                                <>
                                    <itemS.FilterWrapper type='margin'>
                                        <itemS.FilterText onClick={() => toggleModal('category')}>카테고리 선택</itemS.FilterText>
                                    </itemS.FilterWrapper>
                                </>
                            )}
                            <itemS.FilterWrapper type='margin'>
                                <itemS.FilterText onClick={() => toggleModal('date')}>모집 기간 선택</itemS.FilterText>
                            </itemS.FilterWrapper>
                            {formData.personnel ? (
                                <>
                                    <itemS.FilterWrapper style={{ background: "#2B4760" }}>
                                        <itemS.FilterText style={{ color: "#FFF" }} onClick={() => toggleModal('people')}>{formData.personnel}명</itemS.FilterText>
                                    </itemS.FilterWrapper>
                                </>
                            ) : (
                                <>
                                    <itemS.FilterWrapper>
                                        <itemS.FilterText onClick={() => toggleModal('people')}>상품 수량 선택</itemS.FilterText>
                                    </itemS.FilterWrapper>
                                </>
                            )}
                        </itemS.FiltersContainer>
                        <itemS.ProductInfoContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>상품명<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                                <itemS.ProductInput placeholder='상품명' onChange={handleProductName}></itemS.ProductInput>
                            </itemS.InfoElementContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>이미지 선택<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                                <itemS.ImgContainer>
                                    <itemS.SelectImgLabel htmlFor='img'>
                                        <itemS.CameraIcon src={camera}/>
                                        <itemS.SelectImg
                                            type="file"
                                            id='img'
                                            accept="image/*"
                                            ref={inputFileRef}
                                            onChange={handleFileChange}
                                        />
                                    </itemS.SelectImgLabel>
                                    <itemC.ItemsContainer>
                                        {selectedImages.map((image, index) => (
                                            <itemS.ImgWrapper key={index} onClick={() => handleRemoveImage(index)}>
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`Image ${index}`}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }}
                                                />
                                            </itemS.ImgWrapper>
                                        ))}
                                    </itemC.ItemsContainer>
                                </itemS.ImgContainer>
                            </itemS.InfoElementContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>거래 희망 장소<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                                <itemS.ProductInput placeholder='위치 추가' onClick={openTradingLocation} value={formData.dealTown ? formData.dealTown : ''} onChange={(e) => setFormData({ ...formData, dealTown: e.target.value })} ></itemS.ProductInput>
                            </itemS.InfoElementContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>가격<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                                <itemS.ProductInput placeholder='가격을 입력해 주세요' onChange={handlePrice}></itemS.ProductInput>
                            </itemS.InfoElementContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>상세설명</itemS.ProductText>
                                <itemS.ProductInput type='desc' placeholder='게시글 내용을 작성해 주세요' onChange={handleDesc}></itemS.ProductInput>
                            </itemS.InfoElementContainer>
                        </itemS.ProductInfoContainer>
                    </itemCategory.CategoryListContainer>
                </>
                )}
            </itemMainPage.MainPageContainer>
        </>
    )
}

export default Recruitment