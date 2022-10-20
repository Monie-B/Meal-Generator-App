import { Link } from 'react-router-dom';

export default function NavBar (props) {
  return (
    <nav>
      <h3>{props?.user?.name}</h3>
      <Link to="./pages/home">Dashboard</Link>&nbsp;
      <Link to="./pages/addmeal">Add Meal</Link>&nbsp;
      <Link to="./pages/grocerylist">Grocery List</Link>&nbsp;
      <Link to="./pages/savedmeals">Saved Meals</Link>&nbsp;
      <button onClick={() => {
        localStorage.removeItem('token');
        props.setUser(null);
      }}>Log Out!</button>
    </nav>
  )
}