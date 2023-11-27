import Image from "next/image";
import { useState } from "react";
import BarList from "../BarList/BarList";

const LeftPanel = () => {

    const [sort, setSort] = useState("none");

    console.log(sort);

    return (
        <section className="bg-gray-800 w-1/2 p-4 text-white overflow-y-scroll">
            <div>
                <h2>Trouver le bar qu&#39;il vous faut selon <span>votre humeur</span></h2>
            </div>
            <div>
                <h3>Quel est votre profil ?</h3>
                <div className="flex justify-between gap-4 text-sm items-start">
                    <button onClick={() => setSort('breton')} className="w-full">
                        <div className="aspect-square flex items-center justify-center bg-gray-700 rounded">
                            <Image src="/bretagne.png" width={40} height={40} alt="Breton" />
                        </div>
                        <p className="mt-2">Breton</p>
                    </button>
                    <button onClick={() => setSort('student')} className="w-full">
                        <div className="aspect-square flex items-center justify-center bg-gray-700 rounded">
                            <Image src="/student.png" width={40} height={40} alt="Etudiant" />
                        </div>
                        <p className="mt-2">Etudiant</p>
                    </button>
                    <button onClick={() => setSort('adventure')} className="w-full">
                        <div className="aspect-square flex items-center justify-center bg-gray-700 rounded">
                            <Image src="/adventure.png" width={40} height={40} alt="Aventurier" />
                        </div>
                        <p className="mt-2">Aventurier</p>
                    </button>
                </div>
            </div>
            <div>
                <h2>Explorer</h2>
                <BarList sorting={sort} />
            </div>
        </section>
    )
};

export default LeftPanel;