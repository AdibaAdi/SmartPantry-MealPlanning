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

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "leftover_name": "test",
        "user_name": username
      });
      
      const requestOptions = {
        method: "post",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      fetch("http://localhost:8000/api/leftovers", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      setLeftoverName(''); // Reset the input field for leftover name
    } catch (error) {
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

  // Delete a meal, but only if its status is 'Y' (Completed)
  const deleteMeal = (indexToDelete) => {
    const mealToDelete = submittedMeals[indexToDelete];
    if (mealToDelete.status !== 'Y') {
      window.alert("You can only delete meals that are marked as 'Completed'.");
      return;
    }
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
        <h1 style={{ fontSize: '36px', marginLeft: '50px' }}>Add a Meal</h1>
        <form onSubmit={handleSubmit}>
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

        {/* List of submitted meals */}
        <ul>
          {submittedMeals.map((meal, index) => (
            <li key={index}>
              <div className="AddMealContainer">
                <div className="meal-item">
                  {/* Meal item content */}
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

      {/* food storing tips button */}
      <button className="tipsToStoreFoodBtn" onClick={navigateToFoodStorageTips}>
        Tips to Store Food
      </button>
      
    </div>
  );
};

export default Leftovers;
