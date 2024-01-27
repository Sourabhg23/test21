const form = document.querySelector('form')
let bmi ;
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === ''  || height<0  || isNaN(height)){
         results.innerHTML = `Please give me a valid height ${height}`;
    }
    if(weight === ''  || weight<0 || isNaN(weight)){
         results.innerHTML = `Please give me a valid weight ${weight}`;
    } else {
       bmi =  (weight / ((height*height/10000)).toFixed(2))
      results.innerHTML = `<span>${bmi}</span>`;
console.log(bmi)
    }
    const results2 = document.querySelector('#results2')
   if (bmi < 18.5){
        results2.innerHTML = "You are underweight"
   }
   if (bmi > 18.6 && bmi < 24.9){
    results2.innerHTML = "Your weight is normal"
   }
     else{
        results2.innerHTML = "Your are Over-weight"
     }

})

   