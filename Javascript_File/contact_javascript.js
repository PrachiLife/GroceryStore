var alphaExp=/^[a-zA-Z\s]+$/;
var emailExp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var messageExp=/^[ .a-zA-Z0-9:-]{1,150}$/;
function validateData()
{
	//for Name
	name=document.getElementById("name").value;
	if(name=="")
	{
		alert("Name field can't be empty");
		document.getElementById("name").focus();
		return false;
	}
	if(!(name.match(alphaExp)))
	{
		alert("Name field can't have numbers");
		document.getElementById("name").focus();
		return false;
	}

	//for Email
	email=document.getElementById("email").value;
	if(email=="")
	{
		alert("Email field can't be empty");
		document.getElementById("email").focus();
		return false;	
	}
	if(!(email.match(emailExp)))
	{
		alert("Email Field should be valid");
		document.getElementById("email").focus();
		return false;
	}

	//for subject
	subject=document.getElementById("subject").value;
	if(subject=="")
	{
		alert("Subject field can't be empty");
		document.getElementById("subject").focus();
		return false;
	}

	//for Text Message
	text_message=document.getElementById("text_message").value;
	if(text_message=="")
	{
		alert("Text Message field can't be empty");
		document.getElementById("text_message").focus();
		return false;	
	}
	else if(!(text_message.match(messageExp)))
	{
		alert("Text Message field should be valid");
		document.getElementById("text_message").focus();
		return false;		
	}
}