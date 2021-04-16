let i = 0
let storage = window.localStorage

function adicionarInput(){

    //$('#add_input').click($('#Div_inp_pag1').append('numero<input type="number" class="input_pag1" name="numero1" value="ValorNumero1"><br><br>'));
    i++
    
    if(document.title === 'Form1')
    $( "#numero0" ).clone().appendTo( "#form_input" ).attr('name', 'numero' + i) // passa como parametro o nome com o valor de 'i'

    if(document.title === 'Form2'){

        $( "#atributo0" ).clone().appendTo( "#form_input1" ).attr('name', 'atributo' + i) // passa como parametro o nome com o valor de 'i'
    }
    
}



function save1(){
    //let numero1 = document.getElementById('numero1');

    //let numero1 = document.querySelector('#numero1').Value

        
    //numero1 = $('input.input_pag1').val()

    //storage.setItem("knumero1" , inp_pag1_list)

    //numero1 = $('#numero1').val(),

    //storage.setItem("knumero1" , numero1)

    let str = $( "#form_input" ).serializeArray(); // transforma  os inputs em objeto
    console.log(str)


       for (const numero of str) {  // atribui para cada valor do objeto str  uma key(numero.name) e um valor(numero.value)
            storage.setItem(numero.name, numero.value) 

            console.log(numero)
            
           storage.setItem("kqtdinput", i+1) // adiciona aquantidade de inputs        
        }
        
        /*for (let i = 0;  i <= str.length ; i++) {
            localStorage.setItem('numero'+i , JSON.stringify(str[i]));
            console.log(storage.getItem('numero'+i))
            
        }*/

}


function save2(){
    
 

    /*numero2 = $('#numero2').val(),

    storage.setItem("knumero2" , numero2)

    let quantidadeinput = Number(storage.getItem('kqtdinput'))
    
    storage.setItem('kqtdinput', quantidadeinput)*/

    let str = $( "#form_input1" ).serializeArray(); // transforma  os inputs em objeto
    console.log(str)
    qtdatributo = 1

       for (const atributo of str) {  // atribui para cada valor do objeto  uma key(numero.name) e um valor(numero.value)
            storage.setItem(atributo.name, atributo.value) 

            console.log(atributo)
            


            storage.setItem("kqtatributo", i+1)
            //storage.setItem("kqtdinput", Number(storage.getItem('kqtdinput'))+str.length)
            //storage.setItem('kqtdinput', qtdatributo+Number(storage.getItem('kqtdinput')))

        }

        
        //qtdatributo = qtdatributo + Number(storage.getItem("kqtdinput")) // adiciona aquantidade de inputs
        //storage.setItem('kqtdinput' , qtdatributo)
        
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

    

    
    /*for (let i = 0; i < array.length; i++) {
        inputobj = {
            nome: "numero" + i ,
            valor: Number(storage.getItem('numero'+i))
             
            
            
        }
    }*/
        //console.log(inputobj)

    /*for (let i = 0; i < array.length; i++) {
        const linha = $('<td>').append(array[i]);
        $('#Tlinhas').append(linha)
        
    }
             
    console.log(array)*/ 
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


    for (let i = 0; i < qtdatributo; i++) {  // coloca cada valor do storage em um array
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
  
  
    let arrayAtributo = []
    let arrayInput = []
    qtdinput = Number(storage.getItem("kqtdinput"))
    qtdatributo = Number(storage.getItem("kqtatributo"))


    for (let i = 0; i < qtdatributo; i++) {  // coloca cada valor do storage em um array
        arrayAtributo[i] =  storage.getItem('atributo' + i)
            
    } 
    console.log(arrayAtributo)


    for (let i = 0; i < qtdinput; i++) {  // coloca cada valor do storage em um array
        arrayInput[i] =  storage.getItem('numero' + i)
            
    } 
    console.log(arrayInput)
    console.log(arrayInput[0].length)


    arrayPage = []  

    arrayPage.push(arrayInput)
    arrayPage.push(arrayAtributo)

    console.log(arrayPage)
    


    //$('#tbody').append(td)
    if(Number(storage.getItem('kqtdinput')) > Number(storage.getItem('kqtatributo'))){
        for (i = 0; i < arrayInput.length; i++){
   
             $('#tbody').append('<tr><td>'+arrayInput[i]+'</td> <td>'+arrayAtributo[i]+'</td></tr>');
                
                
            }
    }
}

    /*function tabela(){
     
        let array = []
        qtdinput = Number(storage.getItem("kqtdinput"))
    
    
    
        for (let i = 0; i < qtdinput; i++) {  // coloca cada valor do storage em um array
            array[i] =  storage.getItem('numero' + i)
                
        } 
        
        array.push(storage.getItem('knumero2')) // acrescenta o input da outra pagina no array  */
        
        // console.log(array)
    
    
        /* ==========================================================================================================
                        adiciona na tabela o array                                              */
    
  /*      var table = document.getElementById("table")[0]
    
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
        
 /*       console.log(array)
    
    
    
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
var els = document.getElementsByName('metodo1');
    for (var i=0;i<els.length;i++){
        
        if ( els[i].checked ) {
        choices.push(els[i].value);
        
        
        storage.setItem('opt_metodo1',els[i].value )

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
                
        window.location.href = 'C:\Users\Raphael-note\Documents\Final JS\novo\pag0.html'

        window.location.href ='http://google.com'

    }
} 


*/


