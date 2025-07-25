import { FormEvent, ReactNode } from 'react'

type FormProps = {
    children: ReactNode;
    onSubmit: (value:unknown) => void;
}

export default function Form({
    onSubmit,
    children
}: FormProps ) {

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData) 
        console.log(event.currentTarget)
        onSubmit(data);
    }
    
    return (
        <form
            className = 'control'
            onSubmit={ handleSubmit }
        >
            { children }
        </form>
    )
};