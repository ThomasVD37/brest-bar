
import { selectFilter, setFilter } from "@/lib/redux";
import clsx from "clsx";
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
                <button onClick={() => handlefilter('breton')} className="w-full focus:text-sky-500">
                    <div className={clsx(
                        "aspect-square flex items-center justify-center bg-gray-700 rounded",
                        {
                            "bg-gray-600 border-2 border-sky-500": currentFilter === 'breton',
                        })
                    }>
                        <Image src="/bzh.png" width={50} height={50} alt="Breton" />
                    </div>
                    <p className="mt-2 ">BZH</p>
                </button>
                <button onClick={() => handlefilter('student')} className="w-full">
                    <div className={clsx(
                        "aspect-square flex items-center justify-center bg-gray-700 rounded",
                        {
                            "bg-gray-600 border-2 border-sky-500": currentFilter === 'student',
                        })
                    }>
                        <Image src="/party.png" width={50} height={50} alt="Etudiant" />
                    </div>
                    <p className="mt-2">Etudiant</p>
                </button>
                <button onClick={() => handlefilter('adventure')} className="w-full">
                    <div className={clsx(
                        "aspect-square flex items-center justify-center bg-gray-700 rounded",
                        {
                            "bg-gray-600 border-2 border-sky-500": currentFilter === 'adventure',
                        })
                    }>
                        <Image src="/question-mark.png" width={50} height={50} alt="Aventurier" />
                    </div>
                    <p className="mt-2">Aventurier</p>
                </button>
            </div>
    )
}

export default UserSorting;