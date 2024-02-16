import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { useState, useEffect, useRef } from 'react';

import client from '../../client';
import BottomWrapper from './MyTownPage.main.BottomWrapper.jsx';

function Map( {onTown}) {
    const navermaps = useNavermaps();
    const mapRef = useRef(null);

    const [isMapLoading, setIsMapLoading] = useState(true);
    const [myLocation, setMyLocation] = useState({ lat: null, lng: null });

    const [products, setProducts] = useState();
    const [selectedProduct, setSelectedProduct] = useState();

    const handleMarkerClick = (product) => {
        setSelectedProduct(product);
    };

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

        const auth = import.meta.env.VITE_AUTH;
        const fetchData = async () => {
            try {
                const response = await client(auth).get(
                    '/posts/near'
                );
                setProducts(response.data.result.SimplePostDtoList);
            } catch (error) {
                console.error('안된다!!:', error);
            }
        };
        fetchData();
    }, []);

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
                    onTown(response.v2.results[1].region.area3.name);
                }
            );
        }
    }, [myLocation.lat, myLocation.lng]);



    return (
        <MapDiv style={{
            width: '100%',
            height: '80vh',
        }}>
            {isMapLoading ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                }}>Loading...</div>
            ) : (<>
                <NaverMap
                    ref={mapRef}
                    defaultCenter={new navermaps.LatLng(myLocation.lat, myLocation.lng)}
                    defaultZoom={18}
                >
                    {myLocation.lat && myLocation.lng && (
                        <Marker
                            position={new navermaps.LatLng(myLocation.lat, myLocation.lng)}
                        />
                    )}
                    {products && products.map(product => (
                        <Marker
                            onClick={() => handleMarkerClick(product)}
                            position={new navermaps.LatLng(product.address.latitude, product.address.longitude)}
                        />
                    ))}
                    {selectedProduct && (
                    <BottomWrapper product={selectedProduct} />
                )}
                </NaverMap>
            </>

            )}
        </MapDiv>
    );
}

export default Map;
