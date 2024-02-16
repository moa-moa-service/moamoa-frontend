import * as itemRec from '../RecruitmentPage/styled/Recruitment.TradingLocation.style'
import Map from './MyTownPage.Map.jsx';
import * as itemS from './styled/MyTownPage.main.style.js'

import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MyTown() {
    const navigate = useNavigate();
    const [town, setTown] = useState('');

    const handleTownChange = (data) => {
        setTown(data);
    };

    return (
        <>
            <itemRec.TopWrapper type='town'>
                <itemRec.TopContentContainer>
                    <itemRec.BackBtn type='town' onClick={() => (navigate(-1))} />
                    <itemS.TopTextContainer>
                        <itemS.TopText>우리 동네 공동 구매 찾기</itemS.TopText>
                        <itemS.TopText type='bold'>{town}</itemS.TopText>
                    </itemS.TopTextContainer>
                </itemRec.TopContentContainer>
            </itemRec.TopWrapper>
            <Suspense fallback={null}>
                <Map onTown={handleTownChange}/>
            </Suspense>
        </>
    )
}

export default MyTown