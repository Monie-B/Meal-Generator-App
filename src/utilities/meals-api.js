import React from 'react';
// import { useState } from 'react';
import axios from 'axios';

export default function meals() {

    const randomMeal = () => {
        axios.get('www.themealdb.com/api/json/v1/1/random.php').then(res => {
            console.log(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
        <button onClick={randomMeal}>Get Random Meal</button>
    </div>
  )
}