import { ReactNode } from 'react';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({
    open,
    onClose,
    children
}: ModalProps ) {

    if (!open) return null;

    return (
        <div className='modal-overlay' onClick={ onClose }>
            <div className='modal'>
                { children }
            </div>
        </div>
    )
};