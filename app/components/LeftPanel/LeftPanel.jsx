import { useState } from "react";
import BarList from "./BarList";
import UserSorting from "./UserSorting";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SortingHint from "./SortingHint";

const LeftPanel = () => {

    //TODO : Rework hidePanel feature to make it cleaner
    //TODO : refactor general code and comment

    const [hidePanel, setHidePanel] = useState(false);

    const handleclick = () => {
        setHidePanel(!hidePanel);
    }

    return (
        <section className={clsx(
            "bg-gray-800 xl:w-1/3 lg:w-1/2 md:w-2/3 w-4/5 flex-1 text-white min-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-gray-700 transition-all relative z-10 divide-y-2 divide-gray-700",
            {
                "-translate-x-3/4": hidePanel,
            })}
        >
            <div className={clsx("flex p-4", {"justify-end": hidePanel})}>
                <h2 className={clsx("font-bold text-2xl xl:text-3xl", {"hidden": hidePanel})}>Trouver le bar qu&#39;il vous faut <span className="text-sky-500">selon votre humeur</span></h2>
                <button aria-label="toggle panel" onClick={handleclick}><FontAwesomeIcon className={clsx(
                    "w-8 h-8 ml-8 flex items-center justify-center text-white font-bold p-1 transition-transform duration-300",
                    {
                        "rotate-180": hidePanel,
                    })
                } icon={faChevronLeft} /></button>
            </div>
            <div className={clsx("p-4", {"hidden": hidePanel})}>
                <h3 className="text-white font-bold text-lg pb-2">Vous êtes plutôt ?</h3>
                <UserSorting />
                <SortingHint />
            </div>
            <div className={clsx("p-4", {"hidden": hidePanel})}>
                <BarList />
            </div>
        </section>
    )
};

export default LeftPanel;