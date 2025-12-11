import "./Dashboard.css"
import { HiUsers } from "react-icons/hi2"
import { IoCalendar } from "react-icons/io5"
import { TbMessageFilled, TbLayoutDashboardFilled } from "react-icons/tb"

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-left">

                <div className="menu-items">
                    <TbLayoutDashboardFilled className="dashboard-icons" />
                    <p>Dashboard</p>
                </div>

                <div className="menu-items-active">
                    <HiUsers className="dashboard-icons" />
                    <p>Employee</p></div>
                <div className="menu-items">
                    <IoCalendar className="dashboard-icons" />
                    <p>Calender</p>
                </div>

                <div className="menu-items">
                    <TbMessageFilled className="dashboard-icons" />
                    <p>Messages</p>
                </div>

            </div>
        </div>
    )
}

export default Dashboard