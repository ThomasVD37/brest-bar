import { useState } from "react";
import BarList from "./BarList";
import UserSorting from "./UserSorting";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const LeftPanel = () => {

    const [hidePanel, setHidePanel] = useState(false);

    const handleclick = () => {
        setHidePanel(!hidePanel);
    }

    return (
        <section className={clsx(
            "bg-gray-800 xl:w-1/3 lg:w-1/2 md:w-2/3 w-4/5 p-4 flex-1 text-white min-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-gray-700 transition-all relative z-10",
            {
                "-translate-x-3/4": hidePanel,
            })}
        >
            <div className="flex justify-between">
                <h2>Trouver le bar qu&#39;il vous faut selon <span>votre humeur</span></h2>
                <button onClick={handleclick}><FontAwesomeIcon icon={faChevronLeft} /></button>
            </div>
            <div>
                <h3>Vous êtes plutôt ?</h3>
                <UserSorting />
            </div>
            <div>
                <h3 className="font-bold text-sky-400">Explorer</h3>
                <BarList />
            </div>
        </section>
    )
};

export default LeftPanel;