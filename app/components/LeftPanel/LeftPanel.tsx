import { useState } from "react";

import BarList from "./BarList";
import UserSorting from "./UserSorting";
import SortingHint from "./SortingHint";

import clsx from "clsx";
/* icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const LeftPanel = () => {

    //TODO : Rework hidePanel feature to make it cleaner
    //TODO : refactor general code and comment

    const [panelStatus, setPanelStatus] = useState(false);

    const handleclick = () => {
        setPanelStatus(!panelStatus);
    }

    return (
        <section className={clsx(
            "bg-gray-800 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-4/5 w-[90%] flex-1 text-white min-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-gray-700 transition-all relative z-10",
            {
                "-translate-x-[90%]": panelStatus,
            })}
        >
            <button aria-label="toggle panel" onClick={handleclick}><FontAwesomeIcon className={clsx(
                "w-8 h-8 ml-8 flex items-center justify-center text-white font-bold p-1 transition-transform duration-300 absolute top-[25px] sm:right-[5px] right-0",
                {
                    "rotate-180": panelStatus,
                })
            } icon={faChevronLeft} /></button>
            <div className={clsx("divide-y-2 divide-gray-700", { "hidden": panelStatus })}>
                <div className="flex px-4 pb-4">
                    <h2 className="font-bold text-2xl xl:text-3xl sm:mr-12 mr-8">Trouver le bar qu&#39;il vous faut <span className="text-sky-500">selon votre humeur</span></h2>

                </div>
                <div className="p-4">
                    <h3 className="text-white font-bold text-lg pb-2">Vous êtes plutôt ?</h3>
                    <UserSorting />
                    <SortingHint />
                </div>
                <div className="p-4">
                    <BarList />
                </div>
            </div>
        </section>
    )
};

export default LeftPanel;