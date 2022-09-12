import Card from '../UI/Card'; //card component
import MealItems from './MealItems/MealItems'; //meal items component
import './AvailableMeals.css'; //available meals component css
import React, { useEffect, useState } from 'react';  

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]); //meals state

  const [isLoading, setIsLoading] = useState(true); //is loading state

  const [hasError, setHasError] = useState(); //has error state

  useEffect(() => {
    const fetchMeals = async () => {

      const response = await fetch(
        'https://food-app-e4ded-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      ); //fetch meals

      const responseData = await response.json(); //get response data

      if (!response.ok) {
        throw new Error('Something went Wrong!!'); //throw error if response is not ok
      } 

      const loadMeals = []; //load meals array

      for (const key in responseData) {
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          imageUrl: responseData[key].imageUrl
        }); //push meals to load meals array
      }; //for loop

      setMeals(loadMeals); //set meals to load meals array 
      setIsLoading(false); //set is loading to false 
    }

    fetchMeals().catch(error => {
      setIsLoading(false); //set is loading to false
      setHasError(error.message); //set has error to error message
    }); //fetch meals

  }, []); //use effect

  if (isLoading) {
    return (
      <section>
        <h4 className='mealsLoading'>Loading...</h4>
      </section>
    ); //if is loading return loading message and loading spinner
  }; 

  if (hasError) {
    return (
      <section>
        <h4 className='mealsError'>{Error.message}</h4>
      </section>
    ); //if has error return error message
  };

  const mealsList = meals.map((meal) => (
    <MealItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      imageUrl={meal.imageUrl}
      price={meal.price}
    />
  ));

  return (
    <section className='meals'>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;