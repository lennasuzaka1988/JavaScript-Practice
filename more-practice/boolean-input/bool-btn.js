document.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('input', (event) => {
        let inputText = document.querySelector('#bool')
        let button = document.querySelector('button');
        if (inputText.value === 'true') {
            button.disabled = true;
        } else if (inputText.value === 'false') {
            button.disabled = false;
        }
    })
})





