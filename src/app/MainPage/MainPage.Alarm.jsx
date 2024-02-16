import * as itemMain from './styled/MainPage.main.style'
import * as itemDetail from './styled/MainPage.CategoryDatailPage.style'
import * as itemCategory from "./styled/MainPage.main.CategoryList.style"
import AlarmWrapper from './MainPage.Alarm.AlarmWrapper'
import BackIcon from '../../../public/SearchPage/backIcon.png'

import client from '../../client'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Alarm() {
    const navigate = useNavigate();
    const [alarms, setAlarms] = useState();

    useEffect(() => {
        const auth = import.meta.env.VITE_AUTH;
        const fetchData = async () => {
            try {
                const response = await client(auth).get(
                    '/notifications'
                );
                setAlarms(response.data.result.notificationDTOList);
            } catch (error) {
                console.error('안된다!!:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <itemMain.MainPageContainer>
                <itemDetail.CategoryTitleContainer type='alarm'>
                    <itemDetail.BackBtn src={BackIcon} onClick={() => { navigate(-1); }} />
                    <itemDetail.CategoryTitle>알림</itemDetail.CategoryTitle>
                </itemDetail.CategoryTitleContainer>
                <itemCategory.CategoryListContainer >
                    {alarms && alarms.map(alarm => (
                        <AlarmWrapper key={alarm.referenceId} item={alarm} />
                    ))}
                </itemCategory.CategoryListContainer >
            </itemMain.MainPageContainer>
        </>
    )
}

export default Alarm;