
let j = 0
let i = 0
let storage = window.localStorage


function chamar(){
    
    var a = storage.getItem('opt_metodo1')
    
    console.log(typeof(a))

    console.log(a)

    b = "AHP"
    
    JSON.stringify(b)

    console.log(typeof(b))
    console.log(b)
    
    console.log(a == b)

    //console.log(JSON.stringify(storage.getItem('opt_metodo1')))
    
    if(storage.getItem('opt_metodo1') === "AHP" && storage.getItem('opt_metodo2') === "TOPSIS" )
    {
                
        window.location.href = './registroAltCrit.html'

        //window.location.href ='http://google.com'

    }
} 

function tirarInputCriterio(){

    $( "#criterios" +i).remove()
    i--

}

function tirarInputAlternativas(){

    $( "#alternativas" +j).remove()
    j--

}


function adicionarInputCriterio(){

    i++
    
     let newInput = $( "#criterios" ).clone()
     newInput.attr('id', 'criterios' + i);
     newInput.attr('name', 'criterio' + i);
     newInput.appendTo( "#form_criterios")// passa como parametro o nome com o valor de 'i'

    
    // document.title === 'Form2'
}

function adicionarInputAlternativas() {

    j++

    let newInput = $( "#alternativas" ).clone()
    newInput.attr('id', 'alternativas' + j);
    newInput.attr('name', 'alternativa' + j);
    newInput.appendTo( "#form_alternativas")// passa como parametro o nome com o valor de 'i'
}



function save1(){



    let strAlt = $( "#form_alternativas" ).serializeArray(); // transforma  os inputs em objeto
    console.log(strAlt)


       for (const alternativa of strAlt) {  // atribui para cada valor do objeto strAlt  uma key(alternativa.name) e um valor(alternativa.value)
            storage.setItem(alternativa.name, alternativa.value) 

            console.log(alternativa)
            
            for (let i = 0; i <= strAlt.length; i++) {
                
                storage.setItem("kqtalternativa", i) // adiciona aquantidade de inputs    
                
            }

        }

        
        

}


function save2(){
    
 

    let strCrit = $( "#form_criterios" ).serializeArray(); // transforma  os inputs em objeto
    console.log(strCrit)


       for (const criterio of strCrit) {  // atribui para cada valor do objeto  uma key(numero.name) e um valor(numero.value)
            storage.setItem(criterio.name, criterio.value) 

            console.log(criterio)
            

            for (let j = 0; j <= strCrit.length; j++) {
                
                storage.setItem("kqtcriterio", j    )
                
            }


        }
        
}





function resultado(){

    let totalSumIput = 0
    qtdinput = Number(storage.getItem("kqtdinput"))

    numero02 = Number(storage.getItem("knumero2"))

    for (let i = 0; i < qtdinput; i++) { //  soma dos valores de cada input pegando suas keys como valor
        totalSumIput += Number(storage.getItem("numero"+ i))
    }

    
    totalsum = totalSumIput + numero02 
    
    console.log(totalsum)

    $('#resultado').html(totalsum)   
}

function tabela(){
     
    let array = []
    qtdinput = Number(storage.getItem("kqtdinput"))



    for (let i = 0; i < qtdinput; i++) {  // coloca cada valor do storage em um array
        array[i] =  storage.getItem('numero' + i)
            
    } 
    
    array.push(storage.getItem('knumero2')) // acrescenta o input da outra pagina no array  */
    
    console.log(array)


    /* ==========================================================================================================
                    adiciona na tabela o array                                              */

    var table = document.getElementById("table")[0]

    var tbody = document.getElementsByTagName("tbody")[0]

    tbody.innerHTML = ""
    
    for (let i = 0; i < qtdinput; i++) {
        tbody.innerHTML += "<tr><td>"+storage.getItem('numero'+i)+"<tr>"
        //$('#tbody').append("<tr> ${")
    }

}

function tabela2 (){


    let array = []
    qtdinput = Number(storage.getItem("kqtdinput"))



    for (let i = 0; i < qtdinput; i++) {  // coloca cada valor do storage em um array
        array[i] =  storage.getItem('numero' + i)
            
    } 
    
    //array.push(storage.getItem('knumero2')) // acrescenta o input da outra pagina no array  */
    
    console.log(array)



    var corpoTabela = document.querySelector('tbody')

    var tr = document.createElement('tr')
    



    

    for (let i = 0; array.length ; i++) {

        

        corpoTabela.appendChild(tr).append(array[i])
         //array[i] = document.createElement('td')
        //tr.appendChild(indice)
    } 
    
}


function tabela3(){

    let arrayAtributo = []
    let arrayInput = []
    qtdinput = Number(storage.getItem("kqtdinput"))
    qtdinput = Number(storage.getItem("kqtatributo"))


    for (let i = 0; i < qtdcriterios; i++) {  // coloca cada valor do storage em um array
        arrayAtributo[i] =  storage.getItem('atributo' + i)
            
    } 


    for (let i = 0; i < qtdinput; i++) {  // coloca cada valor do storage em um array
        arrayInput[i] =  storage.getItem('numero' + i)
            
    } 

    console.log(arrayInput)

    const linhas = arrayInput.map(numero =>{
        const tdnumeros = $('<td>').append(numero)
        return $('<tr>').append(tdnumeros)
    })

    $('#tbody').append(linhas)
    console.log('hello')
}


function tabela4(){
  
  
    let arrayCriterios = []
    let arrayAlternativas = []
    qtdalternativa = Number(storage.getItem("kqtdalternativa"))
    qtdcriterios = Number(storage.getItem("kqtcriterio"))


    for (let i = 0; i < qtdcriterios; i++) {  // coloca cada valor do storage em um array
        arrayCriterios[i] =  storage.getItem('citerio' + i)
            
    } 
    console.log(arrayCriterios)


    for (let i = 0; i < qtdalternativa; i++) {  // coloca cada valor do storage em um array
        arrayAlternativas[i] =  storage.getItem('alternativa' + i)
            
    } 
    console.log(arrayAlternativas)
    console.log(arrayAlternativas[0].length)


    arrayPage = []  

    arrayPage.push(arrayAlternativas)
    arrayPage.push(arrayCriterios)

    console.log(arrayPage)
    


    //$('#tbody').append(td)
    if(Number(storage.getItem('kqtalternativa')) > Number(storage.getItem('kqtcriterio'))){
        for (i = 0; i < arrayAlternativas.length; i++){
   
             $('#tbody').append('<tr><td>'+arrayAlternativas[i]+'</td> <td>'+arrayCriterios[i]+'</td></tr>');
                
                
            }
    }

    


    



  
  
    //var table = document.createElement("table");
    if(Number(storage.getItem('kqtdinput')) > Number(storage.getItem('kqtatributo')))
        for (i = 0; i < arrayPage.length; i++) {
            var column = document.createElement("td");
            
                for (j = 0; j < qtdinput.length; j++) {
                    var row = document.createElement("tr");
                    var content = document.createTextNode(arrayPage[j][i]);
                    column.appendChild(content);
                    row.appendChild(column);
                }
            $('#tbody').append(row);
        
}}

function radio(){

var choices = [];
var method = document.getElementsByName('metodo1');
    for (var i=0;i<method.length;i++){
        
        if ( method[i].checked ) {
        choices.push(method[i].value);
        
        
        storage.setItem('opt_metodo1',method[i].value )

        console.log(storage.getItem('opt_metodo1'))

        }
    
    }


var choices2 = [];
var els = document.getElementsByName('metodo2');
    for (var i=0;i<els.length;i++){
        
        if ( els[i].checked ) {
        choices.push(els[i].value);
        
        
        storage.setItem('opt_metodo2',els[i].value )

        console.log(storage.getItem('opt_metodo2'))
            
        }
    
    }



    //window.location.href ='http://google.com'

    // $(location).attr('href', 'http://google.com');
}



function valoresCriterios(){
    
// ================================coloca os valores dos nomes do inputs do storage no arrary==============================

    let arrayCriterios = []
    let arrayAlternativas = []
    qtdalternativa = Number(storage.getItem("kqtalternativa"))
    qtdcriterios = Number(storage.getItem("kqtcriterio"))

    // console.log(storage.getItem('criterio1'))


    for (let i = 0; i < qtdcriterios; i++) {  // coloca cada valor do storage em um array
        arrayCriterios[i] = storage.getItem('criterio' + i)
            
    } 
    // console.log(arrayCriterios)


    for (let i = 0; i < qtdalternativa; i++) {  // coloca cada valor do storage em um array
        arrayAlternativas[i] =  storage.getItem('alternativa' + i)
            
    } 



// =========================adiciona as alternativas para cada criterio nas <divs> e cada valor se quer maximizar ou minimizar ====================================================================
    for (let i = 0; i < arrayCriterios.length; i++) {
        
        $('#div_CriAlt').append('<br><h2>Critério : '+arrayCriterios[i]+ '</h2><div id="div'+i+'"><form id="form'+i+'"></form><select name="SLCT'+arrayCriterios[i]+'" id="SLCT'+arrayCriterios[i]+'" required="" style="width: 150px; margin-top: 5px;"><option value="Max">Maximizar ↑</option><option value="Min">Minimizar ↓</option></select></div> ')


                       
        for (let j = 0; j < arrayAlternativas.length; j++) {
            
            $('#form'+i).append('<label>'+arrayAlternativas[j]+' </label><input type="number" name='+arrayAlternativas[j]+' style="width: 150px; margin-top: 5px;">')
            
            valor =  $('#SLCT'+arrayCriterios[i] ).val();
            console.log(valor)
            storage.setItem("MinMax"+arrayCriterios[i], valor)
        } 
            
    }

}



function gerarObjeto(){

// ================================coloca os valores dos nomes do inputs do storage no arrary==============================

    let arrayObjeto = []
    let arrayCriterios = []
    let arrayAlternativas = []
    qtdalternativa = Number(storage.getItem("kqtalternativa"))
    qtdcriterios = Number(storage.getItem("kqtcriterio"))

    
    for (let i = 0; i < qtdcriterios; i++) {  // coloca cada valor do storage em um array
        arrayCriterios[i] = storage.getItem('criterio' + i)
            
    } 
    // console.log(arrayCriterios)


    for (let i = 0; i < qtdalternativa; i++) {  // coloca cada valor do storage em um array
        arrayAlternativas[i] =  storage.getItem('alternativa' + i)
            
    } 



// ===========================================transforma os inputs em objetos =============================================


    for (let i = 0; i < arrayCriterios.length; i++) {
        let srl = $( "#form"+i+"").serializeArray(); // transforma  os inputs em objeto
        arrayObjeto.push(srl)
        
    }
    storage.setItem('objeto', JSON.stringify(arrayObjeto))
    console.log(storage.getItem('objeto'))
    
    datas = JSON.parse(storage.getItem('objeto'))
    console.log(datas)


        //var cols = ['name', 'value'];

// ===================== criando a tabela =========================================        

    for (var i = 0; i < datas.length; i++) {
    
    $('table').append('<tr></tr>');
    $('#table_h').append('<th>'+datas[i][i].name+'</th>');


        for (var j = 0; j <= 2; j++) {

        // console.log(datas[i][j].name)


              
        $('table tr:last-child').append('<td>' + datas[i][j].value + '</td>');
        }
        $('table tr:last-child').append('<th>'+ arrayCriterios[i]+ ' </th>')
    }


    // datas.forEach(function (data) {
    //     var tr = document.createElement('tr')
    //     for (var campo in data) {
    //         var td = document.createElement('td')
    //         td.innerHTML = data[campo]
    //         tr.appendChild(td)

    //     };
    //     tbody.appendChild(tr)
        
    // });
}
function PrioridadeCriterios(){

    let arrayCriterios = []
    qtdcriterios = Number(storage.getItem("kqtcriterio"))

    // console.log(storage.getItem('criterio1'))


    for (let i = 0; i < qtdcriterios; i++) {  // coloca cada valor do storage em um array
        arrayCriterios[i] = storage.getItem('criterio' + i)
            
    } 

    for (let i = 0; i < arrayCriterios.length; i++) {

        for (let j = 1; j < arrayCriterios.length ; j++) {
            
            if(i != j){
                
                 $('#div_prioridade').append('<div id="PRIO"><h2>O quão preferível o critério '+arrayCriterios[i]+' é em relação a '+arrayCriterios[j]+'?</h2></div> ')


            }

        }        
    }


}


