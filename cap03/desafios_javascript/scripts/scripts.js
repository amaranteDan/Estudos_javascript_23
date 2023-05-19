//Variaveis e tipos de dados

//1 - Conversão de dados

const celsius = 30
const fahrenheit = 86

function celsiusToFahrenheit(celsius){
    return (celsius * 9) / 5 + 32
}

function fahrenheitToCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9
}


console.log(`${celsius} Graus Celsius equivalem a ${celsiusToFahrenheit(
    celsius)} graus Fahrenheit;`)


    console.log(`${fahrenheit} Graus Celsius equivalem a ${fahrenheitToCelsius(
        fahrenheit)} graus Fahrenheit;`)    