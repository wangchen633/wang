var mos = document.querySelectorAll('ul');
var most = document.querySelector('.texts').querySelectorAll('a');
for(i=1;i<mos.length;i++){
	
	(function(p){
		var but = mos[i].querySelectorAll('button');
		var lik = mos[i].querySelectorAll('input');
		var tip = mos[i].querySelectorAll('li');
		var aoo = document.getElementsByName('sd');
		but[0].onclick = function(){
		if(tip[4].innerHTML<1){
			tip[4].innerText = 0
		}
		else{
			tip[4].innerText = tip[4].innerText - parseInt(tip[2].innerText);
		}
		if(lik[0].checked==true){
			if(lik[1].value>0){
				lik[1].value = lik[1].value - 1;
				most[0].innerText = most[0].innerText - 1;
				most[1].innerText = most[1].innerText - tip[2].innerText;
			}
		}
		
		
	}
	but[1].onclick = function(){
		lik[1].value = parseInt(lik[1].value) + 1;
		tip[4].innerText = parseInt(tip[4].innerText) + parseInt(tip[2].innerText);
		if(lik[0].checked==true){
			most[0].innerText =parseInt( most[0].innerText) + 1;
			most[1].innerText = parseInt(most[1].innerText) + parseInt(tip[2].innerText);
		}
		
	}
	tip[5].onclick = function(){
		var rss = confirm('确认是否删除')
		for(i=0;i<aoo.length;i++){
		if(aoo[i].checked==true&&rss==true){
			mos[p].style.display = 'none';
		}
		}
	}
	lik[0].onclick = function(){
		if(lik[0].checked==true){
			most[0].innerText = parseInt(most[0].innerHTML) + parseInt(lik[1].value);
			most[1].innerText = parseInt(most[1].innerText) + parseInt(tip[4].innerText);
		}
		else{
			most[0].innerText = parseInt(most[0].innerHTML) - parseInt(lik[1].value);
			most[1].innerText = parseInt(most[1].innerText) - parseInt(tip[4].innerText);
		}
	}

	
	})(i)
	
}	
var opos = document. querySelector('input[name = opo]');
	opos.onclick = function(){
if(opos.checked == true){
most[0].innerText=0;
most[1]. innerText = 0;
for(i=1;i<mos.length;i++){
		
var lik = mos[i].querySelectorAll('input');

var tip = mos[i].querySelectorAll('li');

var aa = mos[i].querySelector('input');
aa.checked = true;
most[0].innerText = parseInt(most[0]. innerText) + parseInt(lik[1].value);
most[1].innerText = parseInt(most[1]. innerText) + parseInt(tip[4].innerText);
}
}else{
for(i=1;i<mos.length;i++){
var aa =mos[i].querySelector('input');
aa.checked = false; 
}
most[0].innerText = 0;
most[1].innerText = 0;
}
}
function text(){
	var rss = confirm('确认是否删除')
	var take = document.getElementsByName('sd');
	for(i=0;i<take.length;i++){
		var mos = document.querySelectorAll('ul');
		if(take[i].checked==true&&rss==true){
			mos[i+1].style.display = 'none';
			most[0].innerText = 0;
			most[1].innerText = 0;
		}
	}
	}