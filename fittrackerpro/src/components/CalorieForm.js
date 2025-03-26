// src/components/CalorieForm.js
import React, { useState } from 'react';

const CalorieForm = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const activityMultiplier = activityLevel === 'sedentary' ? 1.2 : activityLevel === 'light' ? 1.375 : activityLevel === 'moderate' ? 1.55 : 1.725;
    const dailyCalories = bmr * activityMultiplier;
    setCalories(dailyCalories.toFixed(2));
  };

  return (
    <div>
      <h2>Calculate Your Daily Calorie Needs</h2>
      <form onSubmit={calculateCalories}>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required>
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>
        </label>
        <label>
          Target Weight (kg):
          <input type="number" value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)} required />
        </label>
        <button type="submit">Calculate Calories</button>
      </form>
      {calories && <p>You need {calories} calories per day to maintain your weight.</p>}
    </div>
  );
};

export default CalorieForm;
