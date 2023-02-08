const btEnviar = document.querySelector('.btEnviar').addEventListener('click',realizarReq)


async function realizarReq(){
   

 let response = await fetch('https://economia.awesomeapi.com.br/json/USD-BRL')
 let json = await response.json()
 console.log(json)
 console.log(json[0].code)

  }
