import TextField from './Input';
import Modal from './Modal';
import Header from './Header';

type BookSessionModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function BookSessionModal({
    open,
    onClose,
}: BookSessionModalProps ) {

    return (
        <Modal
            open = { open }
            onClose = { onClose }
        >
            <Header>
                Book session
            </Header>
            <TextField
                placeholder = 'Enter your name'
                id = 'name'
            />
            <TextField
                placeholder = 'Your email'
                id = 'email'
            />
        </Modal>
    );
}