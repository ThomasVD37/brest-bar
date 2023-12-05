import { selectFilter } from "@/lib/redux"
import { useSelector } from "react-redux"
import clsx from "clsx"

const SortingHint = () => {

    const currentFilter = useSelector(selectFilter)

    return (
        <div className={clsx(
            "flex justify-center p-4 bg-gray-700 italic rounded text-sm mt-4 mx-4 text-center",
            {
                "hidden": currentFilter === 'none',
            })
            }>
            {currentFilter === 'student' && <p>&#34;C&#39;est cliché tout de même l&#39;ouverture le jeudi&#34;</p>}
            {currentFilter === 'adventure' && <p>&#34;Les avis google, c&#39;est surfait&#34;</p>}
            {currentFilter === 'breton' && <p>&#34;Pas de département Breton dans le numéro ? Non merci.&#34;</p>}
        </div>
    )
}

export default SortingHint;