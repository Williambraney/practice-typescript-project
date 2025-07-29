import { type Session } from './SessionList';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import Button from './Button';

type ListItemProps = {
    session: Session
};

export default function BookedSessionListItem({
    session
}: ListItemProps ){

    const date = new Date(session.date);

    const formattedDate = date.toLocaleDateString('en-GB', {
        year : 'numeric',
        month : 'short',  // "Nov"
        day : 'numeric',  // "1"
    });


    return (
        <>
            <li className = 'session-item'>
                <div
                    className = 'session-box'
                >
                    <SubHeader>
                        { session.title }
                    </SubHeader>
                    <p
                        className = 'description'
                    >
                        { session.summary }
                    </p>
                    <p>
                        { formattedDate }
                    </p>
                    <Button>
                        Cancel
                    </Button>
                </div>
            </li>
        </>
    )
};