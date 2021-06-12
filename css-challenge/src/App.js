import './App.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import HearingIcon from '@material-ui/icons/Hearing';
import SearchIcon from '@material-ui/icons/Search';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Heading Row">
          <div className="Heading Column Left">
            <h2>Hi, Jared!</h2>
            <p>23 Jan, 2021</p>
          </div>
          <div className="Heading Column Right">
            <NotificationsIcon />
          </div>
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="Feelings Row">
          <div className="Column Left">
            <h3 style={{ paddingLeft: '18px' }}>How do you feel?</h3>
          </div>
          <div className="Column SeeMore Right">. .</div>
        </div>
        <div className="Emojis">
          <table className="FeelingTable" cellSpacing="18">
            <thead>
              <th>😔</th>
              <th>😊</th>
              <th>😁</th>
              <th>😃</th>
            </thead>
            <tbody>
              <td>Badly</td>
              <td>Fine</td>
              <td>Well</td>
              <td>Excellent</td>
            </tbody>
          </table>
        </div>
        <div className="Modal">
          <div className="MinimiseSymbol"></div>
          <div className="ModalTitle">
            <h3>Exercises</h3>
            <p>. .</p>
          </div>
          <button className="CardRow">
            <div className="CardColumn">
              <FavoriteIcon
                style={{ color: 'white', backgroundColor: 'orange' }}
              />
            </div>
            <div className="CardColumn">
              <h3>Speaking Skills</h3>
              <p>16 Exercises</p>
            </div>
            <div
              className="CardColumn"
              style={{
                fontSize: '30px',
                fontWeight: 'bolder',
                paddingTop: '14px',
              }}
            >
              . .
            </div>
          </button>
          <button className="CardRow">
            <div className="CardColumn">
              <RecordVoiceOverIcon
                style={{ color: 'white', backgroundColor: '#2c80be' }}
              />
            </div>
            <div className="CardColumn">
              <h3>Reading Speed</h3>
              <p>8 Exercises</p>
            </div>
            <div
              className="CardColumn"
              style={{
                fontSize: '30px',
                fontWeight: 'bolder',
                paddingTop: '14px',
              }}
            >
              . .
            </div>
          </button>
          <button className="CardRow">
            <div className="CardColumn">
              <HearingIcon
                style={{ color: 'white', backgroundColor: '#f95b7d' }}
              />
            </div>
            <div className="CardColumn">
              <h3>Sound Speed</h3>
              <p>8 Exercises</p>
            </div>
            <div
              className="CardColumn"
              style={{
                fontSize: '30px',
                fontWeight: 'bolder',
                paddingTop: '14px',
              }}
            >
              . .
            </div>
          </button>
        </div>
        <div className="NavBar">
          <div className="SelectedTab"></div>
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
