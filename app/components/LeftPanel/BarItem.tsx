import { setCenter, setZoom } from "@/lib/redux";
import { useDispatch } from "react-redux";

/* icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronLeft, faLocationDot, faMagnifyingGlassLocation, faSquarePhone, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";
import { useState } from "react";

const BarItem = ({ name, address, formatted_phone_number, website, rating, user_ratings_total, location, opening_hours }: itemProps) => {

    const dispatch = useDispatch();
    const [viewHours, setViewHours] = useState(false);

    /* Get current day */
    const date = new Date();
    const day = date.getDay();
    let currentDay = day - 1;
    if (currentDay === -1) {
        currentDay = 6;
    }

    /* show opening hours if available */
    let hours = true;
    if (opening_hours === "null") {
        hours = false;
    }
    const handleHours = () => {
        setViewHours(!viewHours);
    }

    const handleZoom = (location: {coordinates: number[]}) => {
        dispatch(setCenter(location.coordinates));
        dispatch(setZoom([17]));
    }

    return (
        <div className="bg-gray-700 rounded mb-4 p-4 flex justify-between items-center min-w-full">
            <div className="w-2/3 mr-2">
                <h4 className="font-bold text-xl text-yellow-400 mb-2">{name}</h4>
                {hours &&
                    <div className="bg-gray-600 rounded text-sm w-fit mb-3 cursor-pointer" onClick={handleHours}>
                        {!viewHours ?
                            <div className="py-1 px-2 flex items-center">
                                <p>Afficher les horaires</p>
                                <FontAwesomeIcon className="-rotate-90 ml-2 text-lg" icon={faChevronLeft} />
                            </div>
                            :
                            <div className="flex py-2 pl-6 pr-2">
                                <ul className="list-disc">
                                    {Object.entries(JSON.parse(opening_hours) as Record<string, string>).map((day) => (
                                        <li
                                            className={clsx("", { "text-sky-400": Number(day[0]) === currentDay })}
                                            key={day[0]}
                                        >
                                            {day[1]}
                                        </li>
                                    ))}
                                </ul>
                                <FontAwesomeIcon icon={faXmark} className="text-lg ml-2"/>
                            </div>
                        }
                    </div>}
                <div className="flex items-center text-base mb-2">
                    <FontAwesomeIcon icon={faSquarePhone} className="mr-2" />
                    {!(formatted_phone_number === "") ? <p>{formatted_phone_number}</p> : <p>Non renseigné</p>}
                    {website !== "" && <a href={website} target="_blank" className="hover:text-sky-500 ml-6"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-1 text-sm" />Site web</a>}
                </div>
                <div className="flex items-center text-sky-400">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <p className="text-sky-400">{address}</p>
                </div>
            </div>
            <div>
                <div className="flex items-baseline ">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                    <p className="font-bold text-lg ">{rating}</p>
                </div>
                <p>{user_ratings_total} avis</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex justify-center items-center cursor-pointer" onClick={() => handleZoom(location)}>
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="text-2xl" />
            </div>
        </div>
    );
};

export default BarItem;

/* Types */
type itemProps = {
    name: string,
    address: string,
    formatted_phone_number: string,
    website: string,
    rating: number,
    user_ratings_total: number,
    location: {
        coordinates: Array<number>
    },
    opening_hours: string 
}