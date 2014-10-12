




var bank=new Firebase('https://pracenglish.firebaseio.com/selected')


$(document).ready(function(){
	$("#loadBank").click(function(){
		bank.on('value', function (snapshot) {
		  var bnk = snapshot.val();
		  console.log(bnk)
		  for (var i in bnk){
	  		console.log(i);
	  		console.log(bnk[i]);
	  		for (var j in bnk[i]){
	  			//console.log(j); //this is keys
	  			console.log(bnk[i][j]);
	  		}}})
	})
})





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
