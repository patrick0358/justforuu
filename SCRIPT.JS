document.querySelectorAll('.candle').forEach(candle => {
    candle.addEventListener('click', () => {
        const flame = candle.querySelector('.flame');
        const smoke = candle.querySelector('.smoke');
        
        flame.style.display = 'none';
        smoke.style.opacity = '1';
    });
});
