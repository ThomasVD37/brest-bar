import { selectCurrentBars, selectFilter } from "@/lib/redux";
import { useSelector } from "react-redux";
import BarItem from "./BarItem";
import { useState } from "react";

const BarList = () => {

    const bars = useSelector(selectCurrentBars);
    const currentFilter = useSelector(selectFilter);
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

    // const sortedBars = bars.toSorted((a, b) => {
    //     return a.rating - b.rating;
    // });
    

    return (
        <>
            <div className="flex justify-between">
                <h3 className="text-white font-bold text-lg pb-4">Explorer</h3>
                {/* <div onClick={() => handleSort("starsAsc")}>tri</div> */}
            </div>
            <div className="flex flex-col items-center">
                <div>
                    {bars.slice(0, barsToDisplay).map(({ id, ...rest }) => (
                        <BarItem key={id} {...rest} />
                    ))}
                </div>
                {numberOfBars > barsToDisplay &&
                <button onClick={displayMoreResults} className="bg-gray-600 px-4 py-2 rounded cursor-pointer">Voir plus</button>
                }
            </div>
        </>
    )
}

export default BarList;