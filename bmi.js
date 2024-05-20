let weight = document.getElementById('weight');
let height = document.getElementById('height');
let result = document.getElementById('result');
let calculate = document.getElementById('calculate');
let peyc = document.getElementById('peyc');



calculate.onclick = function(){
    if(weight.value === "" || height.value === ""){
        alert('Please fill the weight and height')
    }
    else{
    let weightValue = Number(weight.value);
    let heightValue = Number(height.value);
    let r =(weightValue / (heightValue / 100) ** 2) ;
    result.textContent = r;
    if (r <= 18.5) {
        peyc.src = '/bmiPics/u.png';
    } else if (r <= 24.9) {
        peyc.src = '/bmiPics/n.png';
    } else if (r <= 29.9) {
        peyc.src = '/bmiPics/o.png';
    } else {
        peyc.src = '/bmiPics/ob.png';
    }
}
}
    

