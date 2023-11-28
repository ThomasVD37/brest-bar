
import { selectFilter, setFilter } from "@/lib/redux";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const UserSorting = () => {

    const currentFilter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handlefilter = (filter) => {
        if (filter === currentFilter) {
            dispatch(setFilter('none'));
        } else {
            dispatch(setFilter(filter));
        }
    }

    return (
    <div className="flex justify-between gap-4 text-sm items-start">
        <button onClick={() => handlefilter('breton')} className="w-full">
            <div className="aspect-square flex items-center justify-center bg-gray-700 rounded">
                <Image src="/bretagne.png" width={40} height={40} alt="Breton" />
            </div>
            <p className="mt-2">Breton</p>
        </button>
        <button onClick={() => handlefilter('student')} className="w-full">
            <div className="aspect-square flex items-center justify-center bg-gray-700 rounded">
                <Image src="/student.png" width={40} height={40} alt="Etudiant" />
            </div>
            <p className="mt-2">Etudiant</p>
        </button>
        <button onClick={() => handlefilter('adventure')} className="w-full">
            <div className="aspect-square flex items-center justify-center bg-gray-700 rounded">
                <Image src="/adventure.png" width={40} height={40} alt="Aventurier" />
            </div>
            <p className="mt-2">Aventurier</p>
        </button>
    </div>
    )
}

export default UserSorting;