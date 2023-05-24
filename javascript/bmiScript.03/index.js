function bmi(kg, m) {
    var imc = kg/m;
    
     if (imc < 18.5) {
       const under = ('Your BMI is ' + imc + 'so you are underweight ');
       return under;
    }
    else if (imc > 18.5 && imc < 25) {
        const norm = ('Your BMI is ' + imc +  'so you have a normal weight');
        return norm;
    }
    else if (imc > 25){
        var over = 'Your BMI is ' + imc +  ', so you are overweight';
        return over;
    }
   return over;
}

var a = prompt('qual e seu peso');
var b = prompt('qual e sua altura ?');
bmi(a,b);

   



