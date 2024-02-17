import * as itemS from "./styled/ProductPage.main.info.notice.style"
import { differenceInCalendarDays } from "date-fns";
import { useNavigate } from "react-router-dom";

function Notice({notice, id}) {

    const navigate = useNavigate() ;

    return(
        <>
            <itemS.NoticeContainer onClick={() => navigate(`/product/${id}/notice/${notice.noticeId}`)}>
                <itemS.Notice>
                    <itemS.Title>{notice.title}</itemS.Title>
                    <itemS.Content>{notice.content}</itemS.Content>
                </itemS.Notice>
                <itemS.Day>{differenceInCalendarDays(new Date(), notice.createdAt)}일 전</itemS.Day>
            </itemS.NoticeContainer>
        </>
    )
}

export default Notice