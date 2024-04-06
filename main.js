// JavaScript for tracking calories

let totalCalories = 0;

function addFoodItem(meal) {
    const inputId = `${meal}Food${document.querySelectorAll(`#${meal}Section input`).length + 1}`;
    const input = `<div class="form-group">
                        <label for="${inputId}">Food Item</label>
                        <input type="text" class="form-control" id="${inputId}" name="${inputId}" placeholder="Enter food item" required>
                    </div>`;
    document.getElementById(`${meal}Section`).insertAdjacentHTML('beforeend', input);
}

function submitMeal(meal) {
    const inputs = document.querySelectorAll(`#${meal}Section input`);
    let calories = 0;
    inputs.forEach(input => {
        // Assuming random calorie generation
        calories += generateRandomCalories();
    });
    totalCalories += calories;
    document.getElementById('totalCalories').textContent = `You consumed : ${totalCalories} calories today! `;
}

function generateRandomCalories() {
    // Generate a random number between 50 and 500 for calorie count
    return Math.floor(Math.random() * (500 - 50 + 1)) + 50;
}

