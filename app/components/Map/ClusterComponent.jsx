import { isPopupVisible, selectCurrentBars, setPopupVisible } from "@/lib/redux";
import clsx from "clsx";
import Image from "next/image";
import { Cluster, Marker } from "react-mapbox-gl";
import { useDispatch, useSelector } from "react-redux";
import MarkerPopup from "./MarkerPopup";
import { useState } from "react";

const ClusterComponent = () => {

    const bars = useSelector(selectCurrentBars);
    const popupVisible = useSelector(isPopupVisible);
    const dispatch = useDispatch();

    const clusterMarker = (coordinates, pointCount) => (

        <Marker coordinates={coordinates} key={[...coordinates]}>
            <div className={clsx(
                "rounded-full flex items-center justify-center text-white font-bold text-xs cursor-pointer",
                {
                    "bg-sky-500 w-8 h-8 ": pointCount <= 10,
                    "bg-sky-800 w-12 h-12": pointCount > 10,
                })
            }>{pointCount}</div>
        </Marker>
    );

    const [popupAttributes, setPopupAttributes] = useState({});

    const showPopup = (bar) => {
        dispatch(setPopupVisible());
        setPopupAttributes(bar);
    }

    return (
        <>
            <Cluster ClusterMarkerFactory={clusterMarker} zoomOnClick={true} zoomOnClickPadding={200}>
                {
                    bars.map((bar) =>
                        <Marker
                            key={bar.place_id}
                            coordinates={bar.location.coordinates} >
                            <Image src="/blue-dot.png" width={12} height={12} alt="Marker" onClick={() => showPopup(bar)} className="cursor-pointer" />
                        </Marker>
                    )
                }
            </Cluster>
            {popupVisible && <MarkerPopup attributes={popupAttributes} />}
        </>
    )
}

export default ClusterComponent;
