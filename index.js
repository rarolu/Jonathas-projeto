
let j = 0
let i = 0
let storage = window.localStorage

function home() {

    window.location.href = './index.html'

    localStorage.clear()

}
function chamarPagina() {

    var a = storage.getItem('opt_metodo1')

    console.log(typeof (a))

    console.log(a)

    b = "AHP"

    JSON.stringify(b)

    console.log(typeof (b))
    console.log(b)

    console.log(a == b)

    //console.log(JSON.stringify(storage.getItem('opt_metodo1')))

    if (storage.getItem('opt_metodo1') === "AHP" && storage.getItem('opt_metodo2') === "TOPSIS-2NE") {

        window.location.href = './registroAltCrit.html'

        //window.location.href ='http://google.com'

    }

}

function tirarInputCriterio() {

    $("#criterios" + i).remove()
    i--

}

function tirarInputAlternativas() {

    $("#alternativas" + j).remove()
    j--

}


function adicionarInputCriterio() {

    i++

    let newInput = $("#criterios0").clone()
    newInput.attr('id', 'criterios' + i);
    newInput.attr('name', 'criterio' + i);
    newInput.appendTo("#form_criterios")// passa como parametro o nome com o valor de 'i'


    // document.title === 'Form2'
}

function adicionarInputAlternativas() {

    j++

    let newInput = $("#alternativas0").clone()
    newInput.attr('id', 'alternativas' + j);
    newInput.attr('name', 'alternativa' + j);
    newInput.appendTo("#form_alternativas")// passa como parametro o nome com o valor de 'i'
}



function save1() {

    let validation = true
    let strAlt = $("#form_alternativas").serializeArray(); // transforma  os inputs em objeto
    console.log(strAlt)

    
    for (const alternativa of strAlt) {  // atribui para cada valor do objeto strAlt  uma key(alternativa.name) e um valor(alternativa.value)
        
        storage.setItem(alternativa.name, alternativa.value)      
        console.log(alternativa)
        
        if(!alternativa.value){
            alert('helo')
            validation = false
            break;
        }
        
        
    }
    if(validation){
        storage.setItem("kqtalternativa",strAlt.length ) // adiciona aquantidade de inputs    
        window.location.href = './valoresCriterios.html'
}}

    
    /*for (let i = 0; i <= 6; i++) {
        if ($("#alternativas"+i).val() !== "" && count === false){
            console.log('hello')
            storage.setItem("kqtalternativa", i)
            // window.location.href = './valoresCriterios.html'
            count = true;
            
            
        }else{
            alert('alerta'+i)
            count = true
            break;  }
        }

 }*/

function save2() {



    let strCrit = $("#form_criterios").serializeArray(); // transforma  os inputs em objeto
    console.log(strCrit)


    for (const criterio of strCrit) {  // atribui para cada valor do objeto  uma key(numero.name) e um valor(numero.value)
        storage.setItem(criterio.name, criterio.value)

        console.log(criterio)


        for (let j = 0; j <= strCrit.length; j++) {

            storage.setItem("kqtcriterio", j)

        }


    }

}





function resultado() {

    let totalSumIput = 0
    qtdinput = Number(storage.getItem("kqtdinput"))

    numero02 = Number(storage.getItem("knumero2"))

    for (let i = 0; i < qtdinput; i++) { //  soma dos valores de cada input pegando suas keys como valor
        totalSumIput += Number(storage.getItem("numero" + i))
    }


    totalsum = totalSumIput + numero02

    console.log(totalsum)

    $('#resultado').html(totalsum)
}



function valorRadio() {

    var choices = [];
    var method = document.getElementsByName('metodo1');
    for (var i = 0; i < method.length; i++) {

        if (method[i].checked) {
            choices.push(method[i].value);


            storage.setItem('opt_metodo1', method[i].value)

            console.log(storage.getItem('opt_metodo1'))

        }

    }


    var choices2 = [];
    var els = document.getElementsByName('metodo2');
    for (var i = 0; i < els.length; i++) {

        if (els[i].checked) {
            choices.push(els[i].value);


            storage.setItem('opt_metodo2', els[i].value)

            console.log(storage.getItem('opt_metodo2'))

        }

    }



    //window.location.href ='http://google.com'

    // $(location).attr('href', 'http://google.com');
}



function valoresCriterios() {

    // ================================coloca os valores dos nomes do inputs do storage no arrary==============================

    arrayC = GetArrayCriterios()
    arrayA = GetarrayAlternativas()

    // =========================adiciona as alternativas para cada criterio nas <divs> e cada valor se quer maximizar ou minimizar ====================================================================
    for (let i = 0; i < arrayC.length; i++) {

        $('#div_CriAlt').append('<br><h2>Critério : ' + arrayC[i] + '</h2><div id="div' + i + '"><form id="form' + i + '"></form><select name="SLCT' + arrayC[i] + '" id="SLCT' + arrayC[i] + '" required="" style="width: 150px; margin-top: 5px;"><option value="Max">Maximizar ↑</option><option value="Min">Minimizar ↓</option></select></div> ')



        for (let j = 0; j < arrayA.length; j++) {

            $('#form' + i).append('<label>' + arrayA[j] + ' </label><input type="number" name=' + arrayA[j] + ' style="width: 150px; margin-top: 5px;">')


        }

    }

}



function gerarObjeto() {

    // ================================coloca os valores dos nomes do inputs do storage no arrary==============================

    let arrayObjeto = []
    arrayC = GetArrayCriterios()
    arrayA = GetarrayAlternativas()


    // ===========================================transforma os inputs em objetos =============================================


    for (let i = 0; i < arrayC.length; i++) {
        let srl = $("#form" + i + "").serializeArray(); // transforma  os inputs em objeto
        arrayObjeto.push(srl)

        // ============= adicona o valor de Min / Max ================
        valor = $('#SLCT' + arrayC[i]).val();
        console.log(valor)
        storage.setItem("MinMax" + arrayC[i], valor)

    }
    storage.setItem('objeto', JSON.stringify(arrayObjeto))
    console.log(storage.getItem('objeto'))

    // datas = JSON.parse(storage.getItem('objeto'))
    // console.log(datas)

}
//var cols = ['name', 'value'];

// ===================== criando a tabela =========================================        

function GerarTabela() {

    arrayC = GetArrayCriterios()


    datas = JSON.parse(storage.getItem('objeto'))
    console.log(datas)
    for (var i = 0; i < datas.length; i++) {

        $('table').append('<tr></tr>');
        $('#table_h').append('<th>' + datas[i][i].name + '</th>');


        for (var j = 0; j <= 2; j++) {

            // console.log(datas[i][j].name)



            $('table tr:last-child').append('<td>' + datas[i][j].value + '</td>');
        }
        $('table tr:last-child').append('<th>' + arrayC[i] + ' </th>')
    }


}
function PrioridadeCriterios() {

    arrayC = GetArrayCriterios()

    let result = combine(arrayC,2)
    console.log(result)
    for (const option of result) {
        
        $('#div_prioridade').append('<div id="PRIO"><h2>O quão preferível o critério '+option[0]+' é em relação a '+option[1]+'?  <select name="'+option[0]+'" id="Select_Prior'+option[0]+'" required="" style="width: 150px; margin-top: 5px;"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select> </h2></div> ')
    }
}

function combine(a, q){
    var n = a.length - 1, l = n - q + 1, x = 0, c = [], z = -1, p, j, d, i;
    if(q > n || q < 2) return c;
    for(p = [], i = q; p[--i] = i;);
    while(x <= l){
        for(c[++z] = [], j = -1; ++j < q; c[z][j] = a[p[j]]);
        if(++p[j - 1] > n)
            while(j--)
                if(!j && x++, (d = p[j]) < l + j){
                    while(j < q) p[j++] = ++d;
                    break;
                }
    }
    return c;
};


function teste() {
    document.getElementById('btn').addEventListener('click', function () {
        window.location.href = './index.html'
    })
}

function GetArrayCriterios() {
    let arrayCriterios = []
    // let arrayAlternativas = []

    qtdcriterios = Number(storage.getItem("kqtcriterio"))

    for (let i = 0; i < qtdcriterios; i++) {  // coloca cada valor do storage em um array
        arrayCriterios[i] = storage.getItem('criterio' + i)

    }
    // console.log(arrayCriterios)

    return arrayCriterios;
}


function GetarrayAlternativas() {
    // let arrayCriterios = []
    let arrayAlternativas = []
    qtdalternativa = Number(storage.getItem("kqtalternativa"))
    // qtdcriterios = Number(storage.getItem("kqtcriterio"))

    for (let i = 0; i < qtdalternativa; i++) {  // coloca cada valor do storage em um array
        arrayAlternativas[i] = storage.getItem('alternativa' + i)

    }
    return arrayAlternativas;
}

function erro() {

    valor = $('.input').val()
    console.log(valor)
    if (valor === "") {
        alert("digite")
    }


}