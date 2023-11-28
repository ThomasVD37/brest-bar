import BarList from "./BarList";
import UserSorting from "./UserSorting";

const LeftPanel = () => {

    return (
        <section className="bg-gray-800 w-1/2 p-4 text-white max-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-gray-700">
            <div>
                <h2>Trouver le bar qu&#39;il vous faut selon <span>votre humeur</span></h2>
            </div>
            <div>
                <h3>Vous êtes plutôt ?</h3>
                <UserSorting />
            </div>
            <div>
                <h3 className="font-bold text-sky-400">Explorer</h3>
                <BarList />
            </div>
        </section>
    )
};

export default LeftPanel;