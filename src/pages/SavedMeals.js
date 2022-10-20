import NavBar from '../components/NavBar'
import '../pages.css'


export default function SavedMeals (props) {
    return (
        <>
            <header>
                <h1>Your Saved Meals</h1>
                <NavBar />
            </header>
            <div className='container'>
                <h3>Meal Image</h3>
            </div>
        </>
    )
};