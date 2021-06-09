import './App.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="TopContent">
          <h2>Hi Jared!</h2>
          <h3>23 Jan, 2021</h3>
          <div className="NotificationButton">
            <NotificationsIcon />
          </div>
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="HowDoYouFeel">
          <h3>How do you feel?</h3>
          <div className="Emojis">
            <div>
              <p>😔</p>
              <p>Badly</p>
            </div>
            <div>
              <p>😊</p>
              <p>Fine</p>
            </div>
            <div>
              <p>😁</p>
              <p>Well</p>
            </div>
            <div>
              <p>😃</p>
              <p>Excellent</p>
            </div>
          </div>
        </div>
        <div className="Modal">
          <h3>Exercises</h3>
          <div>
            <h3>Speaking Skills</h3>
            <p>16 exercises</p>
          </div>
          <div>
            <h3>Reading Speed</h3>
            <p>8 exercises</p>
          </div>
          {/* <div>
            <h3>Hearing Exercises</h3>
            <p>9 exercises</p>
          </div> */}
        </div>
        <div className="NavBar">
          <ul>
            <li>
              <HomeIcon />
            </li>
            <li>
              <DashboardIcon />
            </li>
            <li>
              <MailIcon />
            </li>
            <li>
              <PersonIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
