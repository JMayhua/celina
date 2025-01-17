document.getElementById('showMore').addEventListener('click', function() {
    const moreMessage = document.getElementById('moreMessage');
    if (moreMessage.style.display === 'none') {
        moreMessage.style.display = 'block';
        this.textContent = 'Mostrar Menos';
    } else {
        moreMessage.style.display = 'none';
        this.textContent = 'Mostrar Más (pulsa aquí)';
    }
});
