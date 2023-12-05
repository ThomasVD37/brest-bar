
import { selectBars, selectFilter, setCurrentBars, setFilter, setPopupInvisible } from "@/lib/redux";
import { filterBars } from "@/lib/utils/filterBars";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";
import Image from "next/image";

const UserSorting = () => {

    const currentFilter = useSelector(selectFilter);
    const bars = useSelector(selectBars);
    const dispatch = useDispatch();

    const handlefilter = (filter: string) => {
        if (filter === currentFilter) {
            dispatch(setFilter('none'));
            dispatch(setPopupInvisible());
            dispatch(setCurrentBars(filterBars(bars, 'none')));
        } else {
            dispatch(setFilter(filter));
            dispatch(setPopupInvisible());
            dispatch(setCurrentBars(filterBars(bars, filter)));
        }
    }

    return (
            <div className="flex justify-between gap-4 sm:gap-8 text-sm items-start">
                <button onClick={() => handlefilter('breton')} className="w-full">
                    <div className={clsx(
                        "aspect-square flex items-center justify-center rounded hover:bg-sky-900 transition-all duration-300",
                        {
                            "bg-gray-600 border-2 border-sky-500": currentFilter === 'breton',
                            "bg-gray-700": currentFilter !== 'breton',
                        })
                    }>
                        <Image src="/bzh.png" width={60} height={60} alt="Breton" className="hidden sm:block"/>
                        <Image src="/bzh.png" width={40} height={40} alt="Breton" className="block sm:hidden"/>
                    </div>
                    <p className="mt-2 ">BZH</p>
                </button>
                <button onClick={() => handlefilter('student')} className="w-full">
                    <div className={clsx(
                        "aspect-square flex items-center justify-center rounded hover:bg-sky-900 transition-all duration-300",
                        {
                            "bg-gray-600 border-2 border-sky-500": currentFilter === 'student',
                            "bg-gray-700": currentFilter !== 'student',
                        })
                    }>
                        <Image src="/party.png" width={60} height={60} alt="Etudiant" className="hidden sm:block"/>
                        <Image src="/party.png" width={40} height={40} alt="Etudiant" className="block sm:hidden"/>
                    </div>
                    <p className="mt-2">Etudiant</p>
                </button>
                <button onClick={() => handlefilter('adventure')} className="w-full">
                    <div className={clsx(
                        "aspect-square flex items-center justify-center rounded hover:bg-sky-900 transition-all duration-300",
                        {
                            "bg-gray-600 border-2 border-sky-500": currentFilter === 'adventure',
                            "bg-gray-700": currentFilter !== 'adventure',
                        })
                    }>
                        <Image src="/question-mark.png" width={60} height={60} alt="Aventurier" className="hidden sm:block"/>
                        <Image src="/question-mark.png" width={40} height={40} alt="Aventurier" className="block sm:hidden"/>
                    </div>
                    <p className="mt-2">Aventurier</p>
                </button>
            </div>
    )
}

export default UserSorting;