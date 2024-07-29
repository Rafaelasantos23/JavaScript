const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

 const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const CurrencyValueToconverted = document.querySelector(".currency-value") // outras moedas 

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,MXN-BRL,JPY-BRL").then(resp => resp.json())

    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const pesotoday = data.MXNBRL.high;
    const ienesToday = data.JPYBRL.high;

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