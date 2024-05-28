import React, { useState, useEffect } from 'react';
import ModalBlock from './components/modal/ModalBlock';
import ModalDel from './components/modal/ModalDel';
import ModalFrom from './components/modal/ModalFrom';
interface Employee {
  id: number;
  name: string;
  dob: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';
}
export default function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddOrEditEmployee = (employee) => {
    if (selectedEmployee) {
      setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
    setModalType(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    setModalType(null);
  };

  const handleBlockUnblockEmployee = (id, status) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, status } : emp));
    setModalType(null);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-[80%] m-auto mt-4 h-[100vh]">
        <main className="main">
          <header className="d-flex justify-content-between mb-3">
            <h3>Nhân viên</h3>
            <button className="btn btn-primary" onClick={() => { setSelectedEmployee(null); setModalType('form'); }}>
              Thêm mới nhân viên
            </button>
          </header>
          <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <input
              style={{ width: 350 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
          </div>
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th colSpan={3}>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div className={`status ${employee.status === 'active' ? 'status-active' : 'status-stop'}`} />
                      <span>{employee.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}</span>
                    </div>
                  </td>
                  <td>
                    <span className="button button-block" onClick={() => { setSelectedEmployee(employee); setModalType('block'); }}>
                      {employee.status === 'active' ? 'Chặn' : 'Bỏ chặn'}
                    </span>
                  </td>
                  <td>
                    <span className="button button-edit" onClick={() => { setSelectedEmployee(employee); setModalType('form'); }}>Sửa</span>
                  </td>
                  <td>
                    <span className="button button-delete" onClick={() => { setSelectedEmployee(employee); setModalType('delete'); }}>Xóa</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="d-flex justify-content-end align-items-center gap-3">
            <select className="form-select">
              <option selected>Hiển thị 10 bản ghi trên trang</option>
              <option>Hiển thị 20 bản ghi trên trang</option>
              <option>Hiển thị 50 bản ghi trên trang</option>
              <option>Hiển thị 100 bản ghi trên trang</option>
            </select>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
      
      {modalType === 'form' && (
        <ModalFrom
          employee={selectedEmployee}
          onSave={handleAddOrEditEmployee}
          onClose={() => setModalType(null)}
        />
      )}
      {modalType === 'delete' && (
        <ModalDel
          employee={selectedEmployee}
          onDelete={handleDeleteEmployee}
          onClose={() => setModalType(null)}
        />
      )}
      {modalType === 'block' && (
        <ModalBlock
          employee={selectedEmployee}
          onBlock={handleBlockUnblockEmployee}
          onClose={() => setModalType(null)}
        />
      )}
    </>
  );
}
