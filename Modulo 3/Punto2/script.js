document.getElementById('miLista').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        console.log('Clic en: ' + event.target.textContent);
    }
});