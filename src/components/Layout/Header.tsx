import { useStore } from "../../store/CurrentPageStore";
interface Headerprobs {}
const Header: React.FC<Headerprobs> = () => {
    const currentPage = useStore((state) => state.currentPage);

    return (
        <div className="z-40 flex bg-white h-[7%] ">
            <div
                className={`w-[80%] flex justify-between ${
                    currentPage === 1 ? "invisible" : "visible"
                } `}
            >
                <div className="flex items-center justify-center px-6 ml-1 text-2xl bg-white text-bold whitespace-nowrap text-bh-dark-gray">
                    1. Projekt
                </div>
                <div className="flex items-center px-6 arrow "> 2.</div>
                <div className="flex items-center w-full mx-1 bg-bh-text-gray ">
                    {" "}
                    3.
                </div>
            </div>
            <div className="w-[20%] h-full flex items-center justify-center ml-1 align-middle text-3xl ">
                <button>X</button>
            </div>
        </div>
    );
};

export default Header;
