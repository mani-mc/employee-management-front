import React, { useState } from 'react';
import { BiEditAlt } from "react-icons/bi"
import { FiEye, FiTrash2 } from "react-icons/fi"
import ConfirmModal from "./ConfirmModal";
import { getAvatarUrl } from "../utils/imageUrl";


export default function EmployeeList({ data, onEdit, onView, onDelete }) {
    const [toDelete, setToDelete] = useState(null);


    return (
        <>
            <div className="card list">
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th>Employee Name</th>
                            <th>Employee ID</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Project</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(emp => (
                            <tr key={emp.id}>
                                <td className="name">
                                    <img className="show-img" src={getAvatarUrl(emp.avatar)} alt="Img" />
                                    {emp.name}</td>
                                <td>{emp.employee_id}</td>
                                <td>{emp.department}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.project}</td>
                                <td>{emp.type}</td>
                                <td>{emp.status}</td>
                                <td className="action-con">
                                    <button className="action-icons" onClick={() => onView(emp)}><FiEye /></button>
                                    <button className="action-icons" onClick={() => onEdit(emp)}><BiEditAlt /></button>
                                    <button className="action-icons" onClick={() => setToDelete(emp)}>
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {data.length === 0 && (
                    <p colSpan={8} className="center">No records found</p>
                )}
            </div >
            {toDelete && (
                <ConfirmModal
                    text={`Are you sure you want to Delete`}
                    onCancel={() => setToDelete(null)}
                    onConfirm={async () => { await onDelete(toDelete.id); setToDelete(null); }}
                />
            )
            }
        </>
    );
}
