import JsonData from "../../Data/Json/StartingTextData.json";

import { useEffect, useState } from "react";
import { useStore } from "../../store/CurrentPageStore";
interface StartPageProps {
    onNext: () => void;
}

export const StartPage = ({ onNext }: StartPageProps) => {
    const inc = useStore((state) => state.inc);
    const currentPage = useStore((state) => state.currentPage);

    const { headerText, subHeaderText } = JsonData;
    const [fachzentrum, setFachzentrum] = useState(true);
    const [telefon, setTelefon] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleRadioChangeFachzentrum = () => {
        setFachzentrum(true);
        setTelefon(false);
    };

    const handleRadioChangeTelefon = () => {
        setTelefon(true);
        setFachzentrum(false);
    };

    //for testing
    useEffect(() => {
        console.log("telefon: ", telefon);
        console.log("fachzentrum: ", fachzentrum);
    }, [telefon, fachzentrum]);

    return (
        <div className="px-4 py-5">
            <div className="">
                <h1 className="text-xl pb-9 text-bh-dark-gray">{headerText}</h1>
                <p className="text-sm text-bh-gray pb-9">{subHeaderText}</p>
                <h2 className="text-xl font-bold text-bh-dark-gray">
                    Ihre Vorteile im Überblick:
                </h2>
            </div>
            <table className="mb-5 text-sm table-auto text-bh-gray">
                <thead>
                    <tr className="px-4 py-1">
                        <th className=" w-1/10"></th>
                        <th className=" w-9/10"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="px-4 py-1 ">
                        <td className="">X</td>
                        <td className="px-4 py-1 ">
                            Unterstützung durch unsere Experten
                        </td>
                    </tr>
                    <tr>
                        <td className="">X</td>
                        <td className="px-4 py-1 ">360 Gard Service</td>
                    </tr>
                    <tr>
                        <td className="">X</td>
                        <td className="px-4 py-1 ">
                            Professionelle Handwerksunternehmen und
                            Handelskoordination
                        </td>
                    </tr>
                    <tr>
                        <td className="">X</td>
                        <td className="px-4 py-1 ">
                            Attraktive Materialpreise
                        </td>
                    </tr>
                    <tr>
                        <td className="">X</td>
                        <td className="px-4 py-2 ">
                            5 Jahre BAUHAUS Gewährleistung
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mb-5 text-sm">
                <p className="inline-block font-bold text-bh-dark-gray">
                    Vereinbaren Sie jetzt einen Termin
                </p>
                <span className="inline-block text-bh-gray">
                    {" "}
                    für eine unverbindliche Erstberatung von ca. 30 Minuten.
                </span>
            </div>
            <div className="text-lg">
                <p className="inline-block font-bold text-bh-dark-gray">
                    Wie dürfen wir sie beraten? *
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center text-bh-gray">
                    <input
                        type="radio"
                        id="radio1"
                        name="radio-group"
                        checked={fachzentrum}
                        onChange={handleRadioChangeFachzentrum}
                    />
                    <label
                        htmlFor="radio1"
                        className="block ml-2 text-sm font-medium text-gray-700"
                    >
                        Im Fachzentrum
                    </label>

                    <input
                        type="radio"
                        id="radio2"
                        name="radio-group"
                        checked={telefon}
                        onChange={handleRadioChangeTelefon}
                    />
                    <label
                        htmlFor="radio2"
                        className="block ml-2 text-sm font-medium text-gray-700"
                    >
                        Per Rückruf
                    </label>
                </div>
            </form>
            <button onClick={inc} className="btn-true">
                Weiter
            </button>
        </div>
    );
};
