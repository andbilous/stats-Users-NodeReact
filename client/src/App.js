import React,{useState} from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import UserListPage from "./pages/UserListPage/UserListPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";



function App() {
  const [currentUserId,setCurrentUserId] = useState(0);

  const handleSetCurrentUserId=id=>{
    setCurrentUserId(id);
  };

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path="/userlist" exact>
              <UserListPage setUserId={handleSetCurrentUserId}/>
            </Route>
            <Route path="/profile" exact>
              <ProfilePage currentUserId={currentUserId}/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
