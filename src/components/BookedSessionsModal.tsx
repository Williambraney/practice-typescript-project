import { useSessionSelector } from '../store/hooks';
import Modal from './Modal';

type BookedSessionsModalProps = {
    open: boolean;
};

export default function BookedSessionsModal({
    open
}: BookedSessionsModalProps ){

    const sessions = useSessionSelector( state => state.session.sessions );
    console.log('Booked sessions:', sessions);
    return (
        <Modal
            open = { open }
            // onClose = { handleClick }
        >
            <h2>
                All sessions
            </h2>
            {
                sessions.length === 0 && (
                    <p>
                        No booked sessions found.
                    </p>
                )
            }
            {
                sessions.map( session => (
                    <div
                        key = { session.id }
                        className = 'session'
                    >
                        <h3>
                            { session.title }
                        </h3>
                        <p>
                            { session.summary }
                        </p>
                        <p>
                            { session.date }
                        </p>
                    </div>
                ))
            }
        </Modal> 
    )
}