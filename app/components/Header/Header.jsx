import Image from "next/image";

const Header = () => {
    return (
        <header className="z-20 relative w-full bg-gray-800 flex items-end p-2 shadow-md shadow-black/50">
            <Image src="/logo.png" width={34} height={34} alt="logo" className="mx-2" />
            <h1 className="text-white font-medium text-xl hover:text-sky-500">Brest <span className="text-sky-300">Bar</span></h1>
        </header>
    )
}

export default Header;