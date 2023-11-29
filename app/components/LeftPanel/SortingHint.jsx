import { selectFilter } from "@/lib/redux"
import { useSelector } from "react-redux"

const SortingHint = () => {

    const currentFilter = useSelector(selectFilter)
    console.log(currentFilter)

    return (
        <>
            {currentFilter === 'breton' ??
                <div className="flex justify-center p-4 bg-gray-700 italic rounded text-sm mt-4 mx-4">
                    <p>"Pas de département Breton dans le numéro ? Non merci."</p>
                </div>}
            {currentFilter === 'student' ??
                <div className="flex justify-center p-4 bg-gray-700 italic rounded text-sm mt-4 mx-4">
                    <p>"C'est cliché tout de même l'ouverture le jeudi"</p>
                </div>}
            {currentFilter === 'adventure' ??
                <div className="flex justify-center p-4 bg-gray-700 italic rounded text-sm mt-4 mx-4">
                    <p>"Les avis google, c'est surfait"</p>
                </div>}
        </>
    )
}

export default SortingHint;