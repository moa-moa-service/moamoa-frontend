import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MyMap() {
    // instead of window.naver.maps
    const ncpClientId = import.meta.env.VITE_CLIENT_ID;
    const ClientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const navermaps = useNavermaps();
    const [isMapLoading, setIsMapLoading] = useState(true);
    const [myLocation, setMyLocation] = useState({ latitude: null, longitude: null });

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
            setIsMapLoading(false);
        }
    }, []);

    useEffect(() => {
        // myLocation이 변경될 때마다 호출되는 부분
        if (myLocation.latitude !== null && myLocation.longitude !== null) {
            // 역 지오코딩 API 호출
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `map/gc?request=coordsToaddr&coords=129.1133567,35.2982640&sourcecrs=epsg:4326&output=json&orders=addr,admcode,roadaddr`,
                        {
                            headers: {
                                'X-NCP-APIGW-API-KEY-ID': ncpClientId,
                                'X-NCP-APIGW-API-KEY': ClientSecret,
                            },
                        }
                    );
                    // Assuming that the response structure contains the required address information
                    console.log('Reverse Geocoding Result:', response);
                } catch (error) {
                    console.error('Error fetching reverse geocoding data:', error);
                }
            };

            fetchData(); // fetchData 함수 호출
        }
    }, [myLocation]);

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
    );
}

export default MyMap;
