const btEnviar = document.querySelector('.btEnviar').addEventListener('click',realizarReq)
const btChange = document.querySelector('.change').addEventListener('click',changeMoney)
const bandeirausa = document.querySelector('.bandeiraUSA')
const bandeirabrasil = document.querySelector('.bandeiraBRASIL')
const infoChange = document.querySelector('.infoChange')
const moedaConvertida = document.querySelector('.moedaConvertida')
const listaBandeiras = document.querySelector('.line').querySelectorAll('img')
const input = document.querySelector('.inputid')
let moeda = 'real'

    async function realizarReq(){
        let response = await fetch('https://economia.awesomeapi.com.br/json/USD-BRL')
        let json = await response.json()
        if(input.value == ''){
            return
        }
        moedaConvertida.querySelector('h2').innerHTML = `${json[0].high}` 
             
        if (moeda =='real'){
            let conta = (Number(input.value))/json[0].high       
            moedaConvertida.querySelector('p').innerText =`Com ${input.value} Reais você tem ${conta.toFixed(2)} Dólares`
            moedaConvertida.style.display = 'flex'
            input.value = ''
        }else{
            let conta = (Number(input.value))*json[0].high
            moedaConvertida.querySelector('p').innerText =`Com ${input.value} Dólares você tem ${conta.toFixed(2)} Reais`
            moedaConvertida.style.display = 'flex'
            input.value = ''
        }
    }

  function changeMoney(){
      
      input.value = ''
      moedaConvertida.style.display = 'none'
    if (bandeirabrasil.style.display != 'none'){
        bandeirabrasil.style.display = 'none'
        bandeirausa.style.display = 'block'
        infoChange.innerText ='De Dólar para Real'
        moeda ='dolar'
    }else{
        bandeirabrasil.style.display = 'block'
        bandeirausa.style.display = 'none'
        infoChange.innerText ='De Real para Dólar'
        moeda = 'real'
    }
  }

  function criaDiv(){  
      moedaConvertida.querySelector('h2').innerText = `U$$ ${json[0].high}`
  }