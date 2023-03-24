import { useFormContext } from "react-hook-form";
import { DynamicFieldData, SelectOption } from "./dynamic-control-types";

export const DynamicControl = ({
    inputType,
    fieldName,
    defaultValue,
    options = [],
    config = {},
}: DynamicFieldData) => {
    const { register } = useFormContext();

    switch (inputType) {
        case "text":
            return (
                <input
                    className="w-full h-20 p-3 m-3 bg-bh-text-gray"
                    type="text"
                    {...register(fieldName, config)}
                    defaultValue={defaultValue}
                />
            );
        case "select": {
            return (
                <select
                    {...register(fieldName, config)}
                    defaultValue={defaultValue}
                    name={fieldName}
                    id={fieldName}
                >
                    {options.map((o, index) => (
                        <option key={index} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            );
        }
        case "number":
            return (
                <input
                    type="number"
                    {...register(fieldName, config)}
                    defaultValue={defaultValue}
                />
            );

        case "checkbox":
            return (
                <>
                    {options?.map((option: SelectOption) => (
                        <label key={option.value}>
                            <input
                                type="checkbox"
                                value={option.value}
                                className="p-3 m-3 text-bh-gray"
                                {...register(fieldName, config)}
                            />
                            {option.label}
                        </label>
                    ))}
                </>
            );
        case "radio":
            return (
                <>
                    {options?.map((option: SelectOption) => (
                        <label key={option.value}>
                            <input
                                type="radio"
                                value={option.value}
                                className="p-3 m-3 text-bh-gray"
                                {...register(fieldName, config)}
                            />
                            {option.label}
                        </label>
                    ))}
                </>
            );
        default:
            return <input type="text" />;
    }
};
