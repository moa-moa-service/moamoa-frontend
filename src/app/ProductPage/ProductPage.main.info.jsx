import * as itemS from "./styled/ProductPage.main.info.style"

import Notice from "./ProductPage.main.info.notice"

function Info(product) {

    const productInfo = product.product.postDto ;
    const userInfo = product.product.adminDto ;

    return(
        <>
            <itemS.InfoContainer>
                <itemS.HomeIndicator></itemS.HomeIndicator>
                <itemS.UserInfoContainer>
                    <itemS.UserInfo>
                        <itemS.UserIcon src={userInfo.profileImage}></itemS.UserIcon>
                        <itemS.UserText>
                            <itemS.UserNickname>{userInfo.nickname}</itemS.UserNickname>
                            <itemS.UserAddress>{userInfo.townName}</itemS.UserAddress>
                        </itemS.UserText>
                    </itemS.UserInfo>
                    <itemS.DoneIcon>모집완료</itemS.DoneIcon>
                </itemS.UserInfoContainer>
                <itemS.ProductName>{productInfo.productName}</itemS.ProductName>
                <itemS.ProductInfoContainer>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>카테고리</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue>{productInfo.category}</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>참여 가능한 인원</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue type="InProgress">{productInfo.available}명</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>가격</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue>{productInfo.price}원</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                    <itemS.ProductInfo>
                        <itemS.ProductInfoTitle>참여 가능한 시간</itemS.ProductInfoTitle>
                        <itemS.ProductInfoValue type="Done">마감</itemS.ProductInfoValue>
                    </itemS.ProductInfo>
                </itemS.ProductInfoContainer>
                <itemS.Line />
                <itemS.ProductInfoTitle>여기서 물건 받아요!</itemS.ProductInfoTitle>
                <itemS.addressText>우성아파트</itemS.addressText>
                <itemS.addressDetailText>{productInfo.dealLocation.name}</itemS.addressDetailText>
                <itemS.Line />
                <itemS.ProductInfoTitle>상세 설명</itemS.ProductInfoTitle>
                <itemS.ProductDetailText>{productInfo.description}</itemS.ProductDetailText>
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