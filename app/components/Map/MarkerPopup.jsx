import { setPopupInvisible } from "@/lib/redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "react-mapbox-gl";
import { useDispatch } from "react-redux";

const MarkerPopup = ({ attributes }) => {

    let hours = true;

    if (attributes.opening_hours === "null") {
        hours = false;
    }

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setPopupInvisible());
    }

    return (
        <Popup
            coordinates={attributes.location.coordinates}
            anchor="bottom"
            offset={20}
            onClick={handleClick}>
            <div className="text-white">
                <div className="flex justify-between align-top">
                    <h3 className="text-yellow-400 font-bold text-base max-w-[200px]">{attributes.name}</h3>
                    <FontAwesomeIcon icon={faXmark} className="font-bold text-base cursor-pointer m-1"/>
                </div>
                <p className="text-sky-500 font-xs">{attributes.address}</p>
                {hours ? 
                <ul className="list-disc pl-3">{Object.values(JSON.parse(attributes.opening_hours)).map((day) => (
                    <li key={day}>{day}</li>
                ))}</ul> : <p>Horaires non renseignés</p>}
            </div>
        </Popup>
    )

}

export default MarkerPopup;