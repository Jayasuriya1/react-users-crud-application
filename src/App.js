import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Component/addUser';
import Home from './Component/home';
import EditUser from './Component/updateUser';

function App() {
  return (
    <div className="App">
      <Switch>
      
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/add-user">
          <AddUser/>
        </Route>

        <Route path="/edit-user/:id">
          <EditUser/>
        </Route>
        
      </Switch>
          
    </div>
  );
}

export default App;
