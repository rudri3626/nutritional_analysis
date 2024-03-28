// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Simple validation (you may want to implement more robust validation)
    if (username === 'user' && password === 'password') {
      // Successful login, redirect to home.html
      window.location.href = 'home.html';
    } else {
      // Invalid login, display error message (you may want to improve this)
      alert('Invalid username or password. Please try again.');
    }
  });

document.getElementById("intakeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add code here to handle the submission of all meals collectively if needed
});

function getMealItems(meal) {
    const items = [];
    let i = 1;
    while (document.getElementById(`${meal}Food${i}`)) {
        const foodItem = document.getElementById(`${meal}Food${i}`).value.trim();
        if (foodItem !== "") {
            items.push(foodItem);
        }
        i++;
    }
    return items;
}

function addFoodItem(meal) {
    const mealSection = document.getElementById(`${meal}Section`);
    const itemNumber = mealSection.getElementsByClassName("form-group").length + 1;

    const newItemGroup = document.createElement("div");
    newItemGroup.classList.add("form-group");

    const newItemLabel = document.createElement("label");
    newItemLabel.setAttribute("for", `${meal}Food${itemNumber}`);
    newItemLabel.textContent = "Food Item";

    const newItemInput = document.createElement("input");
    newItemInput.setAttribute("type", "text");
    newItemInput.classList.add("form-control");
    newItemInput.setAttribute("id", `${meal}Food${itemNumber}`);
    newItemInput.setAttribute("name", `${meal}Food${itemNumber}`);
    newItemInput.required = true;

    newItemGroup.appendChild(newItemLabel);
    newItemGroup.appendChild(newItemInput);

    mealSection.insertBefore(newItemGroup, mealSection.querySelector(`button[data-meal="${meal}"]`));
}

function submitMeal(meal) {
    const mealItems = getMealItems(meal);
    // Example: You can add code here to submit the meal items to the server or perform any other action
    console.log(`${meal} Items:`, mealItems);
}
