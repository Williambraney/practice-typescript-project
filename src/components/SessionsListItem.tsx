import { Session } from './SessionsList';
import { Link } from 'react-router-dom';

type ListItemProps = {
    session: Session
};

export default function SessionsListItem({
    session
}: ListItemProps ){

    // const [ open, setOpen ] = useState<boolean>( false );

    // const handleClick = useCallback(() => {
    //     setOpen(!open);
    // }, [ open ]);

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
                    <Link  to = { `/sessions/${session.id}` } className='button'>
                        Learn more
                    </Link>
                </div>
            </li>
            { /* <Modal 
                open = { open }
                onClose = { handleClick }
            >
                <h2>{ session.title }</h2>
                <p>{ session.description }</p>
                <p>Duration: { session.duration } minutes</p>
                <p>Date: { new Date(session.date).toLocaleDateString() }</p>
                <Button onClick={ handleClick }>Close</Button>
            </Modal> */ }
        </>
    )
};