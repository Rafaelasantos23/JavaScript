const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const CurrencyValueToconverted = document.querySelector(".currency-value") // outras moedas 


    const dolarToday = 4.93
    const euroToday = 5.37
    const ienesToday = 0.33
    const pesotoday = 0.60

    if (currencySelect.value == "dolar") { //se select estiver selecionado o valor de dolar entre aqui
        CurrencyValueToconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {//se select estiver selecionado o valor de euro entre aqui
        CurrencyValueToconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

if (currencySelect.value == "ienes"){ 
   CurrencyValueToconverted.innerHTML = new Intl.NumberFormat("ja-JP",{
    style: "currency",
    currency: "JPY"
   }).format(inputCurrencyValue / ienesToday)
    }

    if (currencySelect.value == "peso"){
        CurrencyValueToconverted.innerHTML = new  Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
            
        }).format( inputCurrencyValue / pesotoday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Design sem nome 3.png"
    }

    if( currencySelect.value == "ienes"){
        currencyName.innerHTML = "Ienes"
        currencyImage.src = "./assets/japao.png"
    }

    if( currencySelect.value == "peso") {
        currencyName.innerHTML ="Peso"
        currencyImage.src="./assets/argentina.png"
    }


    convertValues()
}





currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) 