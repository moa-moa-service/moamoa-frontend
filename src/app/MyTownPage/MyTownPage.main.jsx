import * as itemRec from '../RecruitmentPage/styled/Recruitment.TradingLocation.style'
import MyMap from '../RecruitmentPage/Recruitment.MyMap'
import * as itemS from './styled/MyTownPage.main.style.js'

import { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';


function MyTown() {
    const navigate = useNavigate();
    const [response, setResponse] = useState({});

    function handleResponseChange(response) {
        setResponse(response);
    }

    return (
        <>
            <itemRec.TopWrapper type='town'>
                <itemRec.TopContentContainer>
                    <itemRec.BackBtn type='town' onClick={() => (navigate(-1))} />
                    <itemS.TopTextContainer>
                        <itemS.TopText>우리 동네 공동 구매 찾기</itemS.TopText>
                        <itemS.TopText type='bold'>{response.v2?.results[0]?.region?.area3?.name}</itemS.TopText>
                    </itemS.TopTextContainer>
                </itemRec.TopContentContainer>
            </itemRec.TopWrapper>
            <Suspense fallback={null}>
                <MyMap onResponseChange={handleResponseChange} />
            </Suspense>
            <itemRec.BottomWrapper type='town'>
                <itemS.BottomProductWrapper>
                    <itemS.ProductImg/>
                    <itemS.ProductTextContainer>
                        <itemS.ProductTextTop>
                            <itemS.ProductText type='title'>폴로 가디건</itemS.ProductText>
                            <itemS.ProductText type='price'>60,000원</itemS.ProductText>
                        </itemS.ProductTextTop>
                        <itemS.ProductTextMiddle>
                            
                            <itemS.ProductText type='place'>행복약국</itemS.ProductText>
                            <itemS.ProductText type='location'>서울특별시 서대문구 창천동 70-2길 2층</itemS.ProductText>
                        </itemS.ProductTextMiddle>
                        <itemS.ProductTextBottom>
                            <itemS.ProductText type='peopleText' style={{ marginRight: '6px' }}>모집인원</itemS.ProductText>
                            <itemS.ProductText type='people' style={{ marginRight: '18px' }}>3명</itemS.ProductText>
                            <itemS.ProductText type='dateText'style={{ marginRight: '6px' }}>모집기간</itemS.ProductText>
                            <itemS.ProductText type='date'>D-3</itemS.ProductText>
                        </itemS.ProductTextBottom>
                    </itemS.ProductTextContainer>
                </itemS.BottomProductWrapper>
            </itemRec.BottomWrapper>
        </>
    )
}

export default MyTown