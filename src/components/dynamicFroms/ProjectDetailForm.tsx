import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../../helper/dynamic-control-types";
import { DynamicControl } from "../../helper/DynamicControl";
import React, { useState } from "react";

interface FormData {
    [key: string]: any;
}

interface ProjectDetailFormProbs {
    fields: DynamicFieldData[];
    onNext: () => void;
}

export const ProjectDetailForm = ({
    fields,
    onNext,
}: ProjectDetailFormProbs) => {
    const [formData, setFormData] = useState<FormData>({});
    const formMethods = useForm({ defaultValues: formData });
    const {
        handleSubmit,
        formState: { isSubmitting },
    } = formMethods;

    const onSubmit = (data: any) => {
        setFormData(data);
        onNext();
    };

    return (
        <div className="px-4 py-5">
            <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...formMethods}>
                    {fields.map((d, i) => (
                        <div key={i}>
                            <label
                                className="p-3 text-xl font-bold text-bh-dark-gray "
                                htmlFor={d.fieldName}
                            >
                                {d.label}
                            </label>
                            <div>
                                <DynamicControl {...d} />
                            </div>
                        </div>
                    ))}
                </FormProvider>

                <button
                    className="p-3 m-3 rounded-md shadow-lg "
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting" : "Submit"}
                </button>

                {Object.keys(formData).length > 0 && (
                    <div>
                        <h2>Form Data:</h2>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                )}
            </form>
        </div>
    );
};
