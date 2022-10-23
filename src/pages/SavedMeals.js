import '../pages.css'
import NavBar from '../components/NavBar'


export default function SavedMeals (props) {
    return (
        <>
            <header>
                <h1 className='title'>Your Saved Meals</h1>
                <NavBar />
            </header>
            <div className='center'>
                <div className='grid-container'>
                    <div><img className='spaghetti' src='https://www.kitchensanctuary.com/wp-content/uploads/2016/02/One-pan-spaghetti-and-meatballs-square.jpg'></img></div>
                    <div><img className='porkchops' src='https://res.cloudinary.com/hksqkdlah/image/upload/32003_sfs-smothered-pork-chops-8.jpg'></img></div>
                    <div><img className='teriyaki' src='https://modernmealmakeover.com/wp-content/uploads/2020/10/IMG_6548-4.jpg'></img></div>
                    <div><img className='tacos' src='https://gypsyplate.com/wp-content/uploads/2022/07/birria-tacos_square.jpg'></img></div>
                    <div>Meal Image5</div>
                    <div>Meal Image6</div>
                    <div>Meal Image7</div>
                    <div>Meal Image8</div>
                </div>
            </div>
        </>
    )
};