import { useParams } from 'react-router-dom';
import { useSessionDispatch, useSessionSelector } from '../store/hooks.ts';

import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../components/Button.tsx';
import { useCallback, useState } from 'react';
import { addSession } from '../store/sessionSlice.ts';
import Modal from '../components/Modal.tsx';
import BookSessionModal from '../components/BookSessionModal.tsx';

export default function SessionPage() {
    const params = useParams<{ id: string }>();

    const [ open, setOpen ] = useState<boolean>( false );

    const dispatch = useSessionDispatch();

    const sessionId = params.id;
    const loadedSession = SESSIONS.find((session) => session.id === sessionId);

    const handleOpen = useCallback(() => setOpen( !open ), [ open ]);

    const handleAddSession = useCallback(() => {

        dispatch( addSession( loadedSession ) );

        console.log('loadedSession')
      
    }, [ dispatch, loadedSession ]);

    console.log(useSessionSelector(state => state.session));

    if (!loadedSession) {
        return (
            <main id='session-page'>
                <p>No session found!</p>
            </main>
        );
    }

    return (
        <main id='session-page'>
            <article>
                <header>
                    <img
                        src={ loadedSession.image }
                        alt={ loadedSession.title }
                    />
                    <div>
                        <h2>{ loadedSession.title }</h2>
                        <time dateTime={ new Date(loadedSession.date).toISOString() }>
                            { new Date(loadedSession.date).toLocaleDateString('en-US', {
                                day : 'numeric',
                                month : 'short',
                                year : 'numeric',
                            }) }
                        </time>
                        <p>
                            <Button
                                onClick = { handleOpen }
                            >
                                Book session
                            </Button>
                        </p>
                    </div>
                </header>
                <p id='content'>{ loadedSession.description }</p>
            </article>
            <BookSessionModal
                onClose = { handleOpen }
                open = { open }
            />
        </main>
    );
}
