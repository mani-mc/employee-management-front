import "./Navbar.css"
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io"
import ProfilePic from "../assets/images/profile-pic.jpg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2>RS-TECH</h2>
            </div>

            <div className="navbar-right">
                <div className="navbar-icons"><IoSettingsOutline style={{
                    height: "20px", width: "20px"
                }} /></div>
                <div className="navbar-icons"> <IoIosNotificationsOutline style={{
                    height: "24px", width: "24px"
                }} /></div>
                <div className="navbar-avatar">
                    <img src={ProfilePic} alt="User" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar