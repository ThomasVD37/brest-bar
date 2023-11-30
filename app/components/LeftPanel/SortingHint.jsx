import { selectFilter } from "@/lib/redux"
import clsx from "clsx"
import { useSelector } from "react-redux"

const SortingHint = () => {

    const currentFilter = useSelector(selectFilter)

    return (
        <div className={clsx(
            "flex justify-center p-4 bg-gray-700 italic rounded text-sm mt-4 mx-4",
            {
                "hidden": currentFilter === 'none',
            })
            }>
            {currentFilter === 'student' && <p>"C'est cliché tout de même l'ouverture le jeudi"</p>}
            {currentFilter === 'adventure' && <p>"Les avis google, c'est surfait"</p>}
            {currentFilter === 'breton' && <p>"Pas de département Breton dans le numéro ? Non merci."</p>}
        </div>
    )
}

export default SortingHint;