const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `${height} not a valid number. Please input a valid number.`
    } else if (weight === '' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `${weight} not a valid number. Please input a valid number.`
    } else {
        const bmi = (weight/((height*height)/1000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }


})