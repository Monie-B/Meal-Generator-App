import './App.css';
import { useState } from 'react';
// import { getUser } from './utilities/users-service';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import SavedMeals from './pages/SavedMeals';
import AddMeal from './pages/AddMeal';
import GroceryList from './pages/GroceryList';
import Dashboard from './pages/Dashboard';


function App() {

  const [user, setUser] = useState('user');

  return (
    <div className="App">
      {
        user ?
          <>
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