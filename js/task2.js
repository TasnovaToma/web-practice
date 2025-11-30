const userInput = document.getElementById('username');

userInput.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});