interface PersonalDataPageProps {
    onNext: () => void;
}

export const PersonalData = ({ onNext }: PersonalDataPageProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="p-7">
            <h1 className="text-xl">
                Ihr Termin wurde gebucht. Wir freuen uns auf sie!
            </h1>
            <div className="container flex h-24 space-x-4 border">
                <div className="w-1/3 border ">test</div>
                <div className="flex items-center w-2/3 mx-auto text-center">
                    <p className="text-sm ">
                        Sie erhalten in Kürze eine Bestätigung des gebuchten
                        termins per E-Mail.
                    </p>
                </div>
            </div>
        </div>
    );
};
