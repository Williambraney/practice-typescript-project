import { ReactNode } from "react";

type ListItemProps = {
    children: ReactNode
};

export default function ListItem({
    children
}: ListItemProps ){

    return (
        <li className="list-item">
            { children }
        </li>
    )
};