import { ReactNode } from 'react';

type LabelProps = {
    htmlFor: string;
    children: ReactNode;
};

export default function Label({
    htmlFor,
    children
}: LabelProps) {

    return (
        <label 
            htmlFor = { htmlFor }
        >
            { children }
        </label>
    );

}