import { selectBars } from '@/lib/redux';
import Image from 'next/image';
import ReactMapboxGl, { Marker, Cluster } from 'react-mapbox-gl';
import { useSelector } from 'react-redux';

const MapContainer = () => {


    const clusterMarker = (coordinates, pointCount) => (

        <Marker coordinates={coordinates} key={[...coordinates]}>
            <div className="bg-sky-700 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs">{pointCount}</div>
        </Marker>
    );


    const bars = useSelector(selectBars);

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoidGhvbWFzdmQzNyIsImEiOiJjbHBobzlpc3UwYWR5MmxsZm5va3htdng1In0.9Vrc8cYScA-BTzDMm2TvNg'
    });

    return (
        <div className="absolute top-0 left-0 w-screen h-screen z-0">
            <Map
                style="mapbox://styles/mapbox/dark-v11"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                zoom={[11]}
                center={[-4.48, 48.40]}
            >
                <Cluster ClusterMarkerFactory={clusterMarker}>
                    {
                        bars.map((bar) =>
                            <Marker
                                key={bar.place_id}
                                coordinates={[bar.location.coordinates[0], bar.location.coordinates[1]]}>
                                <Image src="/blue-dot.png" width={12} height={12} alt="Marker" />
                            </Marker>
                        )
                    }
                </Cluster>
            </Map>
        </div>
    );
}

export default MapContainer;