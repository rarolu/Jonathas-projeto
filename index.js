
let j = 0
let i = 0
let storage = window.localStorage

function calcula() {

    mais = 0
    menos = 0 

    mais = Math.pow((0,3170 - 0,2536) ,2 ) + Math.pow((0,1091 - 0,2182) ,2 ) + Math.pow((0,1059 - 0,2119) ,2 )
    console.log(Math.sqrt(mais))
}


function test(){

    let S_ideal = []
    let S_n_ideal = []
    let array1 = [1,2,3,4,5,6,7,8]

   let max = Math.max.apply(Math, array1) 
   let min = Math.min.apply(Math,array1)

if (MinMax === 'Max') {

    S_ideal.push(max)
    S_n_ideal.push(min)
}else { 
    
    S_ideal.push(min)
    S_n_ideal.push(max)


}

}

function ObterMatris() {
    // ====================== obtendo a matrix =====================    
    ponderando = 0
    arrayMatris = []
    arrayC = GetArrayCriterios()


    let numero
    datas = JSON.parse(storage.getItem('objeto'))
    console.log(datas)

    for (var i = 0; i < datas.length; i++) {

        arrayMatrisX = []

        for (var j = 0; j < datas.length; j++) {
            numero = datas[i][j].value
            arrayMatrisX.push(numero)
            console.log(arrayMatrisX)

        }
        arrayMatris.push(arrayMatrisX)
    }
    return arrayMatris

}

function TOPSIS_MaxMIn(){

   matris = TOPSIS_MatrisPonderamento()
   let S_ideal = []
   let S_n_ideal = []
   let arrayC = GetArrayCriterios()
   let calc_ideal = 0
   let calc_n_ideal = 0
   let array_calc_ideal = []
   let array_calc_n_ideal = []
   let arrayPR = []
   let Proxi_rel = 0
    




// var min = Math.min(...matris)
// var max = Math.max(...matris)
// ========================================================================
    for (let i = 0; i < 3; i++) {
        
        let MinMax = storage.getItem('MinMax_' + arrayC[i])
        console.log(arrayC)
        
        if (MinMax === 'Max') {

            S_ideal.push(Math.max.apply(Math, matris[i]))
            S_n_ideal.push(Math.min.apply(Math, matris[i]))
        }
        if(MinMax === 'Min'){
            S_ideal.push(Math.min.apply(Math, matris[i]))
            S_n_ideal.push(Math.max.apply(Math, matris[i]))
        }
        console.log(S_ideal)
        console.log(S_n_ideal)


    }

    // console.log(S_ideal)
    // console.log(S_n_ideal)


    for (let i = 0; i < matris.length; i++) {
        for (let j = 0; j < matris.length; j++) {
        calc_ideal = calc_ideal + ((matris[j][i] - S_ideal[i]) * (matris[j][i] - S_ideal[i]))
        
        calc_n_ideal = calc_n_ideal + ((matris[j][i] - S_n_ideal[i]) * (matris[j][i] - S_n_ideal[i]))
        console.log(calc_ideal)    

        }
        
        array_calc_ideal.push(calc_ideal)
        array_calc_n_ideal.push(calc_n_ideal)
        Proxi_rel = array_calc_n_ideal [i] / array_calc_ideal[i] - array_calc_n_ideal[i]
        
        arrayPR.push(Proxi_rel)
        
        
        
    } 
    
    Math.sqrt(calc_n_ideal)
    Math.sqrt(calc_ideal)
    return [ array_calc_n_ideal , array_calc_ideal, arrayPR ]
    
}







function squareSUMarray(array){
let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += (array[i] * array[i])
        
    }
return Math.sqrt(sum)
}

function home() {

    window.location.href = './index.html'

    localStorage.clear()

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

function chamarPagina() {

    var a = storage.getItem('opt_metodo1')

    console.log(typeof (a))

    console.log(a)

    b = "AHP"

    JSON.stringify(b)

    console.log(typeof (b))
    console.log(b)

    console.log(a == b)

    var option1=document.getElementsByName('metodo1');
    var option2=document.getElementsByName('metodo2');


    if (!(option1[0].checked || option1[1].checked || option1[2].checked)) {
        alert("Por Favor Selecione o metodo 1");
        // return false;
    }else if(!(option2[0].checked || option2[1].checked || option2[2].checked)){
        alert("Por Favor Selecione o metodo 2");

        
    }else{
        
        window.location.href = './registroAltCrit.html'
    }

    // if ( $("#AD").prop("checked" , false) ){
    //     alert('selecione o campo') 
    // }else{
    //     window.location.href = './registroAltCrit.html'

    // }
    //console.log(JSON.stringify(storage.getItem('opt_metodo1')))

    // if (storage.getItem('opt_metodo1') != "" && storage.getItem('opt_metodo2') != "") {

    //     window.location.href = './registroAltCrit.html'

    //     //window.location.href ='http://google.com'

    // }

}

function tirarInputCriterio() {

    // while(i>0){
        
        $("#criterios" + i).remove()
        i--
    // }


}

function tirarInputAlternativas() {

    // while(j<0){
        
        $("#alternativas" + j).remove()
        j--
    // }

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
            alert('preencha todos os campos das alternartivas')
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


    let validation = true

    let strCrit = $("#form_criterios").serializeArray(); // transforma  os inputs em objeto
    console.log(strCrit)


    for (const criterio of strCrit) {  // atribui para cada valor do objeto  uma key(numero.name) e um valor(numero.value)
        storage.setItem(criterio.name, criterio.value)

        console.log(criterio)

        if (!criterio.value) {
            alert('preencha todos os campos dos criterios')
            validation = false
            break;
        }


    }
    if (validation) {
        storage.setItem("kqtcriterio", strCrit.length) // adiciona aquantidade de inputs    
        window.location.href = './valoresCriterios.html'
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




function valoresCriterios() {

    // ================================coloca os valores dos nomes do inputs do storage no arrary==============================

    arrayC = GetArrayCriterios()
    arrayA = GetarrayAlternativas()

    // =========================adiciona as alternativas para cada criterio nas <divs> e cada valor se quer maximizar ou minimizar ====================================================================
    for (let i = 0; i < arrayC.length; i++) {

        $('#div_CriAlt').append('<br><h2>Crit??rio : ' + arrayC[i] + '<div id="div_peso'+i +'" class="div_pesos" > Peso de(a): '+ arrayC[i] +' <input type="number" id="Peso'+i + arrayC[i] + '" step="0.001" class="pesos">  </input> </div></h2>  <div id="div' + i + '"><form id="form' + i + '"></form><select name="SLCT' + arrayC[i] + '" id="SLCT' + arrayC[i] + '" required="" style="width: 150px; margin-top: 5px;"><option value="Max">Maximizar ???</option><option value="Min">Minimizar ???</option></select></div> ')

        if (storage.getItem('opt_metodo1') === "AHP" && storage.getItem('opt_metodo2') === "TOPSIS-2NE") {
            document.getElementById("div_peso"+i).remove()
        }


        for (let j = 0; j < arrayA.length; j++) {

            $('#form' + i).append('<label>' + arrayA[j] + ' </label><input type="number" name=' + arrayA[j] + ' style="width: 150px; margin-top: 5px;"><br>')


        }

    }
}



function gerarObjeto() {

    // ================================coloca os valores dos nomes do inputs do storage no arrary==============================

    let arrayObjeto = []
    arrayC = GetArrayCriterios()
    arrayA = GetarrayAlternativas()
    let arrayPeso = []


    // ===========================================transforma os inputs em objetos =============================================


    for (let i = 0; i < arrayC.length; i++) {
        let srl = $("#form" + i + "").serializeArray(); // transforma  os inputs em objeto
        arrayObjeto.push(srl)

        // ============= adicona o valor de Min / Max ================
        valor = $('#SLCT' + arrayC[i]).val();
        console.log(valor)
        storage.setItem("MinMax_" + arrayC[i], valor)

    }
    storage.setItem('objeto', JSON.stringify(arrayObjeto))
    console.log(storage.getItem('objeto'))

    var somaPeso = 0
    if (storage.getItem('opt_metodo1') === "AD") {
        for (let i = 0; i < arrayC.length; i++) {
            peso = Number($("#Peso"+i + arrayC[i]).val())

            storage.setItem('Peso_'+arrayC[i], peso)

            pesoValor = Number(($('#Peso'+i+arrayC[i]).val()))
            somaPeso += pesoValor
            
            
        }
        if(somaPeso == 1){

            window.location.href = './tabela.html'
        }else{
            alert(' A soma dos pesos tem que ser igual a 1')

        }
    }else{
        // window.location.href = './Prioridade.html'

    }

    

    // datas = JSON.parse(storage.getItem('objeto'))
    // console.log(datas)
    // console.log(document.querySelector('.pesos').value)

}
//var cols = ['name', 'value'];

// ===================== criando a tabela =========================================        


function TOPSIS_MatrisPonderamento() {
  
    ponderando = 0
    matris = ObterMatris()

    arrayData = []
    // ================================ ponderando a matrix =========================
    
    for (let k = 0; k < matris.length; k++) {
        
        arrayRow = []

        // $('table').append('<tr></tr>');
        // $('#table_h').append('<th>' +datas[k][k].name+ '</th>');
        
        for (let l = 0; l < matris.length; l++) {
            
            valorPeso = storage.getItem("Peso_"+arrayC[k])
            console.log(valorPeso)
            ponderando = (matris[k ][l]/squareSUMarray(matris[k])) * valorPeso
            
            console.log(ponderando)
            
            arrayRow.push(ponderando)
            console.log(arrayRow)
            // $('table tr:last-child').append('<td>' + ponderando + '</td>');
            
        }
        arrayData.push(arrayRow) 
        // $('table tr:last-child').append('<th>' + arrayC[k]  + ' </th>')
        
    }
    console.log(arrayData)
    return arrayData
}
function GerarTabela() {

    arrayC = GetArrayCriterios()
    matris = ObterMatris()

    for (var i = 0; i < matris.length; i++) {
        
        $('table').append('<tr></tr>');
        $('#table_h').append('<th>' + arrayC[i] + '</th>');

        for (var j = 0; j < matris.length ; j++) {


            $('table tr:last-child').append('<td>' + (matris[j][i].value) + '</td>');
            
        }
        $('table tr:last-child').append('<th>' + matris[i][i].name + ' </th>')
    }

}


function PrioridadeCriterios() {

    arrayC = GetArrayCriterios()

    let result = combine(arrayC,2)
    console.log(result)
    for (const option of result) {
        
        $('#div_prioridade').append('<div id="PRIO"><h2>O qu??o prefer??vel o crit??rio '+option[0]+' ?? em rela????o a '+option[1]+'?  <select name="'+option[0]+'" id="Select_Prior_'+option[0]+'_'+option[1]+'" required="" style="width: 150px; margin-top: 5px;"><option svalue="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select> </h2></div> ')
        
        select = $('#Select_Prior_'+option[0]+'_'+option[1]+'').find(":selected").text();
        console.log(select)

        storage.setItem('Prio_'+option[0]+'_'+option[1]+'',select )
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

function testeTabela() {

    // matris = TOPSIS_MatrisPonderamento()
    matris = TOPSIS_MatrisPonderamento()
    
    arrayC = GetArrayCriterios()

    for (let i = 0; i < matris.length; i++) {
        linha = matris[i]

        $('table').append('<tr>'+linha+'</tr>');
        $('#table_h').append('<th>' + arrayC[i]  + '</th>');

        for (let j = 0; j < matris.length; j++) {
            coluna = matris[j][i]
            $('table tr:last-child').append('<td>' + coluna + '</td>');


        }
        $('table tr:last-child').append('<th>' +datas[i][i].name+ ' </th>')

    }
}

function tabelaRanking(){
   // matris = TOPSIS_MatrisPonderamento()
//    matris = TOPSIS_MatrisPonderamento()
    topsis = TOPSIS_MaxMIn()
   arrayC = GetArrayCriterios()
   console.log(topsis)
   arrayA = GetarrayAlternativas()

   
   for (let i = 0; i < topsis.length; i++) {
           
    $('#t_body_rank').append('<tr><th>'+arrayA[i]+'</th></tr>');
           

       

       for (let j = 0; j < arrayC.length -1  ; j++) {
        //    coluna = topsis.array_calc_ideal
        //    console.log(coluna)
           $('table t_body_rank').append('<td>' +topsis[j][i]+ '</td>');
        
           
            // if(i == 2)




       }
    //    $('#t_body_rank').append('<tr> </tr>')
       
    }
    console.table(topsis)

}