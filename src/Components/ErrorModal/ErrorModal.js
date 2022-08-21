import React from 'react'
import Modal from 'react-modal'

import './ErrorModal.css';

Modal.setAppElement('#root')

const ErrorModal = (props) => {
    return (
        <div className='errormodal-maincontainer'>
            <Modal style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: '200'
                },
                content: {
                    top: '34%',
                    left: '20%',
                    right: '20%',
                    bottom: '34%',
                    background: '#fff',
                }
            }} isOpen={props.visible} onRequestClose={props.ModalHandler}>
                <div className='errormodal-content'>
                    <h1>{props.title}</h1>
                    <h3>{props.content}</h3>
                    <button onClick={props.ModalHandler} >OK</button>
                </div>
            </Modal>
        </div>
    )
}

export default ErrorModal;
