var alphaExp=/^[a-zA-Z\s]+$/;
var numExp=/^[0-9]+$/;
var passExp=/^[a-zA-Z]\w{3,14}$/;
const emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	
function validateData()
{

	//for name
	name=document.getElementById("un").value;
	if(name=="")
	{
		document.getElementById("nameerror").style="color:red";
		//document.getElementsByClassName("registration_form_input")[0].style="box-shadow:0px 0px 15px #ff0000a3";
		document.getElementById("nameerror").innerHTML="name field is blank";
		document.getElementById("un").focus();
		return false;
	}
	else if(!name.match(alphaExp))
	{
		document.getElementById("nameerror").style="color:red";
		//document.getElementsByClassName("registration_form_input")[0].style="box-shadow:0px 0px 15px #ff0000a3";
		document.getElementById("nameerror").innerHTML="Your name should be character only";
		document.getElementById("un").focus();
		return false;	
	}
	else 
	{
		document.getElementById("nameerror").innerHTML=" ";
	}


	//for email
	var email=document.getElementById("email").value;
	if(email=="")
	{
		document.getElementById("error").style="color:red";
		document.getElementById("error").innerHTML="please select email";
		document.getElementById("email").focus();
		return false;
	}
	else if(!email.match(emailExp))
	{
		document.getElementById("error").innerHTML="Your email should be valid";
		document.getElementById("error").style="color:red";
		document.getElementById("email").focus();
		return false;
	}
	else
	{
		document.getElementById("error").innerHTML="";
	}

	
	//for mobile
	mobile_no=document.forms['myform']['mobile'].value;
	if(mobile_no=="")
	{
		alert("please select mobile no.");
		document.forms['myform']['mobile'].focus();
		return false;
	}
	else if(!mobile_no.match(numExp))
	{
		alert("Your mobile no. should be numeric");
		document.forms['myform']['mobile'].focus();
		return false;
	}
	else if(mobile_no.length<10 || mobile_no.length>12 )
	{
		alert("your mobile no. should be of length 10 to 12");
		document.forms['myform']['mobile'].focus();
		return false;
	}



	//for password
	var password=document.getElementById("pass").value;
	if(password=="")
	{
		document.getElementById("passerror").style="color:red";
		document.getElementById("passerror").innerHTML="please enter password";
		document.getElementById("pass").focus();
		return false;
	}
	else if(!password.match(passExp))
	{
		document.getElementById("passerror").style="color:red";
		document.getElementById("passerror").innerHTML="Your password should be first letter and 4 to 15 characters only";
		document.getElementById("pass").focus();
		return false;
	}
	else
	{
		document.getElementById("passerror").innerHTML="";
	}
	alert("You are registered");
}


