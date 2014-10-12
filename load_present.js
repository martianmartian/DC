
var bank=new Firebase('https://pracenglish.firebaseio.com/selected');


$(document).ready(function(){
	$("#loadBank").click(function(){
		bank.on('value', function (snapshot) {
		  var bnk = snapshot.val();
		  //console.log(bnk)
		  var loadAll=load_all(bnk);
          //console.log(loadAll)
          load_table(loadAll)

	  	})

	})
});


var load_all=function(bnk){

    var loadAll=[[],[],[]];
    var a=0;
	for (var i in bnk){
  		//console.log("i is "+i);
        var b=0;
          for (var j in bnk[i]){
              loadAll[a][b]=bnk[i][j];
              b+=1;
          }
        //console.log("watch this");
        a+=1;
    }
    return loadAll;
};


var load_table=function(loadAll){
    var table = '<table>';

    table +='<tr>'+
        '<th>Words</th>'+
        '<th>Phrases</th>'+
        '<th>Idioms</th>'+
        '</tr>';
    
    for(var j in loadAll[0]){
        table += '<tr>'+
        '<td class="words">'+loadAll[0][j]+'</td>'+
        '<td class="phrases">'+loadAll[1][j]+'</td>'+
        '<td class="idioms">'+loadAll[2][j]+'</td>'+
        '</tr>';
    }

    table +=
        '<tr>'+'<td colspan="">'+
        '<input id="words" type="button" value="select">'+
        '</td>'+
        '<td colspan="">'+
        '<input id="phrases" type="button" value="select">'+
        '</td>'+
        '<td colspan="">'+
        '<input id="idioms" type="button" value="select">'+
        '</td>'+'</tr>';
    table += '</table>';
    document.getElementById('tableDiv').innerHTML = table;
    slct();
};


var slct=function(){

    $('.words').click(function(){
        console.log("???");
        $(this).addClass('selected wds');
    })

    $('.phrases').click(function(){
        $(this).addClass('selected phrs');
    })

    $('.idioms').click(function(){
        $(this).addClass('selected idm');
    })



};


