let select = document.querySelectorAll('.currency');
let input_currency = document.getElementById('input_currency');
let output_currency = document.getElementById('output_currency');

//API
const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(dados => dados.json())
  .then((dados) => {

                     //retorna uma matriz dos dados recebidos pela API
    const entradas = Object.entries(dados);
    console.log(entradas)

    //para cada valor de entrada se for menor que i adicionar mais um
    //onde i é as moedas da API
    for(i = 0; i < entradas.length; i++) {
        //adiciona moedas no select 0
        select[0].innerHTML += `<option value = "${entradas[i][0]}">${entradas[i][0]}</option>`

        //adiciona moedas no select 1
        select[1].innerHTML += `<option value = "${entradas[i][0]}">${entradas[i][0]}</option>`
    }

  });

  //função para conversao
   function converter() {
                             //valor fornecido pelo usuario
    let input_currency_val = input_currency.value;

    //se valor so select 0 for diferente do valor do selct 1
    if(select[0].value != select[1].value) {
        console.log('Válido.')

        const host = 'api.frankfurter.app';
                                          //valor usuario                //valor select 0      //valor select 1
        fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
        .then(valor => valor.json())
        .then((valor) => {          //retorna uma matriz dos valores
            output_currency.value = Object.values(valor.rates)[0].toFixed(2)
        });

    } else {
        alert('Selecione duas moedas diferentes.')
    }
   }