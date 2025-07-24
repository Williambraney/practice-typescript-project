import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useCallback, useState } from 'react';

export default function Root() {

    const [ open, setOpen ] = useState<boolean>( false );

    const handleClick = useCallback(() => {
        setOpen(!open);
    }, [ open ]);

    return (
        <>
            <Header>
                <h1
                    id = 'main-header'
                >
                ReactMentoring
                </h1>
                <HeaderLink
                    href='/'
                >
                  Our mission
                </HeaderLink>
                <HeaderLink
                    href='/sessions'
                >
                  Browse sessions
                </HeaderLink>
                <Button
                    onClick={ handleClick }
                >
                  Upcoming sessions
                </Button>
            </Header>
            <Outlet />
            <Modal
                open = { open }
                onClose = { handleClick }
            >
                <h2>
                    All sessions
                </h2>
            </Modal> 
        </>
    );
}
