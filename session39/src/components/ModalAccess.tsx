import React from 'react';

interface ModalAccessProps {
  setAccess: (showAccess: boolean) => void;
}

export default function ModalAccess({ setAccess }: ModalAccessProps) {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Cảnh báo</h5>
          <i className="fas fa-xmark" onClick={() => setAccess(false)} />
        </div>
        <div className="modal-body-custom">
          <p>Tên công việc không được phép để trống.</p>
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light" onClick={() => setAccess(false)}>Đóng</button>
        </div>
      </div>
    </div>
  );
}
