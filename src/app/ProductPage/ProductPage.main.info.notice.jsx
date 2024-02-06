import * as itemS from "./styled/ProductPage.main.info.notice.style"

function Notice() {
    return(
        <>
            <itemS.NoticeContainer>
                <itemS.Notice>
                    <itemS.Title>거래 날짜 및 시간 조정</itemS.Title>
                    <itemS.Content>안녕하세요! 상품이 도착해서 공동구매 상품을</itemS.Content>
                </itemS.Notice>
                <itemS.Day>2일전</itemS.Day>
            </itemS.NoticeContainer>
        </>
    )
}

export default Notice