interface PersonalDataPageProps {
    onNext: () => void;
}

export const PersonalData = ({ onNext }: PersonalDataPageProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="p-7">
            <h1 className="text-xl">PersonalData</h1>
        </div>
    );
};
