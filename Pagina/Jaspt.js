function onClickRandomBtn()
{
	var c = randomBetween(0,7);
	if(c===1)
	{
		let a = document.getElementsByClassName("randombt")[0];
		a.style.borderColor='blue';
		a.style.backgroundImage='none';
		a.style.backgroundColor='black';
		a.style.color='lightblue';
	}
	else if (c===2)
	{ 
		let a = document.getElementsByClassName("randomimg")[0];
		a.src="imgs/fun1.jpg";
	}
	else if(c===3)
	{
		let a = document.getElementsByClassName("randomimg")[0];
		a.src="imgs/fun1.png";	
	}
	else if(c===4)
	{
		let a = document.getElementsByClassName("randomtxt")[0];
		a.style.fontFamily='fantasy';
	}
	else if(c===5)
	{
		let a = document.getElementsByClassName("randomh")[0];
		console.log('a');
		a.style.fontFamily='monospace';
	}
	else if(c==6)
	{
		let a = document.getElementsByClassName("random")[0];	
		a.style.borderColor='black';
	}
	else{
		let a = document.getElementsByClassName("randombt")[0];
		a.style.borderColor='black';
		a.style.backgroundImage='none';
		a.style.backgroundColor='blue';
	}

}

  // Tomado de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function onClickRandomAll()
{
	
	var d =randomBetween(0,3);
	var b = document.getElementsByClassName("randomT")[0];
	if(d!==0)
	{
		b.src="imgs/prin"+d+".jpg"

	}
	else{
	b.src="imgs/prin.jpg"
	}	

	var c =randomBetween(0,6);
	var z =document.getElementsByClassName("randomimg")[0];
	if(c!==0)
	{
		z.src="imgs/prof"+c+".jpeg"	
	}
	else
	{
		z.src="imgs/prof.jpeg"		
	}

	if(c===1)
	{
		
	}
	else if (c===2)
	{ 
		
	}
	else if(c===3)
	{
		
	}
	else if(c===4)
	{
		
	}
	else if(c===5)
	{
		
	}
	else{
		
	}
	
}