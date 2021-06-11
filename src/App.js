import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserList from './components/UserList';
import Profile from './components/Profile';
import UserState from './context/users/UserState';


function App() {
  return (
    <UserState>
     <UserList />
      <Profile />
    </UserState> 
  );
}


export default App;
