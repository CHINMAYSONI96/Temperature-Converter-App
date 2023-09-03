var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var select1 = document.querySelectorAll('select')[0];
var select2 = document.querySelectorAll('select')[1];

input1.onkeyup = function()
{
    let select1_Value = select1.value;
    let select2_Value = select2.value;

    // From Celcius to other unit
    let CelciusToFahrenheit = select1_Value === 'degC' && select2_Value ==='degF';
    let CelciusToKelvin = select1_Value === 'degC' && select2_Value ==='degK';

    // From Fahrenheit to other unit
    let FahrenheitToCelcius = select1_Value === 'degF' && select2_Value ==='degC';
    let FahrenheitToKelvin = select1_Value === 'degF' && select2_Value ==='degK';

    // From Kelvin to other unit
    let KelvinToCelcius = select1_Value === 'degK' && select2_Value ==='degC';
    let KelvinToFahrenheit = select1_Value === 'degK' && select2_Value ==='degF';

    //From same unit to same unit
    let same_unit = select1_Value === select2_Value;


    if(CelciusToFahrenheit)
    {
        let ans = (input1.value*9/5)+32
        input2.value = ans.toFixed(2);
    }
    else if(CelciusToKelvin)
    {
       let ans = (input1.value*1)+273.15;
       input2.value = ans.toFixed(2);
    }
    else if(FahrenheitToCelcius)
    {
        let ans = (5/9)*(input1.value-32)
        input2.value = ans.toFixed(2);
    }
    else if(FahrenheitToKelvin)
    {
        let ans = 5/9*(input1.value-32)+273.15
        input2.value = ans.toFixed(2);
    }
    else if(KelvinToCelcius)
    {
        let ans = (input1.value*1)-273.15;
        input2.value = ans.toFixed(2);
    }
    else if(KelvinToFahrenheit)
    {
        let ans = 9/5*(input1.value-273.15)+32
        input2.value = ans.toFixed(2);
    }
    else if(same_unit)
    {
       input2.value = input1.value;
    }
}

// Next input starts

input2.onkeyup = function()
{
    let select1_Value = select1.value;
    let select2_Value = select2.value;

    // From Celcius to other unit
    let CelciusToFahrenheit = select2_Value === 'degC' && select1_Value ==='degF';
    let CelciusToKelvin = select2_Value === 'degC' && select1_Value ==='degK';

    // From Fahrenheit to other unit
    let FahrenheitToCelcius = select2_Value === 'degF' && select1_Value ==='degC';
    let FahrenheitToKelvin = select2_Value === 'degF' && select1_Value ==='degK';

    // From Kelvin to other unit
    let KelvinToCelcius = select2_Value === 'degK' && select1_Value ==='degC';
    let KelvinToFahrenheit = select2_Value === 'degK' && select1_Value ==='degF';

    //From same unit to same unit
    let same_unit = select1_Value === select2_Value;


    if(CelciusToFahrenheit)
    {
        let ans = (input2.value*9/5)+32
        input1.value = ans.toFixed(2);
    }
    else if(CelciusToKelvin)
    {
       let ans = (input2.value*1)+273.15;
       input1.value = ans.toFixed(2);
    }
    else if(FahrenheitToCelcius)
    {
        let ans = (5/9)*(input2.value-32)
        input1.value = ans.toFixed(2);
    }
    else if(FahrenheitToKelvin)
    {
        let ans = 5/9*(input2.value-32)+273.15
        input1.value = ans.toFixed(2);
    }
    else if(KelvinToCelcius)
    {
        let ans = (input2.value*1)-273.15;
        input1.value = ans.toFixed(2);
    }
    else if(KelvinToFahrenheit)
    {
        let ans = 9/5*(input2.value-273.15)+32
        input1.value = ans.toFixed(2);
    }
    else if(same_unit)
    {
       input2.value = input1.value;
    }
}

/* Onchange */

select1.onchange = function()
{
    let select1_Value = select1.value;
    let select2_Value = select2.value;

    // From Celcius to other unit
    let CelciusToFahrenheit = select1_Value === 'degC' && select2_Value ==='degF';
    let CelciusToKelvin = select1_Value === 'degC' && select2_Value ==='degK';

    // From Fahrenheit to other unit
    let FahrenheitToCelcius = select1_Value === 'degF' && select2_Value ==='degC';
    let FahrenheitToKelvin = select1_Value === 'degF' && select2_Value ==='degK';

    // From Kelvin to other unit
    let KelvinToCelcius = select1_Value === 'degK' && select2_Value ==='degC';
    let KelvinToFahrenheit = select1_Value === 'degK' && select2_Value ==='degF';

    //From same unit to same unit
    let same_unit = select1_Value === select2_Value;


    if(CelciusToFahrenheit)
    {
        let ans = (input1.value*9/5)+32
        input2.value = ans.toFixed(2);
    }
    else if(CelciusToKelvin)
    {
       let ans = (input1.value*1)+273.15;
       input2.value = ans.toFixed(2);
    }
    else if(FahrenheitToCelcius)
    {
        let ans = (5/9)*(input1.value-32)
        input2.value = ans.toFixed(2);
    }
    else if(FahrenheitToKelvin)
    {
        let ans = 5/9*(input1.value-32)+273.15
        input2.value = ans.toFixed(2);
    }
    else if(KelvinToCelcius)
    {
        let ans = (input1.value*1)-273.15;
        input2.value = ans.toFixed(2);
    }
    else if(KelvinToFahrenheit)
    {
        let ans = 9/5*(input1.value-273.15)+32
        input2.value = ans.toFixed(2);
    }
    else if(same_unit)
    {
       input2.value = input1.value;
    }
}

/* onChange2 */

select2.onchange = function()
{
    let select1_Value = select1.value;
    let select2_Value = select2.value;

    // From Celcius to other unit
    let CelciusToFahrenheit = select1_Value === 'degC' && select2_Value ==='degF';
    let CelciusToKelvin = select1_Value === 'degC' && select2_Value ==='degK';

    // From Fahrenheit to other unit
    let FahrenheitToCelcius = select1_Value === 'degF' && select2_Value ==='degC';
    let FahrenheitToKelvin = select1_Value === 'degF' && select2_Value ==='degK';

    // From Kelvin to other unit
    let KelvinToCelcius = select1_Value === 'degK' && select2_Value ==='degC';
    let KelvinToFahrenheit = select1_Value === 'degK' && select2_Value ==='degF';

    //From same unit to same unit
    let same_unit = select1_Value === select2_Value;


    if(CelciusToFahrenheit)
    {
        let ans = (input1.value*9/5)+32
        input2.value = ans.toFixed(2);
    }
    else if(CelciusToKelvin)
    {
       let ans = (input1.value*1)+273.15;
       input2.value = ans.toFixed(2);
    }
    else if(FahrenheitToCelcius)
    {
        let ans = (5/9)*(input1.value-32)
        input2.value = ans.toFixed(2);
    }
    else if(FahrenheitToKelvin)
    {
        let ans = 5/9*(input1.value-32)+273.15
        input2.value = ans.toFixed(2);
    }
    else if(KelvinToCelcius)
    {
        let ans = (input1.value*1)-273.15;
        input2.value = ans.toFixed(2);
    }
    else if(KelvinToFahrenheit)
    {
        let ans = 9/5*(input1.value-273.15)+32
        input2.value = ans.toFixed(2);
    }
    else if(same_unit)
    {
       input2.value = input1.value;
    }
}