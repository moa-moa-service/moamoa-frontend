import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { useState, useEffect, useRef } from 'react';

import Loading from '../LoadingPage/LoadingPage.main';
function MyMap({ onResponseChange, isTradingLocation, onLocationChange }) {
    const navermaps = useNavermaps();
    const mapRef = useRef(null);

    const [isMapLoading, setIsMapLoading] = useState(true);
    const [myLocation, setMyLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        setIsMapLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
        function success(position) {
            setMyLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            setIsMapLoading(false);
        }
        function error() {
            console.log('사용자 위치 불러오기 실패');
            setMyLocation({ lat: 37.4979517, lng: 127.0276188 });
            setIsMapLoading(false);
        }
    }, []);

    const handleCenterChanged = () => {
        if (mapRef.current) {
            const center = mapRef.current.getCenter();
            setMyLocation({ lat: center.lat(), lng: center.lng() });
        }
    };

    useEffect(() => {
        if (myLocation.lat !== null && myLocation.lng !== null) {
            onLocationChange(myLocation);
            const geocoder = navermaps.Service.reverseGeocode(
                {
                    coords: `${myLocation.lng},${myLocation.lat}`,
                    orders: [
                        navermaps.Service.OrderType.ADDR,
                        navermaps.Service.OrderType.ROAD_ADDR
                    ].join(',')
                },
                function (status, response) {
                    if (status === navermaps.Service.Status.ERROR) {
                        return alert('Something Wrong!');
                    }
                    onResponseChange(response);
                }
            );
        }
    }, [myLocation.lat, myLocation.lng]);

    const handleDragEnd = () => {
        handleCenterChanged();
    };

    return (
        <MapDiv style={{
            width: '100%',
            height: '70vh',
        }}>
            {isMapLoading ? (
                <Loading/>
            ) : (
                <NaverMap
                    ref={mapRef}
                    defaultCenter={new navermaps.LatLng(myLocation.lat, myLocation.lng)}
                    defaultZoom={20}
                    onDragend={isTradingLocation ? handleDragEnd : undefined}
                    // 드래그 종료 이벤트 핸들러 추가
                >
                    {myLocation.lat && myLocation.lng && (
                        <Marker
                            position={new navermaps.LatLng(myLocation.lat, myLocation.lng)}
                        />
                    )}
                </NaverMap>
            )}
        </MapDiv>
    );
}

export default MyMap;