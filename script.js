const btEnviar = document.querySelector('.btEnviar').addEventListener('click',realizarReq)
const btChange = document.querySelector('.change').addEventListener('click',changeMoney)
const bandeirausa = document.querySelector('.bandeiraUSA')
const bandeirabrasil = document.querySelector('.bandeiraBRASIL')
const infoChange = document.querySelector('.infoChange')
const moedaConvertida = document.querySelector('.moedaConvertida')

async function realizarReq(){
 let response = await fetch('https://economia.awesomeapi.com.br/json/USD-BRL')
 let json = await response.json()

 moedaConvertida.style.display= 'flex'

  }
  function changeMoney(){
    if (bandeirabrasil.style.display != 'none'){
        bandeirabrasil.style.display = 'none'
        bandeirausa.style.display = 'block'
        infoChange.innerText ='De Dólar para Real'
        criaDiv()
    }else{
        bandeirabrasil.style.display = 'block'
        bandeirausa.style.display = 'none'
        infoChange.innerText ='De Real para Dólar'
        criaDiv()
    }
  }
