import React, { useState } from 'react';
import './App.css';
import { IIngridients } from './types';
import meatImage from './assets/ingridients/meat.png';
import cheeseImage from './assets/ingridients/cheese.png';
import saladImage from './assets/ingridients/salad.png';
import baconImage from './assets/ingridients/bacon.png';
import { nanoid } from 'nanoid';

const App = () => {
  
  const IgridientsArray: IIngridients[] = [
    { id: nanoid(), name: 'Meat', price: 80, image: meatImage },
    { id: nanoid(), name: 'cheese', price: 50, image: cheeseImage },
    { id: nanoid(), name: 'salad', price: 10, image: saladImage },
    { id: nanoid(), name: 'bacon', price: 60, image: baconImage },
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'salad', count: 0},
    {name: 'bacon', count: 0},
  ]);

  const ingButtons = IgridientsArray.map((item) => (
    <button key={item.id}>{item.name}</button>
  ));


  return (
    <div className="container">
      <div className='rightBlock'>
        <div>{ingButtons}</div>
      </div>
      <div className='leftBlock'> 
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          <div className="Salad"></div>
          <div className="Cheese"></div>
          <div className="Meat"></div>
          <div className="BreadBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
