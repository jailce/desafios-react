import { Control } from "react-hook-form";
import { IFormData } from "../../pages/Login/types";
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    placeholder?: string;
    control: Control<IFormData, any>;
    name: "email" | "password";
    errorMessage?: string;
}