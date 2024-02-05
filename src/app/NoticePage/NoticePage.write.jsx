import * as itemS from "./styled/NoticePage.write.style"

function NoticeWritePage() {
    return(
        <>
            <itemS.NoticeWriteContainer>
                <itemS.NoticeHeader>
                    <img src="../../../public/SearchPage/backIcon.png" alt="backIcon" />
                    <div>공지사항</div>
                </itemS.NoticeHeader>
                <itemS.WriteContainer>
                    <itemS.Title>
                        <div>제목</div>
                        <itemS.EssentialIcon>*</itemS.EssentialIcon>
                    </itemS.Title>
                    <itemS.TitleInput placeholder="제목을 입력해주세요." />
                    <itemS.Title>이미지 첨부</itemS.Title>
                    <itemS.ImgInput />
                    <itemS.Title>
                        <div>내용</div>
                        <itemS.EssentialIcon>*</itemS.EssentialIcon>
                    </itemS.Title>
                    <itemS.ContentInput placeholder="내용을 입력해주세요."/>
                </itemS.WriteContainer>
            </itemS.NoticeWriteContainer>
            <itemS.BtnContainer>
                <itemS.Btn>작성 완료</itemS.Btn>
            </itemS.BtnContainer>
        </>
    )
}

export default NoticeWritePage