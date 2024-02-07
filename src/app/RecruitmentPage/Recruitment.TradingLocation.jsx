import * as itemS from './styled/Recruitment.TradingLocation.style'
import MyMap from './Recruitment.MyMap'

function TradingLocation({openTradingLocation}) {
    return (
        <>
            <itemS.TopWrapper>
                <itemS.TopContentContainer>
                    <itemS.BackBtn onClick={openTradingLocation}/>
                    <itemS.Text>거래 희망 장소</itemS.Text>
                </itemS.TopContentContainer>
            </itemS.TopWrapper>
            <MyMap />
            <itemS.BottomWrapper>
                <itemS.DetailAddressContainer>
                    <itemS.DetailAddressText type='bold'>상세 주소</itemS.DetailAddressText>
                    <itemS.DetailAddressText>서울특별시 서대문구 명지대길 76</itemS.DetailAddressText>
                </itemS.DetailAddressContainer>
                <itemS.InputDetailAddressContainer>
                    <itemS.DetailAddressText type='bold'>장소 명칭을 입력해 주세요</itemS.DetailAddressText>
                    <itemS.InputDetailAddress placeholder='ex) 사당역 10번 출구' />
                </itemS.InputDetailAddressContainer>
            </itemS.BottomWrapper>
        </>
    )
}

export default TradingLocation