import React, { useState, useEffect } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { HiMiniUser } from "react-icons/hi2";
import { BsCamera } from "react-icons/bs"
import { getAvatarUrl } from "../utils/imageUrl";


export default function EmployeeForm({ employee, onCancel, onSave, onBack }) {
    const [form, setForm] = useState({
        name: '', employee_id: '', department: '', designation: '', project: '', type: '', status: '', avatarFile: null
    });
    const [preview, setPreview] = useState(null);


    useEffect(() => {
        if (employee) {
            setForm({ ...employee, avatarFile: null });
            setPreview(employee.avatar ? getAvatarUrl(employee.avatar) : null);
        } else {
            setPreview(null);
        }
    }, [employee]);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleFile = e => {
        const file = e.target.files[0];
        if (!file) return;

        setForm(prev => ({ ...prev, avatarFile: file }));
        setPreview(URL.createObjectURL(file));
    };

    const submit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', form.name);
        fd.append('employee_id', form.employee_id);
        fd.append('department', form.department);
        fd.append('designation', form.designation);
        fd.append('project', form.project);
        fd.append('type', form.type);
        fd.append('status', form.status);
        if (form.avatarFile) fd.append('avatar', form.avatarFile);

        await onSave(fd, !!employee, employee ? employee.id : null);
    };

    return (
        <div className="card form">
            <div className="title">
                <button className="back" onClick={onBack}><SlArrowLeft strokeWidth="3rem" /></button>
                <h2>{employee ? 'Edit Employee' : 'Add New Employee'}</h2>
            </div>

            <div className="subtitle">
                <div className="subtitle-header">
                    <HiMiniUser className="subtitle-icon" />
                    <p>Personal Information</p>
                </div>
                <div className="bottom-border">
                    <div className="blue-line"></div>
                    <div className="gray-line"></div>
                </div>
            </div>

            <form onSubmit={submit}>
                <div className="employee-form">
                    <div className='avatar-field'>
                        <label className='avatar-upload'>
                            < input className='image' type="file" accept="image/*" onChange={handleFile}
                            />
                            {preview ? (
                                <img src={preview} className="avatar-preview" />
                            ) : employee?.avatar ? (
                                <img src={getAvatarUrl(employee.avatar)} className="avatar-preview" />
                            ) : (
                                <BsCamera className="camera-icon" />
                            )}

                        </label>
                    </div>
                    <div className='form-inputs'>
                        <div className="input-fields">
                            <p>Name*</p>
                            <input name="name" value={form.name} onChange={handleChange} required
                                placeholder='Enter Name' />
                        </div>
                        <div className="input-fields">
                            <p>Employee ID *</p>
                            <input name="employee_id" value={form.employee_id} onChange={handleChange} required
                                placeholder="Enter employee ID" />
                        </div>
                    </div>


                    <div className='form-inputs'>
                        <div className="input-fields">
                            <p>Department*</p>
                            <select name="department" value={form.department}
                                className="field-control" onChange={handleChange} required>
                                <option value="">Select Department</option>
                                <option>Development</option>
                                <option>Design</option>
                                <option>Testing</option>
                                <option>HR</option>
                            </select>
                        </div>
                        <div className="input-fields">
                            <p>Designation*</p>
                            <select name="designation" value={form.designation}
                                className="field-control"
                                onChange={handleChange} required>
                                <option value="">Select designation</option>
                                <option>Developer Lead</option>
                                <option>Senior Developer</option>
                                <option >Junior Developer</option>
                                <option >Design Lead</option>
                                <option>Senior Design</option>
                            </select>
                        </div>
                    </div>

                    <div className='form-inputs'>
                        <div className="input-fields">
                            <p>Project</p>
                            <input name="project" value={form.project} onChange={handleChange}
                                placeholder='Enter Project' />
                        </div>
                        <div className="input-fields">
                            <p>Type*</p>
                            <select name="type" value={form.type}
                                className="field-control"
                                onChange={handleChange} required>
                                <option value="">Select Type</option>
                                <option>Office</option>
                                <option>Hybrid</option>
                                <option>Remote</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-inputs">
                        <div className="input-fields">
                            <p>Status*</p>
                            <select name="status" value={form.status}
                                className="field-control"
                                onChange={handleChange} required>
                                <option value="">Select Status</option>
                                <option>Permanent</option>
                                <option>Contract</option>
                            </select>
                        </div>
                    </div>

                </div>


                <div className="action-btns">
                    <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="confirm-btn">Confirm</button>
                </div>


            </form >
        </div >
    );
}
