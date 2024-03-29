import * as itemS from "./styled/NoticePage.write.style"
import * as C from "./styled/NoticePage.component.style"
import { useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import client from "../../client";
import camera from  "../../../public/RecruitmentPage/camera.png"
import { useEffect } from "react"
import Loading from "../LoadingPage/LoadingPage.main"
import BackIcon from "../../../public/SearchPage/backIcon.png"

import { AuthAtom } from "../../recoil/atoms/AuthAtom";
import { useRecoilState } from "recoil";

function NoticeWritePage() {
    const [accessToken] = useRecoilState(AuthAtom);

    const { id } = useParams() ;
    const { noticeId } = useParams() ;
    const navigate = useNavigate() ;

    const [formData, setFormData] = useState({}) ;
    const [importData, setImportData] = useState({}) ;
    const [loading, setLoading] = useState('loading') ;

    const inputFileRef = useRef(null) ;
    const MAX_IMAGES = 1 ;
    const [selectedImages, setSelectedImages] = useState([]);
    
    useEffect(() => {
        if (noticeId) {
            const fetchData = async () => {
                try {
                    const response = await client(accessToken).get(
                        `/notices/${noticeId}`
                    ) ;
                    setImportData(response.data.result.noticeDTO) ;
                    setLoading('done') ;
                } catch (error) {
                    console.error("실패", error) ;
                }
            } ;
            fetchData() ;
        } else {
            setLoading('done') ;
        }
    }, [noticeId]) ;

    useEffect(() => {
        if (importData && Object.keys(importData).length > 0) {
            setFormData({
                title: importData.title || '',
                content: importData.content || '',
            });
        }
    }, [importData]);    

    const handleTitle = (e) => {
        setFormData({
            ...formData,
            'title': e.target.value,
        })
    }

    const handleContent = (e) => {
        setFormData({
            ...formData,
            'content': e.target.value,
        })
    }
    
    const handleFileChange = (event) => {
        const files = event.target.files;
    if (selectedImages.length + files.length <= MAX_IMAGES) { // 이미지 수 제한 확인
        setSelectedImages([...files]);
    } else {
        // 이미지 수 초과 처리
        alert('이미지는 한 개만 선택할 수 있습니다.');
        setSelectedImages([]);
    }
    };

    const handleRemoveImage = () => {
        setSelectedImages([]);
    };

    const handleSubmit = () => {
        const requestBody = new FormData() ;
        // JSON 데이터를 Blob 형태로 변환하여 FormData에 추가
        const jsonRecruitmentData = JSON.stringify(formData);
        const jsonBlob = new Blob([jsonRecruitmentData], { type: 'application/json' });
        requestBody.append('request', jsonBlob);
        selectedImages.forEach(image => requestBody.append('file', image));

        if (!noticeId) {
            const fetchData = async () => {
                try {
                    const response = await client(accessToken).post(
                        `/posts/${id}/notices`, 
                        requestBody, 
                        {
                            headers: {
                                "Content-Type": "multipart/form-data", 
                            },
                        }
                    ) ;
                    navigate(`/product/${id}`) ;
                } catch (error) {
                    console.error("실패", error) ;
                }
            } ;
            fetchData() ;
        } else {
            const fetchData = async () => {
                try {
                    const response = await client(accessToken).patch(
                        `/posts/${id}/notices/${noticeId}`, 
                        requestBody, 
                        {
                            headers: {
                                "Content-Type": "multipart/form-data", 
                            },
                        }
                    ) ;
                    navigate(`/product/${id}`) ;
                } catch (error) {
                    console.error("실패", error) ;
                }
            } ;
            fetchData() ;
        }
    }

    if (loading !== 'done') {
        return <Loading />
    }

    return(
        <>
            <C.NoticeWriteContainer>
                <C.NoticeHeader>
                    <img src={BackIcon} alt="backIcon" onClick={() => navigate(-1)}/>
                    <div>공지사항</div>
                </C.NoticeHeader>
                <C.WriteContainer>
                    <itemS.Title>
                        <div>제목</div>
                        <itemS.EssentialIcon>*</itemS.EssentialIcon>
                    </itemS.Title>
                    <itemS.TitleInput placeholder="제목을 입력해주세요." value={formData.title || ""} onChange={handleTitle}/>
                    <itemS.Title>이미지 첨부</itemS.Title>
                    
                    <itemS.ImgContainer>
                        <itemS.SelectImgLabel htmlFor='img'>
                            <itemS.CameraIcon src={camera}/>
                            <itemS.SelectImg
                                type="file"
                                id='img'
                                accept="image/*"
                                ref={inputFileRef}
                                onChange={handleFileChange}
                                multiple
                            />
                        </itemS.SelectImgLabel>
                        <itemS.ItemsContainer>
                            {selectedImages.map((image, index) => (
                                <itemS.ImgWrapper key={index} onClick={() => handleRemoveImage()}>
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Image ${index}`}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }}
                                     />
                                </itemS.ImgWrapper>
                            ))}
                        </itemS.ItemsContainer>
                    </itemS.ImgContainer>

                    <itemS.Title>
                        <div>내용</div>
                        <itemS.EssentialIcon>*</itemS.EssentialIcon>
                    </itemS.Title>
                    <itemS.ContentInput placeholder="내용을 입력해주세요." value={formData.content || ""} onChange={handleContent}/>
                </C.WriteContainer>
            </C.NoticeWriteContainer>
            <itemS.BtnContainer>
                {formData.title && formData.content? 
                <itemS.Btn type="complete" onClick={handleSubmit} >작성 완료</itemS.Btn>
                :
                <itemS.Btn>작성 완료</itemS.Btn>
                }
                
            </itemS.BtnContainer>
        </>
    )
}

export default NoticeWritePage