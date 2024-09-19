export interface IButton {
    title: string;
    onClick?: () => void;
    type?: string;
    disabled?: boolean;
}