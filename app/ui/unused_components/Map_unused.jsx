// import mapboxgl from '!mapbox-gl';
// import { useEffect, useRef, useState } from 'react';


// const Map = () => {

//     mapboxgl.accessToken = "";

//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-4.48);
//     const [lat, setLat] = useState(48.40);
//     const [zoom, setZoom] = useState(10);

//     useEffect(() => {
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/dark-v11',
//             center: [lng, lat],
//             zoom: zoom
//         });
//     });

//     return (
//         <div className="absolute top-0 left-0 w-screen h-screen z-0">
//             <div ref={mapContainer} className="h-full" />
//         </div>
//     );
// }

// export default Map;