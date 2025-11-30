function validateForm(event) {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    if (fname.length < 2 || lname.length < 2) {
        alert("Validation Failed: Both fields must be at least 2 characters long.");
        event.preventDefault();
    } else if (!fname || !lname) {
        alert("Validation Failed: Both fields must not be empty.");
        event.preventDefault();
    } else {
        alert("Form Submitted Successfully!");
        event.preventDefault();
    }
}