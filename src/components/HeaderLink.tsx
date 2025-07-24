import { ReactNode } from 'react';

type HeaderLinkProps = {
    href: string;
    children: ReactNode;
}

export default function HeaderLink({
    href,
    children
}: HeaderLinkProps ){

    return (
        <a 
            href = { href } 
            className='header-link'
        >
            { children }
        </a>
    );
}