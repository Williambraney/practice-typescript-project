import { ComponentPropsWithoutRef } from 'react';

type InputProps = {
    placeholder: string;
    id: string;

    // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<'input'>;

export default function TextField({
    id,
    placeholder,
    ...props
}: InputProps){

    return (
        <input 
            id = { id }
            placeholder = { placeholder }
            { ...props }
        />
    )
};