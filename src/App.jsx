import React, { useState, useEffect } from 'react';
import "./App.css";
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeView from './components/EmployeeView';
import API from './api';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { FiSearch, FiPlusCircle } from "react-icons/fi";
import ConfirmModal from "./components/ConfirmModal";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [mode, setMode] = useState('list'); // list | add | edit | view
  const [current, setCurrent] = useState(null);

  // delete modal state
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchEmployees = async () => {
    const res = await API.get('/');
    setEmployees(res.data);
  };

  useEffect(() => { fetchEmployees(); }, []);

  const onAdd = () => { setCurrent(null); setMode('add'); };
  const onEdit = (emp) => { setCurrent(emp); setMode('edit'); };
  const onView = (emp) => { setCurrent(emp); setMode('view'); };

  // called when trash icon is clicked in the list
  const handleRequestDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    await API.delete(`/${deleteId}`);
    await fetchEmployees();
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const onSave = async (formData, isEdit = false, id = null) => {
    const headers = { 'Content-Type': 'multipart/form-data' };

    if (isEdit) {
      await API.put(`/${id}`, formData, { headers });
    } else {
      await API.post('/', formData, { headers });
    }

    await fetchEmployees();
    setMode('list');
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Dashboard />
        <main className="main">
          {mode === 'list' && (
            <>
              <div className="employee-header">
                <h2 className="employee-title">Employee</h2>
                <div className="employee-actions">
                  <input className="search-input" type="text" placeholder="Search" />
                  <FiSearch className="search-icon" />
                  <button className="add-employee" onClick={onAdd}>Add New Employee</button>
                  <FiPlusCircle className="add-icon" />
                </div>
              </div>
              <EmployeeList
                data={employees}
                onEdit={onEdit}
                onView={onView}
                // IMPORTANT: call our handler instead of deleting directly
                onDelete={handleRequestDelete}
              />
            </>
          )}

          {(mode === 'add' || mode === 'edit') && (
            <EmployeeForm
              employee={mode === 'edit' ? current : null}
              onCancel={() => setMode('list')}
              onBack={() => setMode('list')}
              onSave={onSave}
            />
          )}

          {mode === 'view' && current && (
            <EmployeeView emp={current} onBack={() => setMode('list')} />
          )}
        </main>

        {showDeleteModal && (
          <ConfirmModal
            text="Are you sure you want to Delete?"
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </>
  );
}
