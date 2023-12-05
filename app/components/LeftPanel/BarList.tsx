import { selectCurrentBars, selectError, selectFilter, selectSorting, setSorting } from "@/lib/redux";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import BarItem from "./BarItem";

import { sortBars } from "@/lib/utils/sortBars";
import clsx from "clsx";

/* icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faPen, faStar, faUpLong } from "@fortawesome/free-solid-svg-icons";


const BarList = () => {

    const bars = useSelector(selectCurrentBars);
    const currentFilter = useSelector(selectFilter);
    const currentSorting = useSelector(selectSorting);
    const dispatch = useDispatch();

    const errorState = useSelector(selectError)

    const numberOfBars = bars.length;
    const [barsToDisplay, setBarsToDisplay] = useState(5);
    const [resetFilter, setResetFilter] = useState(currentFilter);

    if (currentFilter !== resetFilter) {
        setBarsToDisplay(5);
        setResetFilter(currentFilter);
    }

    const displayMoreResults = () => {
        if (barsToDisplay < numberOfBars) {
            setBarsToDisplay(barsToDisplay + 5);
        }
    }

    const handleSort = (sort: string) => {
        if (sort === currentSorting) {
            dispatch(setSorting('none'));
        } else {
            dispatch(setSorting(sort));
        }
    }

    const sortedBars = sortBars(bars, currentSorting);

    return (
        <>
            <div className="flex justify-between pb-4 items-center">
                <h3 className="text-white font-bold text-lg">Explorer</h3>
                <div className="flex gap-2">
                    <div onClick={() => handleSort("ratingsAsc")}
                        className={clsx("p-2 rounded flex items-center gap-2 border-2 hover:bg-sky-900 transition-all duration-300 cursor-pointer",
                            {
                                "border-sky-500 bg-gray-600": currentSorting === "ratingsAsc",
                                "bg-gray-700 border-gray-800": currentSorting !== "ratingsAsc",
                            })
                        }>
                        <FontAwesomeIcon icon={faUpLong} />
                        <FontAwesomeIcon icon={faPen} className="text-black" />
                    </div>
                    <div onClick={() => handleSort("ratingsDesc")}
                        className={clsx("p-2 rounded flex items-center gap-2 border-2 hover:bg-sky-900 transition-all duration-300 cursor-pointer",
                            {
                                "border-sky-500 bg-gray-600": currentSorting === "ratingsDesc",
                                "bg-gray-700 border-gray-800": currentSorting !== "ratingsDesc",
                            })
                        }>
                        <FontAwesomeIcon icon={faDownLong} />
                        <FontAwesomeIcon icon={faPen} className="text-black" />
                    </div>
                    <div onClick={() => handleSort("starsAsc")}
                        className={clsx("p-2 rounded flex items-center gap-2 border-2 hover:bg-sky-900 transition-all duration-300 cursor-pointer",
                            {
                                "border-sky-500 bg-gray-600": currentSorting === "starsAsc",
                                "bg-gray-700 border-gray-800": currentSorting !== "starsAsc",
                            })
                        }>
                        <FontAwesomeIcon icon={faUpLong} />
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                    </div>
                    <div onClick={() => handleSort("starsDesc")}
                        className={clsx("p-2 rounded flex items-center gap-2 border-2 hover:bg-sky-900 transition-all duration-300 cursor-pointer",
                            {
                                "border-sky-500 bg-gray-600": currentSorting === "starsDesc",
                                "bg-gray-700 border-gray-800": currentSorting !== "starsDesc",
                            })
                        }>
                        <FontAwesomeIcon icon={faDownLong} />
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                {errorState.status ?
                    <div className="bg-red-500 text-white p-4 rounded text-sm mt-8 mx-8 text-center">{errorState.message}</div>
                    : (
                        <div className="w-full">
                            {sortedBars.slice(0, barsToDisplay).map(({ id, ...rest }) => (
                                <BarItem key={id} {...rest} />
                            ))}
                            {numberOfBars > barsToDisplay &&
                                <button onClick={displayMoreResults} className="bg-gray-600 px-4 py-2 rounded cursor-pointer hover:bg-sky-900 transition-all duration-300">Voir plus</button>
                            }
                        </div>
                    )}
            </div>
        </>
    )
}

export default BarList;