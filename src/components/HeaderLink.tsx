import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type HeaderLinkProps = {
    href: string;
    children: ReactNode;
}

export default function HeaderLink({
    href,
    children
}: HeaderLinkProps ){

    return (
        <NavLink
            to = { href } 
            className={ ({ isActive }) => isActive ? 'header-link-active' : 'header-link' }
        >
            { children }
        </NavLink>
    );
}