function validateFname()
{
	var fname=document.regform.fname;
	var err=document.getElementById("errFname");
	
	if(fname.value=="")
	{
		if(!(err.style.display=="block"))
			err.style.display="block";
		return false;
	}
	else
	{
		if(!(err.style.display=="none"))
			err.style.display="none";
	}
	return true;
}


function validateEmail()
{
	var email=document.regform.email;
	var errEmail=document.getElementById("errorEmail");
	var errValidEmail=document.getElementById("errValidEmail");
	var regExp=/^[a-zA-Z0-9\.\_]+\@[a-zA-Z0-9\-\_\.]+[a-zA-Z]{2,4}$/;
	
	if(email.value=="")
	{
		if(!(errEmail.style.display=="block"))
			errEmail.style.display="block";
		return false;
	}
	else
	{
		if(!(errEmail.style.display=="none"))
			errEmail.style.display="none";
			
		if(!regExp.test(email.value))
		{
			if(!(errValidEmail.style.display=="block"))
				errValidEmail.style.display="block";
			return false;
		}
		else
		{
			if(!(errValidEmail.style.display=="none"))
				errValidEmail.style.display="none";
		}
	}
	return true;
}


function validateGender()
{
	var gender=document.regform.gender;
	var errGender=document.getElementById("errGender");
	
	if((gender.value=="male" || gender.value=="female"))
	{
		if(!(errGender.style.display=="block"))
			errGender.style.display="block";
		return false;
	}
	else
	{
		if(!(errGender.style.display=="none"))
			errGender.style.display="none";
	}
	return true;
}


function validatePassword()
{
	var pwd=document.regform.pwd;
	var errPwd=document.getElementById("errPwd");
	var errValidPwd=document.getElementById("errValidPwd");
	var regExp=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	if(pwd.value=="")
	{
		if(!(errPwd.style.display=="block"))
			errPwd.style.display="block";
		return false;
	}
	else
	{
		if(!(errPwd.style.display=="none"))
			errPwd.style.display="none";
			
		if(!regExp.test(pwd.value))
		{
			if(!(errValidPwd.style.display=="block"))
				errValidPwd.style.display="block";
			return false;
		}
		else
		{
			if(!(errValidPwd.style.display=="none"))
				errValidPwd.style.display="none";
		}
	}
	return true;
}

function validateRePassword()
{
	var pwd=document.regform.pwd;
	var repwd=document.regform.repwd;
	var errRePwd=document.getElementById("errRePwd");
	
	if(!(pwd.value==repwd.value))
	{
		if(!(errRePwd.style.display=="block"))
			errRePwd.style.display="block";
		return false;
	}
	else
	{
		if(!(errRePwd.style.display=="none"))
			errRePwd.style.display="none";
	}
	return true;
}

function validateForm()
{
	var f1 = document.getElementById('u1').value;
	var f2 = document.getElementById('u2').value;
	var f3 = document.getElementById('u3').value;
	var f4 = document.getElementById('u4').value;
	var f5 = document.getElementById('u5').value;

	localStorage.setItem("u1", f1);
	localStorage.setItem("u2", f2);
	localStorage.setItem("u3", f3);
	localStorage.setItem("u4", f4);
	localStorage.setItem("u5", f5);
	var fname=validateFname();
	var lname=validateLname();
	var email=validateEmail();
	var gender=validateGender();
		
	if(!(fname && lname && email))
	{
		return false;
	}
	else
	{
		open("welcome.html");
	}
	

}




