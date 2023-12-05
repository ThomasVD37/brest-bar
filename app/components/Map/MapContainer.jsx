import { selectcenter, selectzoom, setPopupInvisible } from '@/lib/redux';
import { useDispatch, useSelector } from 'react-redux';

import ReactMapboxGl from 'react-mapbox-gl';

import ClusterComponent from './ClusterComponent';

const MapContainer = () => {

    // https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md

    // Moved "zoom" and "center" to redux store to make possible the click on a bar in the list and zoom on it.
    // This create a re-render when zooming. No solution found yet.

    const zoom = useSelector(selectzoom);
    const center = useSelector(selectcenter)
    const dispatch = useDispatch();

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoidGhvbWFzdmQzNyIsImEiOiJjbHBobzlpc3UwYWR5MmxsZm5va3htdng1In0.9Vrc8cYScA-BTzDMm2TvNg'
    });

    const handleClick = () => {
        dispatch(setPopupInvisible())
    }

    return (
        <div className="absolute top-0 left-0 w-screen h-screen z-0 bg-gray-800">
            <Map
                style="mapbox://styles/mapbox/dark-v11"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                zoom={zoom}
                center={center}
                onClick={handleClick}
            >
                <ClusterComponent />
            </Map>
        </div>
    );
}

export default MapContainer;