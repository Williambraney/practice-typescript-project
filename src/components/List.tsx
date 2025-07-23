import { ReactNode } from 'react';

type ListProps = {
    children : ReactNode
};

export default function List({ 
    children 
}: ListProps ) {

    return (
        <ul 
            className="list" 
            id = 'test'
        >
            {children}
        </ul>
    );
}