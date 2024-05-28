import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ModalAccess from './components/ModalAccess';
import ModalDelete from './components/ModalDelete';
import React, { useEffect, useState } from 'react';
import './App.css'; // Import CSS file

interface TodoList {
  id: number;
  name: string;
  status: boolean;
}

export default function App() {
  const [list, setList] = useState<TodoList[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [showAccess, setAccess] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [todoToDelete, setTodoToDelete] = useState<TodoList | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const save = (newList: TodoList[]) => {
    localStorage.setItem("todoList", JSON.stringify(newList));
  };

  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) {
      setAccess(true);
      return;
    }
    if (isEditing && editTodoId !== null) {
      const updatedList = list.map(todo =>
        todo.id === editTodoId ? { ...todo, name: inputValue } : todo
      );
      setList(updatedList);
      save(updatedList);
      setIsEditing(false);
      setEditTodoId(null);
    } else {
      const newTodo = { id: Date.now(), name: inputValue, status: false };
      const newList = [...list, newTodo];
      setList(newList);
      save(newList);
    }
    setInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEdit = (todo: TodoList) => {
    setInputValue(todo.name);
    setIsEditing(true);
    setEditTodoId(todo.id);
  };

  const handleDelete = (todo: TodoList) => {
    setTodoToDelete(todo);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (todoToDelete) {
      const newList = list.filter(todo => todo.id !== todoToDelete.id);
      setList(newList);
      save(newList);
      setShowDeleteModal(false);
      setTodoToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setTodoToDelete(null);
  };

  const handleStatusChange = (id: number) => {
    const updatedList = list.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setList(updatedList);
    save(updatedList);
  };

  useEffect(() => {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  return (
    <>
      {showAccess && <ModalAccess setAccess={setAccess} />}
      {showDeleteModal && <ModalDelete confirmDelete={confirmDelete} cancelDelete={cancelDelete} />}
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={createTodo}>
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        value={inputValue}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2">
                        Nhập tên công việc
                      </label>
                    </div>
                    <button type="submit" className="btn btn-info ms-2">
                      {isEditing ? 'Lưu' : 'Thêm'}
                    </button>
                  </form>
                  {/* Tabs navs */}
                  <ul className="nav nav-tabs mb-4 pb-2">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link">Đã hoàn thành</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link">Chưa hoàn thành</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active">
                      <ul>
                        {list.map(todo => (
                          <li key={todo.id} className={`todo-item ${todo.status ? 'completed' : ''}`}>
                            <div className='nameTodo'>
                              <input
                                type="checkbox"
                                checked={todo.status}
                                onChange={() => handleStatusChange(todo.id)}
                              />
                              <span>{todo.name}</span>
                            </div>
                            <div className='todoFun'>
                              <EditOutlined className='colorEdit' onClick={() => handleEdit(todo)} />
                              <DeleteOutlined className='colorDelete' onClick={() => handleDelete(todo)} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
