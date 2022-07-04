import React from "react";
import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealItems from "./MealItems/MealItems";

const Dummy_meals = [
  {
    id: 1,
    name: "Pizza",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 2,
    name: "Pasta",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Pasta is a dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 3,
    name: "Burger",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    description:
      "Burger is a dish of American origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
];

const AvailableMeals = () => {
  const mealmap = Dummy_meals.map((meal) => <MealItems key={meal.id} id={meal.id} meal={meal}/>);
  return (
    <section className="meals">
      <Card>
        <ul>{mealmap};</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
