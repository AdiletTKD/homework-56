import React from "react";
import { IIngridients } from "../types";

interface IInterfaceProps {
    ingredient: IIngridients;
    onClick: () => void;
    onDelete: () => void;
}

const Ingredient: React.FC<IInterfaceProps> = ({ ingredient, onClick, onDelete }) => {
    return (
        <div className='ingredientComponent'>
            <button className='ingButtons' key={ingredient.id} onClick={onClick}>
                <img className='img' src={ingredient.image} />
                {ingredient.name}
            </button>

            <div className='counter'>
                <span className='count'>({"x" + ingredient.count})</span>
                <button className='deleteBtn' onClick={() => onDelete()} >X</button>
            </div>
         </div>
    )
};

export default Ingredient;
