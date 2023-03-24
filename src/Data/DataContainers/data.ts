import { DynamicFieldData } from "../../helper/dynamic-control-types";

export const fields: DynamicFieldData[] = [
    {
        label: "Was planen Sie? *",
        inputType: "radio",
        fieldName: "planning",
        defaultValue: "",
        options: [
            { label: "Vollsanierung", value: "Vollsanierung" },
            { label: "Neubau", value: "Neubau" },
            { label: "Teilsanierung", value: "Teilsanierung " },
        ],
        config: { required: true },
    },
    {
        label: "Wie Groß ist das Badezimmer *",
        inputType: "radio",
        fieldName: "size",
        defaultValue: "",
        options: [
            { label: "bis zu 3m", value: "short" },
            { label: "4m bis 7m", value: "middle" },
            { label: "ab 8m", value: "big" },
        ],
        config: { required: true },
    },
    {
        fieldName: "moreInformation",
        inputType: "text",
        label: "Sonstiges:",
        defaultValue: "",
    },

    {
        fieldName: "pourpose",
        inputType: "checkbox",
        label: "Was soll gemacht werden?",
        options: [
            { label: "Dusche", value: "Dusche" },
            { label: "Badewanne", value: "Badewanne" },
        ],
        defaultValue: "",
    },
];
