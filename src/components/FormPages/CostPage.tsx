interface CostPageProps {
    onNext: () => void;
}

export const CostPage = ({ onNext }: CostPageProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="p-7">
            <h1 className="text-xl">CostPage</h1>
        </div>
    );
};
