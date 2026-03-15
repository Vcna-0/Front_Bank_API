import { useState, useEffect } from 'react';
import './EditNameModal.css';

function EditNameModal({ isOpen, onClose, onSave, initialFirstName = '', initialLastName = '' }) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  useEffect(() => {
    if (isOpen) {
      setFirstName(initialFirstName);
      setLastName(initialLastName);
    }
  }, [isOpen, initialFirstName, initialLastName]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    onSave(firstName, lastName);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 id="modal-title">Edit user info</h2>
        <form onSubmit={handleSubmit}>
          <div className="modal-field">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
            />
          </div>
          <div className="modal-field">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="button button--cta">Save</button>
            <button type="button" className="button button--cta" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNameModal;
