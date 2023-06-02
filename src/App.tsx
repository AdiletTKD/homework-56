import React, { useState } from 'react';
import './App.css';
import { IIngridients } from './types';
import meatImage from './assets/ingridients/meat.png';
import cheeseImage from './assets/ingridients/cheese.png';
import saladImage from './assets/ingridients/salad.png';
import baconImage from './assets/ingridients/bacon.png';
import { nanoid } from 'nanoid';
import { count } from 'console';

const App = () => {
  
  const IngridientsArray: IIngridients[] = [
    { id: nanoid(), name: 'Meat', price: 80, image: meatImage },
    { id: nanoid(), name: 'Cheese', price: 50, image: cheeseImage },
    { id: nanoid(), name: 'Salad', price: 10, image: saladImage },
    { id: nanoid(), name: 'Bacon', price: 60, image: baconImage },
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const handleIngredientClick = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].count++;
    setIngredients(updatedIngredients);
  };

  const ingredientComponents = IngridientsArray.map((item, index) => (
    <div className='ingredientComponent'>
      <button className='ingButtons' key={item.id} onClick={() => handleIngredientClick(index)}>
        <img className='img' src={item.image} />
        {item.name}
      </button>

      <div className='counter'>
        <span className='count'>({"x" + ingredients[index].count})</span>
        <button className='deleteBtn' onClick={() => onDelete()} >X</button>
      </div>
    </div>
  ));

  const onDelete = () => {
    setIngredients(prevState => prevState.filter(count => (count.count-1) + 4))
  };

   const addBurgerIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
      for (let j = 0; j < ingredients[i].count; j++) {
        addBurgerIngredients.push(
          <div key={`${ingredients[i].name}-${j}`} className={ingredients[i].name}></div>
        );
      }
    }


  return (
    <div className='App'>
      <div className="container">
          <div className='leftBlock'>
            <div>
            {ingredientComponents}

            </div>
          </div>
        <div className='rightBlock'> 
            
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {addBurgerIngredients}
            <div className="BreadBottom"></div>
          </div>
          <strong>Price: 30</strong>
        </div>  
      </div>
    </div>
  );
};

export default App;
