import './App.css';
import Main from './components/Main';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Main/>
      <Router>
        <div className={classes.header}>
          <Header/>
        </div>
        <div className={classes.container}>
          <div className={classes.main}>
            <div className={classes.router}>
              <Routes>
                <Route
                  path="/main"
                  element={<StartPage/>}
                  />
                <Route
                  path="/create_notification"                
                  element={<CreateNotification/>}                
                  />                          
                <Route
                  path="/notifications_list"                  
                  element={<NotificationList/>}                  
                  />              
              </Routes>              
            </div>
          </div>
        </div>
      </Router>          
    </div>
  );
}

export default App;
