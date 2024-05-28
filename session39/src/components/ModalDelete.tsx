import React from 'react';

interface ModalDeleteProps {
  confirmDelete: () => void;
  cancelDelete: () => void;
}

export default function ModalDelete({ confirmDelete, cancelDelete }: ModalDeleteProps) {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Xác nhận</h5>
          <i className="fas fa-xmark" onClick={cancelDelete} />
        </div>
        <div className="modal-body-custom">
          <p>Bạn chắc chắn muốn xóa công việc này?</p>
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light" onClick={cancelDelete}>Hủy</button>
          <button className="btn btn-danger" onClick={confirmDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
