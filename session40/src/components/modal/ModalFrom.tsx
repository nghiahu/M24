import React, { useState, useEffect } from 'react';

interface ModalProps {
  employee?: Employee; 
  onSave: (employee: Employee) => void;
  onClose: () => void;
}

export default function ModalFrom({ employee, onSave, onClose }: ModalProps) {
  const [formData, setFormData] = useState<Employee>({
    id: employee?.id || 0,
    name: employee?.name || '',
    dob: employee?.dob || '',
    email: employee?.email || '',
    address: employee?.address || '',
    status: employee?.status || 'active'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between align-items-center">
          <h4>{employee ? 'Chỉnh sửa nhân viên' : 'Thêm mới nhân viên'}</h4>
          <i className="fa-solid fa-xmark" onClick={onClose} />
        </div>
        <div>
          <label className="form-label" htmlFor="userName">Họ và tên</label>
          <input id="userName" name="name" type="text" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label className="form-label" htmlFor="dateOfBirth">Ngày sinh</label>
          <input id="dateOfBirth" name="dob" type="date" className="form-control" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label className="form-label" htmlFor="address">Địa chỉ</label>
          <textarea id="address" name="address" className="form-control" rows={3} value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" className="w-100 btn btn-primary">
            {employee ? 'Cập nhật' : 'Thêm mới'}
          </button>
        </div>
      </form>
    </div>
  );
}
