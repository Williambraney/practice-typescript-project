import TextField from './Input';
import Modal from './Modal';
import Header from './Header';
import Label from './Label';
import Form from './Form';
import Button from './Button';
import { useSessionDispatch } from '../store/hooks';
import { addSession } from '../store/sessionSlice';

type BookSessionModalProps = {
    open: boolean;
    onClose: () => void;
    loadedSession: {
        id: string;
        title: string;
        description: string;
        date: string;
        summary: string;
        image: string;
        duration: number;
    };
};

export default function BookSessionModal({
    open,
    onClose,
    loadedSession
}: BookSessionModalProps ) {

    const dispatch = useSessionDispatch();

    function handleSubmit( data: unknown): void {
        const extractedData = data as {
      email: string;
      name: string;
    }

        const submittedData = {
            id : loadedSession.id,
            name : extractedData.name,
            email : extractedData.email,
            title : loadedSession.title,
            date : loadedSession.date,
            summary : loadedSession.summary,
            image : loadedSession.image,
            description : loadedSession.description,
            duration : loadedSession.duration

        };

        console.log('Form submitted with data:', extractedData);
        // onClose();
        dispatch(addSession(submittedData));
    }

    return (
        <Modal
            open = { open }
            // onClose = { onClose }
        >
            <Header>
                Book session
            </Header>
            <Form
                onSubmit = { handleSubmit }
            >
                <Label
                    htmlFor = 'name'
                >
                Your name
                </Label>
                <TextField
                    type = 'text'
                    placeholder = 'Enter your name'
                    id = 'name'
                    name = 'name'
                />
                <Label
                    htmlFor = 'email'
                >
                Your email
                </Label>
                <TextField
                    type = 'email'
                    placeholder = 'Your email'
                    id = 'email'
                    name = 'email'
                />
                { /* <Button
                    onClick = { onClose }
                >
                    Cancel
                </Button> */ }
                <Button>
                    Book session
                </Button>
            </Form>
        </Modal>
    );
}