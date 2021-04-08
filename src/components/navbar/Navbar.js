import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a className={`${window.location.pathname === "/main" ? 'active_link' : ''}`} href="/main">Admin</a>
                <a className={`${window.location.pathname === "/addInsulator" ? 'active_link' : ''}`} href="/addInsulator">Add Insulator</a>
                <a href="/">Log Out</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;