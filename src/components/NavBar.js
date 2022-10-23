import { Link } from 'react-router-dom';
import '../App.css'

export default function NavBar (props) {
  return (
    <nav>
      <h3>{props?.user?.name}</h3>
      <Link to="/home">Dashboard</Link>&nbsp;
      <Link to="/addmeal">Add Meal</Link>&nbsp;
      <Link to="/grocerylist">Grocery List</Link>&nbsp;
      <Link to="/savedmeals">Saved Meals</Link>&nbsp;
      <button  className='navButton' onClick={() => {
        localStorage.removeItem('token');
        props.setUser(null);
      }}>Log Out!</button>
    </nav>
  )
}