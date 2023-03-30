import { useStore } from "../../store/CurrentPageStore";
interface Footerprobs {}
const Footer: React.FC<Footerprobs> = () => {
    const inc = useStore((state) => state.inc);
    const dec = useStore((state) => state.dec);
    const currentPage = useStore((state) => state.currentPage);
    return (
        <div
            className={` container w-full flex items-center bg-white h-[10%] bottom-0 border-1 border-grey-100 justify-center ${
                currentPage === 7 || currentPage === 1 ? "invisible" : "visible"
            } `}
        >
            <button
                onClick={dec}
                className={`h-10 p-5 border-2 border-gray-600 text-gray-600 mx-auto flex flex-col justify-center text-center ${
                    currentPage === 7 || currentPage === 1
                        ? "invisible"
                        : "visible"
                }`}
            >
                zurück
            </button>
            <button
                onClick={inc}
                className={`btn-true ${
                    currentPage === 7 || currentPage === 1
                        ? "invisible"
                        : "visible"
                }`}
            >
                Weiter
            </button>
        </div>
    );
};

export default Footer;
