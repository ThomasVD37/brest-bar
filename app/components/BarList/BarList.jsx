import { selectBars } from "@/lib/redux";
import { filterBars } from "@/lib/utils";
import { useSelector } from "react-redux";
import BarItem from "./BarItem/BarItem";

const BarList = ({ sorting }) => {

    const bars = useSelector(selectBars);

    const filteredBars = filterBars(bars, sorting);

    return (
        <div>
        {filteredBars.map(({ id, ...rest}) => (
            <BarItem key={id} {...rest}/>
        ))}
        </div>
    )
}

export default BarList;