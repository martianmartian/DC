
var bank=new Firebase('https://pracenglish.firebaseio.com/selected')


$(document).ready(function(){
	$("#loadBank").click(function(){
		bank.on('value', function (snapshot) {
		  var bnk = snapshot.val();
		  //console.log(bnk)
		  load_all(bnk)

	  	})
	})
})


var load_all=function(bnk){
	
	  for (var i in bnk){
  		console.log("i is "+i);
	  	switch(i) {
	  		case "idioms":
                load_words(bnk[i]);
	  			break;
	  		case "phrases":
                load_words(bnk[i]);
	  			break;
	  		case "words":
                load_words(bnk[i]);
	  			break;
	  		default:
	  			alert("no match")
	  	}
  	}

}


var load_words=function(bnk){
    var table = '<table>';

    for(var j in bnk){
        table += '<tr>'+
        '<th>'+bnk[j]+'</th>'+
        '<th>'+"Phrases"+'</th>'+
        '<th>'+"Idioms"+'</th>'+
        '</tr>';
    }
    table += '</table>';

    document.getElementById('tableDiv').innerHTML = table;

};





/*

var bank_idioms=new Firebase('https://pracenglish.firebaseio.com/selected/idioms')


$(document).ready(function(){
	bank_idioms.on('value', function (snapshot) {
	  var bnk_idm = snapshot.val();
	  ////// value of snapshot is still an object, bnk_idm
	  //////so use a loop to get the values of the object
	  for (var i in bnk_idm){
	  		//console.log(bnk_idm[i]);
	  		
	  }
	  //////console.log(bnk_idm)
	  //////console.log(snapshot.val());
	});
})


*/
