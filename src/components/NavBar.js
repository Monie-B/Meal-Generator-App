import { Link } from 'react-router-dom';

export default function NavBar (props) {
  return (
    <nav>
      <h3>{props?.user?.name}</h3>
      <Link to="./pages/Dashboard">Dashboard</Link>&nbsp;
      <Link to="./pages/AddMeal">Add Meal</Link>&nbsp;
      <Link to="./pages/GroceryList">Grocery List</Link>&nbsp;
      <Link to="./pages/SavedMeals">Saved Meals</Link>&nbsp;
    </nav>
  )
}