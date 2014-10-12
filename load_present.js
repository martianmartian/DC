
var bank=new Firebase('https://pracenglish.firebaseio.com/selected')


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
})


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
}


var load_table=function(loadAll){
    var table = '<table>';

    for(var j in loadAll[0]){
        table += '<tr>'+
        '<th>'+loadAll[0][j]+'</th>'+
        '<th>'+loadAll[1][j]+'</th>'+
        '<th>'+loadAll[2][j]+'</th>'+
        '</tr>';
    }
    table += '</table>';
    document.getElementById('tableDiv').innerHTML = table;

};





