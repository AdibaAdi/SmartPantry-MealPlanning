import React, { useState } from 'react';
import './leftoversStyleSheet/leftovers.css';
import addSymbol from './leftoversStyleSheet/addSymbol.png';


const Leftovers = () => {
  const [mealName, setMealName] = useState(''); // State for the meal name input
  const [submittedMeals, setSubmittedMeals] = useState([]); // ARRAY to save the meals

  // Setting the meal names
  const handleNameChange = (event) => {
    setMealName(event.target.value); 
  };

  // Amount of days after the meal was cooked
  const amountOfDays = (date) => {
    const now = new Date();
    const mealDate = new Date(date);
    const differenceInTime = now.getTime() - mealDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };
  const toggleMealStatus = (index) => {
    setSubmittedMeals(submittedMeals.map((meal, i) => {
      if (i === index) {
        return { ...meal, status: meal.status === 'N' ? 'Y' : 'N' };
      }
      return meal;
    }));
  };
  
  const handleSubmitClick = () => {
    if (!mealName) return; // Prevent adding empty meals
    // Create the newMeal OBJECT inside the handleSubmitClick function
    const newMeal = {
      name: mealName,
      date: new Date(), // Capture the current date when the meal is added
      status: 'N'   
    };
    setSubmittedMeals([...submittedMeals, newMeal]); // Add the new meal to the submitted meals array
    setMealName(''); // After submission, reset the text box area to empty
  };
  

  return (
    <div>
      <h1>Add a Meal</h1>
      <input className = "text-box" type="text" value={mealName} onChange={handleNameChange} placeholder="Enter a meal" />
      <button className="Submit-button" onClick={handleSubmitClick}>
  <img src={addSymbol} alt="Submit" style={{ width: '20px', height: '20px' }} />
</button>



      <ul>
  {submittedMeals.map((meal, index) => (
    <li key={index} className="AddMealContainer">
      <div className="meal-item">
        <div className="meal-name">{meal.name}</div>
        <div>
          <div className="meal-date-container">
            <span className="meal-date">Cooked on {meal.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="meal-time-span"> at {meal.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
        <div className="meal-days-ago">{amountOfDays(meal.date)} days ago</div>
        <button className="changeStatus" onClick={() => toggleMealStatus(index)}>
          {meal.status === 'N' ? 'Complete' : 'Completed'}
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Leftovers;