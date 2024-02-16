import { useEffect, useState } from "react";
import * as itemS from "./styled/MainPage.Alarm.style"
import Cart from '../../../public/MainPage/cart.png'
import Comment from '../../../public/MainPage/comment.png'
import Speaker from '../../../public/MainPage/speaker.png'


function AlarmWrapper(alarm) {
    const [time, setTime] = useState();


    useEffect(() => {
        const currentTime = new Date();
        const createdTime = new Date(alarm.item.createdAt);
        console.log('alarm.item.createdAt',alarm.item.createdAt);

        const getTimeDifference = (currentTime, createdTime) => {
            const differenceInMilliseconds = Math.abs(currentTime - createdTime);

            const seconds = Math.floor(differenceInMilliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const weeks = Math.floor(days / 7);
            const months = Math.floor(days / 30);

            if (months >= 1) {
                return `${months}달 전`;
            } else if (weeks >= 1) {
                return `${weeks}주 전`;
            } else if (days >= 1) {
                return `${days}일 전`;
            } else if (hours >= 1) {
                return `${hours}시간 전`;
            } else if (minutes >= 1) {
                return `${minutes}분 전`;
            } else {
                return '방금 전';
            }
        }
        const timeDifference = getTimeDifference(currentTime, createdTime);
        setTime(timeDifference);
    }, [])

    return (
        <>
            <itemS.AlarmWrapper>
                {alarm.item.type === '공동구매' ? (
                    <itemS.AlarmImg src={Cart} />
                ) : alarm.item.type === '공지사항' ? (
                    <itemS.AlarmImg src={Speaker} />
                ) : (
                    <itemS.AlarmImg src={Comment} />
                )}
                <itemS.AlarmTextContainer>
                    <itemS.TextContainer>
                        <itemS.Text>{alarm.item.type}</itemS.Text>
                        <itemS.Text>{time}</itemS.Text>
                    </itemS.TextContainer>
                    <itemS.TextContainer type='content'>
                        <itemS.Text type='content'>{alarm.item.message}</itemS.Text>
                    </itemS.TextContainer>
                </itemS.AlarmTextContainer>
            </itemS.AlarmWrapper>
        </>
    )
}

export default AlarmWrapper;