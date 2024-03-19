import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './leftoversStyleSheet/leftovers.css';
import addSymbol from './leftoversStyleSheet/addSymbol.png';
import delSymbol from './leftoversStyleSheet/delSymbol.png';
import leftoverfood from './leftoversStyleSheet/leftoverfood.jpg';

const Leftovers = () => {
  const [leftoverName, setLeftoverName] = useState('');
  const inputRef = useRef(null); // Use useRef to reference the input element
  const [submittedMeals, setSubmittedMeals] = useState([]);
  const [completedMeals, setCompletedMeals] = useState([]);
  const navigate = useNavigate();

  // Corrected onChange handler
  const handleLeftoverNameChange = (e) => setLeftoverName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username'); // Retrieve username from localStorage
  
    const mealToAdd = {
      leftover_name: leftoverName,
      user_name: username,
    };
  
    try {
      const response = await fetch("http://localhost:8000/api/leftovers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mealToAdd),
      });
  
      if (!response.ok) {
        // If the response is not okay, throw an error with the response status text
        throw new Error(`Failed to add leftover: ${response.statusText}`);
      }
  
      // Wait for the response to be converted to JSON
      const newLeftover = await response.json();
  
      // Update the state with the new leftover
      setSubmittedMeals([...submittedMeals, newLeftover]);
  
      // Clear the input field
      setLeftoverName('');
    } catch (error) {
      // Log any errors to the console
      console.error('Error adding leftover:', error);
    }
  };
  

  // Function to calculate the number of days since the meal was cooked
  const amountOfDays = (date) => {
    const now = new Date();
    const mealDate = new Date(date);
    const differenceInTime = now.getTime() - mealDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };


  // Update the list of completed meals when submittedMeals changes
  useEffect(() => {
    const newCompletedMeals = submittedMeals
      .filter(meal => meal.completion_status === true)
      .map(meal => meal.name);
    setCompletedMeals(newCompletedMeals);
  }, [submittedMeals]);

  // Delete a meal, but only if its status is 'Y' (Completed)
  const deleteMeal = (indexToDelete) => {
    const mealToDelete = submittedMeals[indexToDelete];
      window.alert("Are you sure you want to delete?");
    setSubmittedMeals(currentMeals => currentMeals.filter((_, index) => index !== indexToDelete));
  };

  // Navigate to FoodStorageTips page
  const navigateToFoodStorageTips = () => {
    navigate('/food-storage-tips'); // Updated to use navigate
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
        <h1 style={{ fontSize: '36px', marginLeft: '5px' }}>Add a Meal</h1>
        <div className = "formContainer">
        <form id="formSubmit" onSubmit={handleSubmit}>
          <input
            ref={inputRef} // Attach ref to input element
            className="text-box"
            type="text"
            value={leftoverName}
            onChange={handleLeftoverNameChange} // Corrected onChange handler
            placeholder="Enter a meal"
          />
          <button type="submit" className="Submit-button">
            <img src={addSymbol} alt="Add" className="button-icon" />
          </button>
        </form>
        </div>
        {/* List of submitted meals */}
        <ul>
  {submittedMeals.map((meal, index) => (
    <li key={index}>
      <div className="AddMealContainer">
        <div className="meal-item">
          <div className="meal-name">{meal.leftover_name}
            {/* Delete button */}
            <button className="deleteButton" onClick={() => deleteMeal(index)}>
                      <img src={delSymbol} alt="Delete" className="button-icon" />
                    </button></div>
          <div className="meal-date-container">
            <span className="meal-date">
              Cooked on {new Date(meal.date_stored).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
            {/* Display how many days ago the meal was cooked */}
            <div className="meal-days-ago">{amountOfDays(meal.date_stored)} days ago</div>
        </div>
      </div>
    </li>
  ))}
</ul>

      </div>
      {/* food storing tips button */}
      <button className="tipsToStoreFoodBtn" onClick={navigateToFoodStorageTips}>
        Tips to Store Food
      </button>
      
    </div>
  );
};

export default Leftovers;