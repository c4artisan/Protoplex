document.addEventListener('keydown', function(event) {
    if (event.key === 'e' || event.key === 'E') {
        const osd = document.getElementById('osd');
        if (osd.classList.contains('hidden')) {
            osd.classList.remove('hidden');
            osd.style.display = 'block';
            setTimeout(() => {
                osd.classList.add('hidden');
                osd.style.display = 'none';
            }, 2000); // Display for 2 seconds
        }
    }
});
