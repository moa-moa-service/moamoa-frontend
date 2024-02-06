import * as itemS from "./styled/ProductPage.main.info.style"

import Notice from "./ProductPage.main.info.notice"

function Info() {
    return(
        <>
            <itemS.InfoContainer>
                <itemS.HomeIndicator></itemS.HomeIndicator>
                <itemS.UserInfoContainer>
                    <itemS.UserInfo>
                        <itemS.UserIcon></itemS.UserIcon>
                        <itemS.UserText>
                            <itemS.UserNickname>닉네임</itemS.UserNickname>
                            <itemS.UserAddress>서대문구 남가좌동</itemS.UserAddress>
                        </itemS.UserText>
                    </itemS.UserInfo>
                    <itemS.DoneIcon>모집완료</itemS.DoneIcon>
                </itemS.UserInfoContainer>
                <itemS.ProductName>상품명</itemS.ProductName>
                <itemS.ProductInfoContainer>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>카테고리</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue>생활가전</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>참여 가능한 인원</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue type="InProgress">5명</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>가격</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue>16900원</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>참여 가능한 시간</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue type="Done">마감</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                </itemS.ProductInfoContainer>
                <itemS.Line />
                <itemS.ProductInfoTitle>여기서 물건 받아요!</itemS.ProductInfoTitle>
                <itemS.addressText>우성아파트</itemS.addressText>
                <itemS.addressDetailText>서울특별시 서대문구 남가좌동 81-3번길 상가 앞</itemS.addressDetailText>
                <itemS.Line />
                <itemS.ProductInfoTitle>상세 설명</itemS.ProductInfoTitle>
                <itemS.ProductDetailText>상세 설명입니다.</itemS.ProductDetailText>
                <itemS.Line />
                <itemS.Title>공지사항</itemS.Title>
                <Notice />
                <Notice />
                <Notice />
            </itemS.InfoContainer>
        </>
    )
}

export default Info