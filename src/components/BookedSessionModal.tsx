import { useSessionSelector } from '../store/hooks';
import BookedSessionList from './BookedSessionList';
import Modal from './Modal';
import SessionsList from './SessionList';
import SubHeader from './SubHeader';

type BookedSessionModalProps = {
    open: boolean;
};

export default function BookedSessionModal({
    open
}: BookedSessionModalProps ){

    const sessions = useSessionSelector( state => state.session.sessions );
    console.log('Booked sessions:', sessions);
    return (
        <Modal
            open = { open }
            // onClose = { handleClick }
        >
            <SubHeader>
                All sessions
            </SubHeader>
            <BookedSessionList 
                sessions = { sessions }
            />
        </Modal> 
    )
}