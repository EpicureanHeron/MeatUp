import './dropdown.css';
import React, { Component } from 'react';
import {dropdown} from "./dropdown.css";
import { Link} from "react-router-dom";


const recipes = [
    'beef',
    'chicken',
    'turkey',
    'lamb',
    'pork',
    'fish',
    'other'
]

const RecipeLink = props => <li><a href={"/" + props.recipe}>{props.recipe[0].toUpperCase() + props.recipe.slice(1)}</a></li>
class RecipeSearch extends Component {
    render() {
        return <nav>
            <ul>
                <li><a href="#">Recipe Search</a>
                    <ul>

                        {recipes.map(recipe => {
                           let linkToRecipeSearch ="/search/" + recipe;
                            return (<Link key={recipe} to={linkToRecipeSearch}> {recipe} </Link>)

                        })}
                    </ul>
                </li>
            </ul>
        </nav>
    }
}

export default RecipeSearch;