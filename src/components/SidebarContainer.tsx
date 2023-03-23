import { fields } from "../Data/DataContainers/data";
import { FinishPage } from "./dynamicFroms/FinishPage";
import { useStore } from "../store/CurrentPageStore";
import { ProjectDetailForm } from "./dynamicFroms/ProjectDetailForm";
import { StartPage } from "./dynamicFroms/StartPage";

interface Sidebarprobs {}
const Sidebar: React.FC<Sidebarprobs> = () => {
    const inc = useStore((state) => state.inc);
    const dec = useStore((state) => state.dec);
    const currentPage = useStore((state) => state.currentPage);

    return (
        <div className="z-30 h-full bg-white shadow-2xl">
            <div className="z-40 flex bg-white border-1 border-grey-100 h-[7%]">
                <div
                    className={` w-[80%] ${
                        currentPage === 1 ? "invisible" : "visible"
                    } `}
                >
                    Bild
                </div>
                <div className="w-[20%]">X</div>
            </div>
            {currentPage === 1 && <StartPage onNext={inc} />}
            {currentPage === 2 && (
                <ProjectDetailForm fields={fields} onNext={inc} />
            )}
            {currentPage === 4 && <FinishPage onNext={inc}></FinishPage>}

            <div
                className={` container w-[25%] fixed items-center bg-white h-[10%] bottom-0 border-1 border-grey-100 flex justify-center ${
                    currentPage === 4 || currentPage === 1
                        ? "invisible"
                        : "visible"
                } `}
            >
                <button
                    onClick={dec}
                    className={`h-10 p-5 border-2 border-gray-600 text-gray-600 mx-auto flex flex-col justify-center text-center ${
                        currentPage === 4 || currentPage === 1
                            ? "invisible"
                            : "visible"
                    }`}
                >
                    zurück
                </button>
                <button
                    onClick={inc}
                    className={`h-10 p-5 text-center font-bold leading-normal text-white bg-bh-green hover:bg-bh-green-hover mx-auto flex flex-col justify-center transition duration-150 ease-in-out border border-transparent select-none whitespace-nowrap ${
                        currentPage === 4 ? "invisible" : "visible"
                    }`}
                >
                    Weiter
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
