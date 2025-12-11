import { SlArrowLeft } from "react-icons/sl";
import { HiMiniUser } from "react-icons/hi2";
import { getAvatarUrl } from "../utils/imageUrl";


export default function EmployeeView({ emp, onBack }) {
    return (
        <div className="card view">
            <div className="title">
                <button className="back" onClick={onBack}><SlArrowLeft strokeWidth="3rem" /></button>
                <h2>View Employee Details</h2>
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

            <div className="view-grid">
                <div className="avatar">
                    <img src={getAvatarUrl(emp.avatar)} alt="Img" /></div>
                <div className="employee-details">
                    <div>
                        <div className="info-item">
                            <p className="label">Name</p>
                            <p className="value">{emp.name}</p>
                        </div>
                        <div className="info-item">
                            <p className="label">Department</p>
                            <p className="value">{emp.department}</p>
                        </div>

                        <div className="info-item">
                            <p className="label">Project</p>
                            <p className="value">{emp.project}</p>
                        </div>

                        <div className="info-item">
                            <p className="label">Status</p>
                            <p className="value">{emp.status}</p>
                        </div>
                    </div>

                    <div>
                        <div className="info-item">
                            <p className="label">Employee ID</p>
                            <p className="value">{emp.employee_id}</p>
                        </div>

                        <div className="info-item">
                            <div className="label">Designation</div>
                            <div className="value">{emp.designation}</div>
                        </div>

                        <div className="info-item">
                            <div className="label">Type</div>
                            <div className="value">{emp.type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
