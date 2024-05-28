import React from 'react';


interface ModalProps {
  employee: Employee; 
  onBlock?: (id: number, status: 'active' | 'inactive') => void;
  onClose: () => void;
}

export default function ModalBlock({ employee, onBlock, onClose }: ModalProps) {
  const handleBlockUnblock = () => { onBlock(employee.id, employee.status === 'active' ? 'inactive' : 'active');
  };

  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-title">
          <h4>Cảnh báo</h4>
          <i className="fa-solid fa-xmark" onClick={onClose} />
        </div>
        <div className="modal-body-custom">
          <span>{employee.status === 'active' ? 'Bạn có chắc chắn muốn chặn tài khoản này?' : 'Bạn có chắc chắn muốn bỏ chặn tài khoản này?'}</span>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-light" onClick={onClose}>Hủy</button>
          <button className="btn btn-danger" onClick={handleBlockUnblock}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
}
