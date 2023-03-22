import JsonData from "../../Data/Json/StartingTextData.json";

interface StartPageProps {
    onNext: () => void;
}

export const StartPage = ({ onNext }: StartPageProps) => {
    const { headerText, subHeaderText } = JsonData;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-5">
                <h1 className="text-xl pb-9 text-bh-dark-gray">{headerText}</h1>
                <p className="text-sm text-bh-gray pb-9">{subHeaderText}</p>
                <h2 className="text-xl text-bold pb-9 text-bh-dark-gray">
                    Ihre Vorteile im Überblick
                </h2>
            </div>
        </form>
    );
};
