console.log("welcome to food website");
console.log("hello");
var arr_image=['slider1','slider2','slider3','slider4','slider5'];
var num=0;

function next_image()
{
	num++;
	if(num>=arr_image.length)
	{
		num=0;
		document.getElementById("slider_photos").innerHTML=`<img src="./Photos/${arr_image[num]}.jpg">`;		
	}
	else
	{
		document.getElementById("slider_photos").innerHTML=`<img src="./Photos/${arr_image[num]}.jpg">`;	
	}
}

function prev_image()
{
	num--;
	if(num<0)
	{
		num=arr_image.length-1;
		document.getElementById("slider_photos").innerHTML=`<img src="./Photos/${arr_image[num]}.jpg">`;		
	}
	else
	{
		document.getElementById("slider_photos").innerHTML=`<img src="./Photos/${arr_image[num]}.jpg">`;	
	}
}
setInterval("next_image()",3000);

window.setTimeout(function loading()
{
	document.getElementById("loader").style="display:none";
},2000)


 