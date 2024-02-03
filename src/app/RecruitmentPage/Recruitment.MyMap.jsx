import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'
import { useState, useEffect } from 'react';

function MyMap() {
    // instead of window.naver.maps
    const navermaps = useNavermaps()
    const [isMapLoading, setIsMapLoading] = useState(false)
    const [myLocation, setMyLocation] = useState({ latitude: null, longitude: null })

    useEffect(() => {
        setIsMapLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
        function success(position) {
            setMyLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
            setIsMapLoading(false);
        }
        function error() {
            console.log('사용자 위치 불러오기 실패');
            setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
        }
    }, []);

    return (
        <MapDiv style={{
            width: '100%',
            height: '700px',
        }}>
            {isMapLoading ? (
                // 로딩 중에 표시할 내용
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                }}>Loading...</div>
            ) : (
                // 네이버 맵이 로드된 후에 표시할 내용
                <NaverMap
                    defaultCenter={new navermaps.LatLng(myLocation.latitude, myLocation.longitude)}
                    defaultZoom={15}
                >
                    <Marker
                        defaultPosition={new navermaps.LatLng(myLocation.latitude, myLocation.longitude)}
                    />
                </NaverMap>
            )}
        </MapDiv>
    )
}
export default MyMap