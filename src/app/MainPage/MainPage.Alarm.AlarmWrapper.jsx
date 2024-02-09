import * as itemS from "./styled/MainPage.Alarm.style"
import * as itemDetail from './styled/MainPage.CategoryDatailPage.style'


function AlarmWrapper() {
    return (
        <>
            <itemS.AlarmWrapper>
                <itemDetail.BackBtn />
                <itemS.AlarmTextContainer>
                    <itemS.TextContainer>
                        <itemS.Text>댓글</itemS.Text>
                        <itemS.Text>3분 전</itemS.Text>
                    </itemS.TextContainer>
                    <itemS.TextContainer type='content'>
                        <itemS.Text type='bold'>양키</itemS.Text>
                        <itemS.Text type='content'>님이 공지사항 제목에 댓글을 달았어요!</itemS.Text>
                    </itemS.TextContainer>
                </itemS.AlarmTextContainer>
            </itemS.AlarmWrapper>
        </>
    )
}

export default AlarmWrapper;