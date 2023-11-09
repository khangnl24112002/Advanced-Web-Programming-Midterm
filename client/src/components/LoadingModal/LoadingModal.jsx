import Modal from 'react-bootstrap/Modal';
import LoadingSpinner from '../Spinner/Spinner';

const LoadingModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='text-center'>
                <h4>Đang xử lý, vui lòng đợi...</h4>
                <LoadingSpinner />
            </Modal.Body>
        </Modal>
    );
}

export default LoadingModal;