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