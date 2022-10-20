import '../pages.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
// import { meals } from '../utilities/meals-api';


const url = 'www.themealdb.com/api/json/v1/1/random.php'

export default function Meal (props) {
    const [food, setFood] = useState([])

    const fetchFood = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.meals)
        setFood(data.meals)
    }

    useEffect(() => {
        fetchFood()
    })

    return (
        <>
            <section className='meals'>
                {food.map((f) => {
                    const {idMeal, strMeal, strInstructions, strMealThumb} = f

                    return (
                        <article key={idMeal}>
                            <div>
                                <h2>{strMeal}</h2>
                                <img src={strMealThumb} alt={strMeal} />
                            </div>
                            <div>
                                <p>{strInstructions}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}






// export default function Dashboard (props) {
//     return (
//          <main>
//             <h1 className='dashTitle'>Meal Generator App</h1>
//             <NavBar />
//             <meals />
//         </main>
//     )
// };