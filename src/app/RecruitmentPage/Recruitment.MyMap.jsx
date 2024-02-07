import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { useState, useEffect, useRef } from 'react';

function MyMap({ onResponseChange }) {
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

    return (
        <MapDiv style={{
            width: '100%',
            height: '70vh',
        }}>
            {isMapLoading ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                }}>Loading...</div>
            ) : (
                <NaverMap
                    ref={mapRef}
                    defaultCenter={new navermaps.LatLng(myLocation.lat, myLocation.lng)}
                    defaultZoom={20}
                    onCenterChanged={handleCenterChanged}
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
