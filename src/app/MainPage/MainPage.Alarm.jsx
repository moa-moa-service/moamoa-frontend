import * as itemMain from './styled/MainPage.main.style'
import * as itemDetail from './styled/MainPage.CategoryDatailPage.style'
import * as itemCategory from "./styled/MainPage.main.CategoryList.style"
import AlarmWrapper from './MainPage.Alarm.AlarmWrapper'

import { useNavigate } from 'react-router-dom'

function Alarm() {
    const navigate = useNavigate();
    return(
        <>
            <itemMain.MainPageContainer>
                <itemDetail.CategoryTitleContainer type='alarm'>
                    <itemDetail.BackBtn onClick={() => { navigate(-1); }}/>
                    <itemDetail.CategoryTitle>알림</itemDetail.CategoryTitle>
                </itemDetail.CategoryTitleContainer>
            <itemCategory.CategoryListContainer>
                <AlarmWrapper />
                <itemDetail.ContourLine />
                <AlarmWrapper />
            </itemCategory.CategoryListContainer>
            </itemMain.MainPageContainer>
        </>
    )
}

export default Alarm;