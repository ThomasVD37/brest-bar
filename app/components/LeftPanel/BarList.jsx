import { selectCurrentBars } from "@/lib/redux";
import { useSelector } from "react-redux";
import BarItem from "./BarItem";

const BarList = () => {

    const bars = useSelector(selectCurrentBars);

    return (
        <div>
        {bars.map(({ id, ...rest}) => (
            <BarItem key={id} {...rest}/>
        ))}
        </div>
    )
}

export default BarList;