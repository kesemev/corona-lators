import {useState} from 'react';
import Main from "./components/main/Main"
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import LoginPage from './components/loginpage/LoginPage';
import AddInsulator from './components/addinsulator/AddInsulator';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="container-fluid">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          {/* <LoginPage /> */}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/main" component={Main} />
          <Route path="/addInsulator" component={AddInsulator} />
        </Switch>
        {/* <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
      </div>
    </Router>
  );
};

export default App;