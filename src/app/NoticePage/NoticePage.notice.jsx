import * as C from "./styled/NoticePage.component.style"
import * as itemS from "./styled/NoticePage.notice.style"

import Comment from "./NoticePage.notice.comment"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import client from "../../client";
import { differenceInCalendarDays, intervalToDuration } from "date-fns";

import { AuthAtom } from "../../recoil/atoms/AuthAtom";
import { useRecoilState } from "recoil";

import Loading from "../LoadingPage/LoadingPage.main";
import NoticeWritePage from "./NoticePage.write";

function NoticePage() {

    const navigate = useNavigate() ;
    const [accessToken] = useRecoilState(AuthAtom);

    const { id } = useParams() ;
    const { noticeId } = useParams() ;
    const [notice, setNotice] = useState() ;
    const [comments, setComments] = useState([]) ;
    const [author, setAuthor] = useState() ;
    const [noticeImg, setNoticeImg] = useState([]) ;
    const [userImg, setUserImg] = useState() ;

    const [modalOpen, setModalOpen] = useState(false) ;
    const [inputComment, setInputComment] = useState('') ;
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client(accessToken).get(
                    `/notices/${noticeId}`
                ) ;
                setNotice(response.data.result.noticeDTO) ;
                setComments(response.data.result.noticeDTO.commentDTOList) ;
                setAuthor(response.data.result.author) ;
                setNoticeImg(response.data.result.noticeDTO.imageUrl) ;
            } catch (error) {
                console.error("실패", error) ;
            }
        } ;
        fetchData() ;
    }, []) ;
    
    const modalHandle = () => {
        setModalOpen(!modalOpen) ;
    }

    const modifyHandle = () => {
        navigate(`/product/${id}/notice/${noticeId}/update`) ;
    }

    const deleteNotice = async () => {
        try {
            const response = await client(accessToken).delete(
                `/notices/${noticeId}`
            ) ;
            navigate(`/product/${id}`) ;
        } catch (error) {
            console.log("실패", error) ;
        }
    }

    const commentInputHandle = (e) => {
        setInputComment(e.target.value) ;
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            commentSubmit() ;
        }
    }

    const commentSubmit = async () => {
        try {
            const response = await client(accessToken).post(
                `/notices/${noticeId}/comments`, {
                    'content': inputComment, 
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ) ;
            window.location.reload() ;
        } catch (error) {
            console.error("실패", error) ;
        }
    }

    const imgRendering = () => {
        if(!noticeImg || typeof(noticeImg) === 'string') {
            return <img src={noticeImg} />
        } else {
            return (
                <>
                    {noticeImg.map((img, index) => (
                        <img src={img} key={index} />
                    ))}
                </>
            )
        }
    }


    if(!notice || !userImg) {
        return <Loading />
    }

    return(
        <>
            <C.NoticeWriteContainer>
                <C.NoticeHeader>
                    <img src="../../../public/SearchPage/backIcon.png" alt="backIcon" onClick={() => navigate(`/product/${id}`)} />
                    <div>공지사항</div>
                </C.NoticeHeader>
                <C.WriteContainer>
                    <itemS.Title>{notice.title}</itemS.Title>
                    <itemS.WriteInfo>
                        <div>{author}</div>
                        <div> | </div>
                        <div>{differenceInCalendarDays(new Date(), notice.createdAt)}일 전</div>
                    </itemS.WriteInfo>
                    <itemS.MoreIcon src="../../../public/NoticePage/moreIcon.png" onClick={modalHandle}/>
                    { modalOpen && 
                        <itemS.ModalContainer>
                            <itemS.ModalContent>
                                <div onClick={modifyHandle}>수정하기</div>
                                <img src="../../../public/NoticePage/pencil.png" />
                                </itemS.ModalContent>
                            <itemS.ModalContent color="red" onClick={deleteNotice}>
                                <div>삭제하기</div>
                                <img src="../../../public/NoticePage/delete.png" />
                            </itemS.ModalContent>
                        </itemS.ModalContainer>
                    }
                    <itemS.Line />
                    <itemS.Content>
                        <div>{notice.content}</div>
                        <itemS.NoticeImgContainer>
                            {imgRendering()}
                        </itemS.NoticeImgContainer>
                    </itemS.Content>
                    <itemS.Line />
                    <itemS.CommentContainer>
                        <itemS.CommentHeader>
                            <div>댓글</div>
                            <div>{comments.length}</div>
                        </itemS.CommentHeader>
                        {comments.map((comment, index) => (
                            <Comment key={index} comment={comment}/>
                        ))}
                    </itemS.CommentContainer>
                </C.WriteContainer>
                <itemS.WriteCommentContainer>
                    <itemS.UserImg src={userImg} />
                    <itemS.CommentInput placeholder="댓글을 입력해 주세요." onKeyPress={onEnterKeyPress} onChange={commentInputHandle}/>
                    <itemS.DoneBtn onClick={commentSubmit}>완료</itemS.DoneBtn>
                </itemS.WriteCommentContainer>
            </C.NoticeWriteContainer>
        </>
    )
}

export default NoticePage