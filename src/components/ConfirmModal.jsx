import { FiTrash2 } from "react-icons/fi";

export default function ConfirmModal({ text, onCancel, onConfirm }) {

    return (
        <div className="modal-container">
            <div className="modal">
                <FiTrash2 className="trash-icon" />
                <p className="delete-text">{text}</p>
                <div className="modal-actions">
                    <button className="delete-cancel" onClick={onCancel}>Cancel</button>
                    <button className="delete" onClick={onConfirm}>Yes</button>
                </div>
            </div>
        </div>
    );
}
