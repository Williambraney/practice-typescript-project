import { Session } from './SessionList';
import { Link } from 'react-router-dom';

type ListItemProps = {
    session: Session
};

export default function SessionListItem({
    session
}: ListItemProps ){

    return (
        <>
            <li className = 'session-item'>
                <div
                    className = 'session-box'
                >
                    <img 
                        src = { session.image }
                        alt = { session.title }
                        className = 'session-image'
                    />
                    <div
                        className = 'subheader'
                    >
                        { session.title }
                    </div>
                    <div
                        className = 'description'
                    >
                        { session.summary }
                    </div>
                    <Link 
                        to = { `/sessions/${session.id}` } 
                        className='button'
                    >
                        Learn more
                    </Link>
                </div>
            </li>
        </>
    )
};