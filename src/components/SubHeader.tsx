import { ReactNode } from 'react';

type SubHeaderProps = {
    children: ReactNode;
};

export default function SubHeader({
    children
}: SubHeaderProps ){

    return (
        <h2 className='subheader'>
            { children }
        </h2>
    );
}