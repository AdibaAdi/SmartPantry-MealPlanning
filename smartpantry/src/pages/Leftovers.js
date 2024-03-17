import React, { useState, useEffect } from 'react';
import './leftoversStyleSheet/leftovers.css';
import addSymbol from './leftoversStyleSheet/addSymbol.png';
import delSymbol from './leftoversStyleSheet/delSymbol.png'; // Import delete symbol
import leftoverfood from './leftoversStyleSheet/leftoverfood.jpg';

const Leftovers = () => {
  const [mealName, setMealName] = useState('');
  const [submittedMeals, setSubmittedMeals] = useState([]);
  const [completedMeals, setCompletedMeals] = useState([]);

  // Handle change in meal name input
  const handleNameChange = (event) => {
    setMealName(event.target.value);
  };

  // Function to calculate the number of days since the meal was cooked
  const amountOfDays = (date) => {
    const now = new Date();
    const mealDate = new Date(date);
    const differenceInTime = now.getTime() - mealDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  // Toggle the status of a meal between 'N' (Not completed) and 'Y' (Completed)
  const toggleMealStatus = (index) => {
    setSubmittedMeals(submittedMeals.map((meal, i) => {
      if (i === index) {
        return { ...meal, status: meal.status === 'N' ? 'Y' : 'N' };
      }
      return meal;
    }));
  };

  // Update the list of completed meals when submittedMeals changes
  useEffect(() => {
    const newCompletedMeals = submittedMeals
      .filter(meal => meal.status === 'Y')
      .map(meal => meal.name);
    setCompletedMeals(newCompletedMeals);
  }, [submittedMeals]);

  // Add a new meal when the submit button is clicked
  const handleSubmitClick = () => {
    if (!mealName) return;
    const newMeal = {
      name: mealName,
      date: new Date(),
      status: 'N' // Initial status is Not completed
    };
    setSubmittedMeals([...submittedMeals, newMeal]);
    setMealName(''); // Clear the input after submitting
  };

  // Delete a meal, but only if its status is 'Y' (Completed)
  const deleteMeal = (indexToDelete) => {
    const mealToDelete = submittedMeals[indexToDelete];
    if (mealToDelete.status !== 'Y') {
      window.alert("You can only delete meals that are marked as 'Completed'.");
      return;
    }
    setSubmittedMeals(currentMeals => currentMeals.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      {/* Banner with title and image */}
      <div className="banner">
        <h1 className="banner-title">Leftovers</h1>
        <img src={leftoverfood} alt="Banner" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Meal submission section */}
      <div className="bodyContainer">
        <h1 style={{ fontSize: '36px', marginLeft: '50px' }}>Add a Meal</h1>
        <div className="input-container">
          <input className="text-box" type="text" value={mealName} onChange={handleNameChange} placeholder="Enter a meal" />
          <button className="Submit-button" onClick={handleSubmitClick}>
            <img src={addSymbol} alt="Add" className="button-icon" />
          </button>
        </div>

        {/* List of submitted meals */}
        <ul>
          {submittedMeals.map((meal, index) => (
            <li key={index}>
              <div className="AddMealContainer">
                <div className="meal-item">
                  <div className="meal-name">
                    {meal.name}
                    {/* Delete button */}
                    <button className="deleteButton" onClick={() => deleteMeal(index)}>
                      <img src={delSymbol} alt="Delete" className="button-icon" />
                    </button>
                  </div>
                  {/* Meal date and time */}
                  <div className="meal-date-container">
                    <span className="meal-date">Cooked on {new Date(meal.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="meal-time-span"> at {new Date(meal.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  {/* Display how many days ago the meal was cooked */}
                  <div className="meal-days-ago">{amountOfDays(meal.date)} days ago</div>
                  {/* Button to toggle meal completion status */}
                  <button className="changeStatus" onClick={() => toggleMealStatus(index)}>
                    {meal.status === 'N' ? 'Complete' : 'Completed'}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Display recently completed meals */}
      <h3 style={{ fontSize: '36px', marginLeft: '50px' }}>Recent Completed</h3>
      <div className="Recent-Completed-Items">
        {completedMeals.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Leftovers;

