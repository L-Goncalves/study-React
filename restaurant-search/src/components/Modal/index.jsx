import React, { useEffect } from 'react';
import { Overlay, Dialog } from './styles';
import Portal from './Portal';
const Modal = ({ chidren, open, onClose }) => {
    useEffect(() => {
        function onEsc(e) {
            // keycode of the keyboard key
            if(e.keyCode === 27) onClose();    
        } 
        window.addEventListener('keydown', onEsc);
       
        return () => {
            window.removeEventListener('keydown', onEsc)
        }

    }, [onClose])

    if(!open) return null;
    const onOverlayClick = () => {
        onClose();
    }

    const onDialogClick = (e) => {
        e.stopPropagation();
    }

    if(open){
        return (
            <Portal>
                <Overlay onClick={onOverlayClick}>
                    <Dialog onClick={onDialogClick}>{chidren}</Dialog>
                </Overlay>
            </Portal>
        )
    }
}

export default Modal;