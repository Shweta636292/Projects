const button = document.getElementById("button");

button.addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmiResult = document.getElementById("bmi-result");
  const conditionText = document.getElementById("weight-condition");

  // validation
  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    bmiResult.value = "";
    conditionText.textContent = "Please enter valid values";
    return;
  }

  // height cm → meters
  const heightInMeters = height / 100;

  // BMI formula
  const bmi = weight / (heightInMeters * heightInMeters);

  bmiResult.value = bmi.toFixed(2);

  // BMI condition
  if (bmi < 18.5) {
    conditionText.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    conditionText.textContent = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    conditionText.textContent = "Overweight";
  } else {
    conditionText.textContent = "Obese";
  }
});