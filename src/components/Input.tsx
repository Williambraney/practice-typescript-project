import { ChangeEvent } from 'react';

type InputProps = {
    placeholder: string;
    id: string;
    // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
    id,
    placeholder
}: InputProps){

    return (
        <input 
            className = 'control'
            id = { id }
            type = 'text'
            placeholder = { placeholder }
        />
    )
};