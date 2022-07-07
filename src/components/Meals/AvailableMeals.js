import Card from '../UI/Card';
import MealItems from './MealItems/MealItems';
import './AvailableMeals.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pasta',
    description: 'Pasta is a type of food typically made from a dough of durum wheat flour, sometimes known as "foccacia", and formed by a process called maceration. Pasta is usually made in an open-face, hollowed-out bowl, and is then cooked by boiling water or steaming in a saucepan.',
    price: 8,
    imageUrl: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables, and condiments.',
    price: 10,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
    price: 5,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
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