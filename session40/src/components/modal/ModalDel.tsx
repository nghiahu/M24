import React from 'react';


interface ModalProps {
  employee: Employee; 
  onDelete?: (id: number) => void;
  onClose: () => void;
}

export default function ModalDel({ employee, onDelete, onClose }: ModalProps) {
  const handleDelete = () => { onDelete(employee.id);
  };

  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-title">
          <h4>Cảnh báo</h4>
          <i className="fa-solid fa-xmark" onClick={onClose} />
        </div>
        <div className="modal-body-custom">
          <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-light" onClick={onClose}>Hủy</button>
          <button className="btn btn-danger" onClick={handleDelete}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
}
