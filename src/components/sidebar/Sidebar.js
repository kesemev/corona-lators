import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen , closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img width="50" src={logo} alt="logo" />
                    <h1><pre>   CoronaLators</pre></h1>
                </div>
                <i 
                  className="fa fa-times" 
                  id="sidebarIcon"
                  onClick={() => closeSidebar()}
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className={`sidebar__link ${window.location.pathname === "/main" ?'active_menu_link' : ''}`}>
                    <i className="fa fa-home"></i>
                    <a href="/main">Dashboard</a>
                </div>
                <div className={`sidebar__link ${window.location.pathname === "/addInsulator" ?'active_menu_link' : ''}`}>
                    <i className="fa fa-users"></i>
                    <a href="/addInsulator">New Insulator</a>
                </div>
                <div className={`sidebar__link ${window.location.pathname === "/logout" ?'active_menu_link' : ''}`}>
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Log out</a>
                </div>
            </div> 
        </div>
    );
};

export default Sidebar;
