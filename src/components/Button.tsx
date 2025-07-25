import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonSubmitProps = ComponentPropsWithoutRef<'button'> & {
    children: ReactNode;
    type?: 'submit'; // Default type for submit buttons
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    children: ReactNode,
    onClick: () => void;
    type?: 'button'; // Default type for regular buttons
}

function isSubmitButton(props: ButtonSubmitProps | ButtonProps): props is ButtonSubmitProps {
    return !('onClick' in props);
}

export default function Button(props: ButtonSubmitProps | ButtonProps) {
    const { children } = props;

    if (isSubmitButton(props)) {
        return (
            <button
                { ...props } // Spread the props to allow for additional attributes like 'disabled' or 'form'
                className='button'
                type='submit'
            >
                { children }
                
            </button>
        );
    }

    const { onClick, ...rest } = props;

    return (
        <button
            className='button'
            onClick={ onClick }
            type='button'
            { ...rest } // Spread the rest of the props to allow for additional attributes
        >
            { children }
        </button>
    );
}