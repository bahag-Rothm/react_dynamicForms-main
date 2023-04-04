interface DatePickerPageProps {
    onNext: () => void;
}

export const DatePicker = ({ onNext }: DatePickerPageProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="p-7">
            <h1 className="text-xl">DatePicker</h1>
        </div>
    );
};
