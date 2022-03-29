import React from "react"

type ModeType = "internal" | "plain" | "outlined";
type VariantType = "top" | "bottom";
type ErrorPlacementType = "left" | "right" | "center";

interface InputSelectoProps<T>{
    name: Extract<keyof T, string>;
    label?: string;
    items: InputSelectData[];
    mode?: ModeType;
    errorPlacement?: ErrorPlacementType;
    variant?: VariantType;
    showError?: boolean;
    removeErrorContainer?: boolean;
    required?: boolean;
    placeholder?: string;
}

export interface InputSelectData{
    value: string;
    label: string;
}