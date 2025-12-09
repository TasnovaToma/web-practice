const ageInput = document.getElementById('ageInput');
const messageDisplay = document.getElementById('message');

ageInput.addEventListener('input', function() {
    const age = parseInt(this.value);
    
    // Reset classes
    messageDisplay.className = "";

    if (isNaN(age)) {
        messageDisplay.textContent = "";
        return;
    }

    // Logic based on requirements [cite: 17, 19, 26]
    if (age < 40) {
        messageDisplay.textContent = "To be a part of the community, you need to be at least 40";
    } else if (age >= 40 && age <= 50) {
        messageDisplay.textContent = "You are the youngsters of this community";
    } else if (age > 50) {
        messageDisplay.textContent = "Top members level of the group";
        messageDisplay.classList.add("red-text"); // Apply red text [cite: 27]
    }
});