// ==UserScript== 
// @name UNC Charlotte 49er Autologin 
// @namespace http://userscripts.org
// @description Autologin (with random email) to the UNC Charlotte 49er free wifi around campus.
// @include https://bsciti-pro.uncc.edu/login.pl*
// @include https://bssouth-pro.uncc.edu/login.pl*
// @include https://bstech1.uncc.edu/login.pl*
// @include https://bs*.uncc.edu/*
// @include htps://bswest-pro.uncc.edu/*
// ==/UserScript==

/*
 * Generate a new fake email every time for the login
 */
function generateFakeEmail()
{
	/*char lowerChar='abcdefghijklmnopqrstuvwxyz'.charAt(code);
	char upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(code);
	var ascii;
	var email;
	var lengthUsername = Math.floor((Math.random()*30)+1);
	for(var i = 0; i<lengthUsername; i++)	//Loop for however many characters the username part of the email is
	{
		ascii = Math.floor((Math.random()*25)+0);
		if(Math.floor(Math.random())>0)		//Uppercase
		{
			email += upperChar(ascii);
		}else{								//Lowercase
			email += lowerChar(ascii);
		}
	}
	
	
	email += '@';
	
	var randomEmailProvider = Math.floor((Math.random()*8)+1);
	switch(randomEmailProvider)
	{
		case 1:
			email += "gmail.com";
			break;
		case 2:
			email += "tormail.org";
			break;
		case 3:
			email += "outlook.com";
			break;
		case 4:
			email += "mail.ru";
			break;
		case 5:
			email += "mail.com";
			break;
		case 6:
			email += "fastmail.fm";
			break;
		case 7:
			email += "everyone.net";
			break;
		case 8:
			email += "atmail.com";
			break;
	}
	console.log(email);
	*/
	var email = "j@j.com";
	return email;
}

/*
 * The actual autologin which sets the required fields to their appropriate values and then submits ther form.
 */
function autologin()
{
	document.getElementsByName("bs_email").item(0).value = generateFakeEmail();
	if(document.getElementsByName("require_terms_g").length > 0)
	{
		document.getElementsByName("require_terms_g").item(0).checked = true;
	}
	document.getElementsByName("bluesocket_g").item(0).submit();
}

/*
 * If the user is already logged in stop spamming the login website
 */
function detectAlreadyLoggedIn()
{
	var allH6 = document.evaluate(".//h6",document.body,null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for(var i = 0; i < allH6.snapshotLength; i++)
	{
		thisH6 = allH6.snapshotItem(i);
		if(thisH6.innerText.indexOf("already logged in") > -1)
		{
			return true;
		}
	}
	return false;
}

/*
 * Main, which holds the complex logic behind it all
 */
function main()
{
	if(detectAlreadyLoggedIn())
	{
		console.log("You are already logged in!");
	}else
	{
		autologin();
		console.log("You have logged in!");
	}
	//exit script
	
}

//Execute Main
main()
