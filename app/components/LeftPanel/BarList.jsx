import { selectBars, selectFilter, setCurrentBars } from "@/lib/redux";
import { filterBars } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import BarItem from "./BarItem";

const BarList = () => {

    const bars = useSelector(selectBars);
    const currentFilter = useSelector(selectFilter);
    
    const filteredBars = filterBars(bars, currentFilter);

    const dispatch = useDispatch();
    dispatch(setCurrentBars(filteredBars));

    return (
        <div>
        {filteredBars.map(({ id, ...rest}) => (
            <BarItem key={id} {...rest}/>
        ))}
        </div>
    )
}

export default BarList;