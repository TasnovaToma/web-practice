const btn = document.getElementById('colorBtn');
// Helper function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', function() {
    // Apply random color to body [cite: 41]
    document.body.style.backgroundColor = getRandomColor();
});