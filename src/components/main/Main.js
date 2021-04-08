import "./Main.css";
import hello from "../../assets/hello.png";
import MyMap from '../mymap/MyMap';
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import Table from "../table/Table";
import "leaflet/dist/leaflet.css";

const Main = () => {
    return(
        <main>
            <div className="main__container">
                
                <div className="main__title">
                    <img src={hello} alt="hello"/>
                    <div className="main__greeting">
                        <h1>Hello Supervisor</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Positives without symptoms</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Positives with symptoms</p>
                            <span className="font-bold text-title">3896</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Negatives</p>
                            <span className="font-bold text-title">248</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lighblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of insulation breakers</p>
                            <span className="font-bold text-title">64</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Health Status</h1>
                                <p>Israel, Ashdod</p>
                            </div>
                            <i className="fa fa-thermometer-empty"></i>
                        </div>
                        <LineChart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Enforcement Status</h1>
                                <p>Israel, Ashdod</p>
                            </div>
                            <i className="fa fa-handshake-o"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Collaborators</h1>
                                <p>1538</p>
                            </div>

                            <div className="card2">
                                <h1>Incorrect locations</h1>
                                <p>25</p>
                            </div>

                            <div className="card3">
                                <h1>Incorrect Identifications</h1>
                                <p>14</p>
                            </div>

                            <div className="card4">
                                <h1>Uncooperatives</h1>
                                <p>264</p>
                            </div>
                        </div>
                    </div>

                    <div className="charts__left">
                        <PieChart />
                    </div>
                    
                </div>

                <MyMap />
                {/* <NewMap /> */}
                <Table />
            </div>
        </main>
    )
}

export default Main;

