import * as itemRec from '../RecruitmentPage/styled/Recruitment.TradingLocation.style'
import Map from './MyTownPage.Map.jsx';
import * as itemS from './styled/MyTownPage.main.style.js'

import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';


function MyTown() {
    const navigate = useNavigate();

    return (
        <>
            <itemRec.TopWrapper type='town'>
                <itemRec.TopContentContainer>
                    <itemRec.BackBtn type='town' onClick={() => (navigate(-1))} />
                    <itemS.TopTextContainer>
                        <itemS.TopText>우리 동네 공동 구매 찾기</itemS.TopText>
                        <itemS.TopText type='bold'>남가좌동</itemS.TopText>
                    </itemS.TopTextContainer>
                </itemRec.TopContentContainer>
            </itemRec.TopWrapper>
            <Suspense fallback={null}>
                <Map/>
            </Suspense>
        </>
    )
}

export default MyTown