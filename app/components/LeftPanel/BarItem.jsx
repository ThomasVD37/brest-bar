import { faArrowUpRightFromSquare, faLocationDot, faMagnifyingGlassLocation, faSquarePhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BarItem = ({ name, address, formatted_phone_number, website, rating, user_ratings_total }) => {

    //TODO : Add link to website if exists, dropdown to view complete opening hours with highlight on current day
    // Eventuellement les categories pour apporter de la couleur

    return (
        <div className="bg-gray-700 rounded mb-4 p-4 flex justify-between items-center">
            <div className="w-2/3">
                <h4 className="font-bold text-xl text-yellow-400 mb-2">{name}</h4>
                <div className="flex items-center text-lg mb-2">
                    <FontAwesomeIcon icon={faSquarePhone}  className="mr-2"/>
                    {!(formatted_phone_number === "") ? <p>{formatted_phone_number}</p> : <p>Non renseigné</p>}
                    {website !== "" && <a href={website} className="hover:text-sky-500 ml-6"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-1"/>Site web</a>}
                </div>
                <div className="flex items-center text-sky-400">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2"/>
                    <p className="text-sky-400">{address}</p>
                </div>
            </div>
            <div>
                <div className="flex items-baseline ">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <p className="font-bold text-lg ">{rating}</p>
                </div>
                <p>{user_ratings_total} avis</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex justify-center items-center">
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="text-2xl"/>
            </div>
        </div>
    );
};

export default BarItem;