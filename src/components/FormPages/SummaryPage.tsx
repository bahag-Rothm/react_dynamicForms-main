interface SummaryPageProps {
    onNext: () => void;
}

export const SummaryPage = ({ onNext }: SummaryPageProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="p-7">
            <h1 className="text-xl">SummaryPage</h1>
        </div>
    );
};
