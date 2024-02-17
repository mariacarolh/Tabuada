function Calcular() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        alert('Insira um número!')
    }

    else {
        let num = Number(numero.value)
        tab.innerHTML = ''

        for (let tabuada = 0; tabuada < 11; tabuada++) {

            let item = document.createElement('option')
            item.text = `${num} x ${tabuada} = ${num*tabuada}`
            item.value = `tab${tabuada}`
            tab.appendChild(item)
        }
    }
}



