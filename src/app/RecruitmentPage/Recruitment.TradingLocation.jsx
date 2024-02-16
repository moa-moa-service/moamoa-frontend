import * as itemS from './styled/Recruitment.TradingLocation.style'
import MyMap from './Recruitment.MyMap'

import { useState } from 'react';


function TradingLocation({ openTradingLocation, onLocationData }) {
    const [response, setResponse] = useState({});
    const [dealTown, setDealTown] = useState('');
    const [myLocation, setMyLocation] = useState({ lat: null, lng: null });

    const handleDealTownChange = (event) => {
        setDealTown(event.target.value);
    };

    const handleLocationChange = (location) => {
        setMyLocation(location);
    };

    function handleResponseChange(response) {
        setResponse(response);
    }

    const submitBtn = () => {
        onLocationData({
            dealTown: dealTown,
            roadAddress: response.v2.address.roadAddress,
            myLocation: myLocation,
            town: response.v2.results[1].region.area3.name,
        });
        openTradingLocation();
    }

    return (
        <>
            <itemS.TopWrapper>
                <itemS.TopContentContainer>
                    <itemS.BackBtn onClick={openTradingLocation} />
                    <itemS.Text>거래 희망 장소</itemS.Text>
                </itemS.TopContentContainer>
            </itemS.TopWrapper>
            <MyMap onResponseChange={handleResponseChange} isTradingLocation={true} onLocationChange={handleLocationChange}/>
            <itemS.BottomWrapper>
                <itemS.DetailAddressContainer>
                    <itemS.DetailAddressText type='bold'>상세 주소</itemS.DetailAddressText>
                    <itemS.DetailAddressText>{response.v2?.address?.roadAddress}</itemS.DetailAddressText>
                </itemS.DetailAddressContainer>
                <itemS.InputDetailAddressContainer>
                    <itemS.DetailAddressText type='bold'>장소 명칭을 입력해 주세요</itemS.DetailAddressText>
                    <itemS.InputDetailAddress
                        placeholder='ex) 사당역 10번 출구'
                        value={dealTown}
                        onChange={handleDealTownChange}
                    />
                    {dealTown.trim() !== '' && (
                        <itemS.CompleteBtn onClick={submitBtn}>선택 완료</itemS.CompleteBtn>
                    )}
                </itemS.InputDetailAddressContainer>
            </itemS.BottomWrapper>
        </>
    )
}

export default TradingLocation;
