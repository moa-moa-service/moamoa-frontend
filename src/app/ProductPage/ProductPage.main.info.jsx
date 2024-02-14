import * as itemS from "./styled/ProductPage.main.info.style"

import Notice from "./ProductPage.main.info.notice"
import { useEffect, useState } from "react";
import { differenceInMilliseconds, intervalToDuration } from "date-fns";

function Info(product) {

    const productInfo = product.product.postDto ;
    const userInfo = product.product.adminDto ;

    const { deadline } = productInfo ;
    const [ possibility, setPossibility ] = useState(true) ;
    const [remainingTime, setRemainingTime] = useState(calculateRemaingingTime()) ;

    function calculateRemaingingTime() {

        const currentTime = new Date() ;
        const deadlineTime = new Date(deadline);

        const difference = differenceInMilliseconds(deadlineTime, currentTime) ;

        if (difference <= 0) {
            return {
                day: '00' ,
                hours: '00' ,
                minutes: '00' ,
                seconds: '00'
            } ;
        } 

        const remain = intervalToDuration({start: currentTime, end: deadlineTime})  ;
        return {
            day: remain.days,
            hours: remain.hours !== undefined ? String(remain.hours).padStart(2, '0') : '00',
            minutes: remain.minutes !== undefined ? String(remain.minutes).padStart(2, '0') : '00',
            seconds: remain.seconds !== undefined ? String(remain.seconds).padStart(2, '0') : '00'
        } ;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(calculateRemaingingTime()) ;
        }, 1000)

        return () => clearInterval(timer) ;
    }, []) ;


    useEffect(() => {
        calculateRemaingingTime() ;
    }, []) ;

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
                    {remainingTime.day === '00' && remainingTime.hours === '00' && remainingTime.minutes === '00' && remainingTime.seconds === '00' ?
                        <itemS.DoneIcon>모집완료</itemS.DoneIcon>
                        : 
                        null
                    }
                    
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
                        {remainingTime.day === '00' && remainingTime.hours === '00' && remainingTime.minutes === '00' && remainingTime.seconds === '00' ?
                        <itemS.ProductInfoValue type="Done">마감</itemS.ProductInfoValue>
                        : 
                        <itemS.ProductInfoValue>
                            {remainingTime.day !== undefined && `${remainingTime.day}일 `}
                            {remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}
                        </itemS.ProductInfoValue>
                        }
                    </itemS.ProductInfo>
                </itemS.ProductInfoContainer>
                <itemS.Line />
                <itemS.ProductInfoTitle>여기서 물건 받아요!</itemS.ProductInfoTitle>
                <itemS.addressText>{productInfo.dealTown}</itemS.addressText>
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