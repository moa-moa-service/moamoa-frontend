import * as itemMainPage from "../MainPage/styled/MainPage.main.style"
import * as itemCategory from "../MainPage/styled/MainPage.main.CategoryList.style"
import * as itemCategoryDetails from "../MainPage/styled/MainPage.CategoryDatailPage.style"
import * as itemS from "./styled/Recruitment.main.style"
import * as itemC from "../MainPage/styled/MainPage.main.CategoryList.Category.style";
import camera from "../../../public/RecruitmentPage/camera.png"
import BackIcon from '../../../public/SearchPage/backIcon.png'


import TradingLocation from "./Recruitment.TradingLocation"
import RecruitmentModal from "./Recruitment.modal"
import client from "../../client"

import React, { useState, startTransition, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthAtom } from "../../recoil/atoms/AuthAtom";
import { useRecoilState } from 'recoil';

function Recruitment(props) {
    const [postId] = useState(props.postId);
    const [accessToken] = useRecoilState(AuthAtom);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedPeriod, setSelectedPeriod] = useState();

    const [isModalOpen, setModalOpen] = useState(false);
    const [isTradingLocation, setIsTradingLocation] = useState(false);
    const [isType, setIsType] = useState('');

    const inputFileRef = useRef(null);
    const MAX_IMAGES = 10; // 최대 이미지 수
    const [selectedImages, setSelectedImages] = useState([]);
    const [postImages, setPostImages] = useState([]);

    const categories = [
        { id: 1, name: '생활가전' },
        { id: 2, name: '생활/주방' },
        { id: 3, name: '디지털기기' },
        { id: 4, name: '가구/인테리어' },
        { id: 5, name: '의류' },
        { id: 6, name: '유아동' },
        { id: 7, name: '식품' },
        { id: 8, name: '뷰티/미용' },
        { id: 9, name: '반려동물용품' },
        { id: 10, name: '도서' },
        { id: 11, name: '문구' },
        { id: 12, name: '식물' },
        { id: 13, name: '티켓' },
        { id: 14, name: '게임' },
        { id: 15, name: '음반' }
    ];

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

    const handlePeriod = (value) => {
        setSelectedPeriod(value);
    };

    const handleDate = (value) => {
        setFormData({
            ...formData,
            'deadline': value,
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
            'town': data.town,
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
        const files = event.target.files;
        if (selectedImages.length + files.length <= MAX_IMAGES) { // 이미지 수 제한 확인
            setSelectedImages([...selectedImages, ...files]);
        } else {
            // 이미지 수 초과 처리
            alert('이미지는 최대 열 개까지 선택할 수 있습니다.');
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        if (postId !== undefined) {
            setPostImages(postImages.filter((_, index) => index !== indexToRemove));
        } else {
            setSelectedImages(selectedImages.filter((_, index) => index !== indexToRemove));
        }
    };

    const submitBtn = () => {
        console.log('데이터',formData);
        console.log('추가 이미지',selectedImages);
        console.log('기존 이미지', postImages);
        const requestBody = new FormData();
        // JSON 데이터를 Blob 형태로 변환하여 FormData에 추가
        const jsonRecruitmentData = JSON.stringify(formData);
        const jsonBlob = new Blob([jsonRecruitmentData], { type: 'application/json' });
        requestBody.append('request', jsonBlob);
        if (postId !== undefined && postImages.length > 0) {
            postImages.forEach(image => requestBody.append('files', image));
        }
        if (selectedImages) {
            selectedImages.forEach(image => requestBody.append('files', image));
        }

        const fetchData = async () => {
            try {
                if (postId !== undefined) {
                    const response = await client(accessToken).patch(
                        `/posts/${postId}`,  // 요청을 보낼 엔드포인트 URL
                        // 전송할 데이터
                        requestBody,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",  // 전송할 데이터의 타입
                            }
                        }
                    );
                    console.log('응답 받았다!', response);
                    alert('모집 글이 수정되었습니다!')
                    navigate('/');
                } else {
                    const response = await client(accessToken).post(
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
                }
            } catch (error) {
                console.error('안된다!!:', error);
            }
        };
        fetchData();
    }

    useEffect(() => {
        if (postId !== undefined) {
            const fetchData = async () => {
                try {
                    const response = await client(accessToken).post(
                        `/posts/${postId}`
                    );
                    const postData = response.data.result.postDto

                    const findCategoryByName = (categories, categoryName) => {
                        return categories.find(category => category.name === categoryName);
                    };
                    const matchingCategory = findCategoryByName(categories, postData.category);

                    // 비교할 날짜 문자열
                    const targetDateString = postData.deadline;

                    // 비교할 날짜를 Date 객체로 변환
                    const targetDate = new Date(targetDateString);

                    // 현재 날짜를 얻기 위해 새 Date 객체 생성
                    const currentDate = new Date();

                    // 날짜 차이를 계산 (밀리초 단위)
                    const differenceInMillis = targetDate - currentDate;

                    // 날짜 차이를 일로 변환
                    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

                    // 소수점 이하 버림하여 정수로 변환
                    const differenceInDaysRounded = Math.floor(differenceInDays);

                    setSelectedCategory(matchingCategory);
                    setSelectedPeriod(differenceInDaysRounded);

                    setPostImages(postData.imageUrl);
                    setFormData({
                        ...formData,
                        'categoryId': matchingCategory.id,
                        'personnel': postData.personnel,
                        'deadline': postData.deadline,
                        'dealLocation': postData.dealLocation,
                        'price': postData.price,
                        'description': postData.description,
                        'town': postData.town,
                        'productName': postData.productName,
                        'dealTown': postData.dealTown
                    });
                } catch (error) {
                    console.error('안된다!!:', error);
                }
            };
            fetchData();
        }
    }, [postId]);


    return (
        <>
            <itemMainPage.MainPageContainer>
                {/* 모달이 열려있을 때만 모달 컴포넌트를 렌더링 */}
                {isModalOpen && (
                    <>
                        <itemS.Backdrop onClick={toggleModal}>
                            <RecruitmentModal data={isType} onCategory={handleCategory} onPeople={handlePeople} onPeriod={(handlePeriod)} onDate={handleDate} />
                        </itemS.Backdrop>
                    </>
                )}
                {!isModalOpen && (
                    <>
                        { formData.categoryId && formData.personnel && formData.productName && formData.dealLocation && formData.dealTown && formData.price && (selectedImages.length !== 0 || postImages.length !== 0) ? (
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
                        <itemCategoryDetails.BackBtn src={BackIcon} onClick={() => { navigate(-1); }} />
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
                            {selectedPeriod ? (
                                <>
                                    <itemS.FilterWrapper type='margin' style={{ background: "#2B4760" }}>
                                        <itemS.FilterText style={{ color: "#FFF" }} onClick={() => toggleModal('date')}>{selectedPeriod}일</itemS.FilterText>
                                    </itemS.FilterWrapper>
                                </>
                            ) : (
                                <>
                                    <itemS.FilterWrapper type='margin'>
                                        <itemS.FilterText onClick={() => toggleModal('date')}>모집 기간 선택</itemS.FilterText>
                                    </itemS.FilterWrapper>
                                </>
                            )}
                            {/* <itemS.FilterWrapper type='margin'>
                                <itemS.FilterText onClick={() => toggleModal('date')}>모집 기간 선택</itemS.FilterText>
                            </itemS.FilterWrapper> */}
                            {formData.personnel ? (
                                <>
                                    <itemS.FilterWrapper style={{ background: "#2B4760" }}>
                                        <itemS.FilterText style={{ color: "#FFF" }} onClick={() => toggleModal('people')}>{formData.personnel}개</itemS.FilterText>
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
                                <itemS.ProductInput placeholder='상품명' value={formData.productName} onChange={handleProductName}></itemS.ProductInput>
                            </itemS.InfoElementContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>이미지 선택<itemS.ProductText type='asterisk'>*</itemS.ProductText></itemS.ProductText>
                                <itemS.ImgContainer>
                                    <itemS.SelectImgLabel htmlFor='img'>
                                        <itemS.CameraIcon src={camera} />
                                        <itemS.SelectImg
                                            type="file"
                                            id='img'
                                            accept="image/*"
                                            ref={inputFileRef}
                                            onChange={handleFileChange}
                                            multiple
                                        />
                                    </itemS.SelectImgLabel>
                                    <itemC.ItemsContainer>
                                        {postImages.map((image, index) => (
                                            <itemS.ImgWrapper key={index} onClick={() => handleRemoveImage(index)}>
                                                <img
                                                    src={image}
                                                    alt={`Image ${index}`}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }}
                                                />
                                            </itemS.ImgWrapper>
                                        ))}
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
                                <itemS.ProductInput placeholder='가격을 입력해 주세요' value={formData.price} onChange={handlePrice}></itemS.ProductInput>
                            </itemS.InfoElementContainer>
                            <itemS.InfoElementContainer>
                                <itemS.ProductText>상세설명</itemS.ProductText>
                                <itemS.ProductInput type='desc' placeholder='게시글 내용을 작성해 주세요' value={formData.description} onChange={handleDesc}></itemS.ProductInput>
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