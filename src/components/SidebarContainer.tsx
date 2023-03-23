import { useState } from "react";
import { fields } from "../Data/DataContainers/data";
import { FinishPage } from "./dynamicFroms/FinishPage";

import { ProjectDetailForm } from "./dynamicFroms/ProjectDetailForm";
import { StartPage } from "./dynamicFroms/StartPage";

interface Sidebarprobs {}
const Sidebar: React.FC<Sidebarprobs> = () => {
    const [currentForm, setCurrentForm] = useState(1);

    const handleNextForm = () => {
        if (currentForm < 4) {
            console.log(currentForm);
            setCurrentForm(currentForm + 1);
        } else {
            setCurrentForm(currentForm + 0);
        }
    };

    const handlePreviousForm = () => {
        setCurrentForm(currentForm - 1);
    };

    return (
        <div className="z-30 h-full bg-white shadow-2xl">
            <div className="z-40 flex bg-white border-1 border-grey-100 h-[7%]">
                <div
                    className={` w-[80%] ${
                        currentForm === 1 ? "invisible" : "visible"
                    } `}
                >
                    Bild
                </div>
                <div className="w-[20%]">X</div>
            </div>
            {currentForm === 1 && <StartPage onNext={handleNextForm} />}
            {currentForm === 2 && (
                <ProjectDetailForm fields={fields} onNext={handleNextForm} />
            )}
            {currentForm === 4 && (
                <FinishPage onNext={handleNextForm}></FinishPage>
            )}

            <div
                className={` container w-[25%] fixed items-center bg-white h-[10%] bottom-0 border-1 border-grey-100 flex justify-center ${
                    currentForm === 4 || currentForm === 1
                        ? "invisible"
                        : "visible"
                } `}
            >
                <button
                    onClick={handlePreviousForm}
                    className={`h-10 p-5 border-2 border-gray-600 text-gray-600 mx-auto flex flex-col justify-center text-center ${
                        currentForm === 4 || currentForm === 1
                            ? "invisible"
                            : "visible"
                    }`}
                >
                    zurück
                </button>
                <button
                    onClick={handleNextForm}
                    className={`h-10 p-5 text-center font-bold leading-normal text-white bg-bh-green hover:bg-bh-green-hover mx-auto flex flex-col justify-center transition duration-150 ease-in-out border border-transparent select-none whitespace-nowrap ${
                        currentForm === 4 ? "invisible" : "visible"
                    }`}
                >
                    Weiter
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
