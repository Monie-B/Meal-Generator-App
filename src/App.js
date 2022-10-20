import './App.css';
import { useState } from 'react';
import { getUser } from './utilities/users-service';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import NavBar from './components/NavBar';
import SavedMeals from './pages/SavedMeals';
import AddMeal from './pages/AddMeal';
import GroceryList from './pages/GroceryList';
import Dashboard from './pages/Dashboard';


function App() {

  const [user, setUser] = useState('getUser()');

  return (
    <div className="App">
      {
        user ?
          <>
            <NavBar user={user} />
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/addmeal" element={<AddMeal />} />
              <Route path="/grocerylist" element={<GroceryList />} />
              <Route path="/savedmeals" element={<SavedMeals />} />
            </Routes>
          </>
          :
          <Auth setUser={setUser} />
      }
    </div>
  );
}

export default App;