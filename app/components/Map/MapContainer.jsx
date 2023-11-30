import { selectCurrentBars } from '@/lib/redux';
import clsx from 'clsx';
import Image from 'next/image';
import ReactMapboxGl, { Marker, Cluster } from 'react-mapbox-gl';
import { useSelector } from 'react-redux';

const MapContainer = () => {

    //TODO : PRIORITY : add zoom onclick on the cluster
    //TODO : Move "zoom" and "center" to redux store to make possible the click on a bar in the list and zoom on it
    //TODO : Add the popup on the marker with the bar atributes
    // Fonction onclick dans le marker qui appelle un composant Popup sur ses coordonnées

    const clusterMarker = (coordinates, pointCount) => (

        <Marker coordinates={coordinates} key={[...coordinates]}>
            <div className={clsx(
                "rounded-full flex items-center justify-center text-white font-bold text-xs",
                {
                    "bg-sky-500 w-8 h-8 ": pointCount <= 10,
                    "bg-sky-800 w-12 h-12": pointCount > 10,
                })
                }>{pointCount}</div>
        </Marker>
    );


    const bars = useSelector(selectCurrentBars);

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoidGhvbWFzdmQzNyIsImEiOiJjbHBobzlpc3UwYWR5MmxsZm5va3htdng1In0.9Vrc8cYScA-BTzDMm2TvNg'
    });

    return (
        <div className="absolute top-0 left-0 w-screen h-screen z-0 bg-gray-800">
            <Map
                style="mapbox://styles/mapbox/dark-v11"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                zoom={[12]}
                center={[-4.54, 48.40]}
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