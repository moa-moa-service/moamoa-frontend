import * as C from "./styled/NoticePage.component.style"
import * as itemS from "./styled/NoticePage.notice.style"

import Comment from "./NoticePage.notice.comment"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import client from "../../client";
import { differenceInCalendarDays, intervalToDuration } from "date-fns";

import Loading from "../LoadingPage/LoadingPage.main";

function NoticePage() {

    const { noticeId } = useParams() ;
    const [notice, setNotice] = useState() ;
    const [comments, setComments] = useState() ;
    const [author, setAuthor] = useState() ;

    const [modalOpen, setModalOpen] = useState(false) ;

    useEffect(() => {
        const auth = import.meta.env.VITE_AUTH ;

        const fetchData = async () => {
            try {
                const response = await client(auth).get(
                    `/notices/${noticeId}`
                ) ;
                setNotice(response.data.result.noticeDTO) ;
                setComments(response.data.result.noticeDTO.commentDTOList) ;
                setAuthor(response.data.result.author) ;
            } catch (error) {
                console.error("실패", error) ;
            }
        } ;
        fetchData() ;
    }, []) ;
    
    const modalHandle = () => {
        setModalOpen(!modalOpen) ;
    }

    if(!notice) {
        return <Loading />
    }

    return(
        <>
            <C.NoticeWriteContainer>
                <C.NoticeHeader>
                    <img src="../../../public/SearchPage/backIcon.png" alt="backIcon" />
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
                                <div>수정하기</div>
                                <img src="../../../public/NoticePage/pencil.png" />
                                </itemS.ModalContent>
                            <itemS.ModalContent color="red">
                                <div>삭제하기</div>
                                <img src="../../../public/NoticePage/delete.png" />
                            </itemS.ModalContent>
                        </itemS.ModalContainer>
                    }
                    <itemS.Line />
                    <itemS.Content>{notice.content}</itemS.Content>
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
                    <itemS.UserImg />
                    <itemS.CommentInput placeholder="댓글을 입력해 주세요." />
                    <itemS.DoneBtn>완료</itemS.DoneBtn>
                </itemS.WriteCommentContainer>
            </C.NoticeWriteContainer>
        </>
    )
}

export default NoticePage