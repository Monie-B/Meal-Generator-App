import '../pages.css';
import NavBar from '../components/NavBar';
import ToDo from '../components/ToDo';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';


export default function GroceryList (props) {
    return (
        <>
            <header>
                <h1 className='title'>Your Grocery List</h1>
                <NavBar />
            </header>
            <div className=''>
                <ToDoForm />
                <ToDo />
                <ToDoList />
            </div>
        </>
    )
};

