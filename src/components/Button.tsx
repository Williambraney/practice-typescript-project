import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode,
    onClick: () => void;
}

export default function Button({
    children,
    onClick
}: ButtonProps ) {
    return (
        <button 
            className='button' 
            onClick={ onClick }
            type = 'button'
        >
            { children }
        </button>
    );
}