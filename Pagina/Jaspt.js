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
  		b.src="imgs/prin"+d+".jpg";

  	}
  	else{
  		b.src="imgs/prin.jpg";
  	}	

  	var c =randomBetween(0,6);
  	var z =document.getElementsByClassName("randomimg")[0];

  	if(c!==0)
  	{
  		z.src="imgs/prof"+c+".jpeg"	;
  	}
  	else
  	{
  		z.src="imgs/prof.jpeg";
  	}

  	if(c===1)
  	{
  		let border = document.getElementsByClassName("random");
  		let head = document.getElementsByClassName("randomh");
  		let text = document.getElementsByClassName("randomtxt")[0];

  		let numberR = randomBetween(0,4);
  		for(i=0;i<border.length;i++)
  		{
  			border[i].style.borderColor="black";
  			head[i].style.color="purple";
  			head[i].innerHTML="?";
  		}
  		head[0].innerHTML ="Awesome!";

  		text.style.color="black";
  		text.style.fontFamily="cursive";

  		head[numberR+1].innerHTML="<i class=\"fa fa-cog\" aria-hidden=\"true\">"+" Don't ask why";
  	}
  	else if (c===2)
  	{ 
  		let border = document.getElementsByClassName("random");
  		let head = document.getElementsByClassName("randomh");
  		let text = document.getElementsByClassName("randomtxt")[0];
  		let numberR = randomBetween(0,4);
  		for(i=0;i<border.length;i++)
  		{
  			border[i].style.borderColor="white";
  			head[i].style.color="brown";
  			head[i].innerHTML="?";
  		}
  		head[0].innerHTML ="Great!";

  		head[numberR+1].innerHTML="<i class=\"fa fa-cog\" aria-hidden=\"true\">"+" But it works!";
  		text.style.color="white";
  		text.style.fontWeight="bold";
  	}
  	else if(c===3)
  	{
		let border = document.getElementsByClassName("random");
		let head = document.getElementsByClassName("randomh");
		let text = document.getElementsByClassName("randomtxt")[0];
		let numberR = randomBetween(0,4);
  		for(i=0;i<border.length;i++)
  		{
  			border[i].style.borderColor="red";
  			head[i].style.color="black";
  			head[i].innerHTML="?";
  		}
		head[0].innerHTML ="Enjoy!";
		head[numberR+1].innerHTML="<i class=\"fa fa-gear\" aria-hidden=\"true\">"+" It just works";
		text.style.fontWeight="lighter";
  	}
  	else if(c===4)
  	{
  		let border = document.getElementsByClassName("random");
  		let head = document.getElementsByClassName("randomh");
  		let text = document.getElementsByClassName("randomtxt")[0];
  		let numberR = randomBetween(0,4);
  		for(i=0;i<border.length;i++)
  		{
  			border[i].style.borderColor="lightcoral";
  			head[i].style.color="blue";
  			head[i].innerHTML="?";
  		}
  		head[0].innerHTML ="Javascript works!";
  		head[numberR+1].innerHTML="<i class=\"fa fa-flag\" aria-hidden=\"true\">"+" This is my random page";
  		text.style.fontFamily="fantasy";
  	}
  	else if(c===5)
  	{
  		let border = document.getElementsByClassName("random");
  		let head = document.getElementsByClassName("randomh");
  		let text = document.getElementsByClassName("randomtxt")[0];
  		let numberR = randomBetween(0,4);
  		for(i=0;i<border.length;i++)
  		{
  			border[i].style.borderColor="blue";
  			head[i].style.color="lightcoral";
  			head[i].innerHTML="?";
  		}
  		head[0].innerHTML ="WebDev!";
  		head[numberR+1].innerHTML="<i class=\"fa fa-heartbeat\" aria-hidden=\"true\">"+" Love JS";
  		text.style.color="#800200";
  	}
  	else{
  		let border = document.getElementsByClassName("random");
  		let head = document.getElementsByClassName("randomh");
  		let text = document.getElementsByClassName("randomtxt")[0];
  		let numberR = randomBetween(0,4);
  		for(i=0;i<border.length;i++)
  		{
  			border[i].style.borderColor="green";
  			head[i].style.color="black";
  			head[i].innerHTML="?";
  		}
  		head[0].innerHTML ="Thanks for clicking!";
  		head[numberR+1].innerHTML="<i class=\"fa fa-gears\" aria-hidden=\"true\">"+" Javasrcipt is weird";
  		text.style.fontFamily="monospace";
  	}

  }