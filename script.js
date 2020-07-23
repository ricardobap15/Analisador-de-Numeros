var num = document.getElementById('num')
var box = document.getElementById('select')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}
function adicionar () {
 if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado!`
    box.appendChild(item)
 } else {
    alert('Valor inválido ou já está na lista!')
}

num.value = ''
num.focus()
 }

 function finalizar() {
     let qtde = valores.length
     Array.min = function(array) {
        return Math.min.apply(Math, array)
     }
     Array.max = function(array) {
         return Math.max.apply(Math, array)
     }
     let soma = 0
     let media = 0
     for(let pos in valores) {
         soma += valores[pos]
         media = soma / valores.length
     }

         
                    /* ou pode ser assim:
    let maior = valores[0]
    let menor = valores[0]
    for(let pos in valores) {
        if(valores[pos] > maior) {
            maior = valores[pos]
        } if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    */

    
     res.innerHTML += `<p>Ao todo, são ${qtde} números cadastrados</p>`
     res.innerHTML += `<p>O maior valor é o número ${Array.max(valores)}</p>`
     res.innerHTML += `<p>O menor valor é o número ${Array.min(valores)}</p>`
     res.innerHTML += `<p>A soma de todos os valores é ${soma}`
     res.innerHTML += `<p>A média de todos os valores é de ${media}`
 }

    
   



