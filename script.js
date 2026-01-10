document.querySelectorAll('.bit').forEach(bit => {
    // Flip bit from 'i' to '1' on hover
    bit.addEventListener('mouseover', () => {
        bit.textContent = '1';
        bit.classList.add('active');
    });

    bit.addEventListener('mouseout', () => {
        bit.textContent = 'i';
        bit.classList.remove('active');
    });

    // Toggle bit "permanently" on click
    bit.addEventListener('click', () => {
        bit.style.color = bit.style.color === 'red' ? '#00ff41' : 'red';
    });
});
