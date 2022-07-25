function externalAlert()
	{
		alert("external Alert");
	}
function externalConfirm()
	{
		if(confirm("external Confirm"))
			{
				alert("yess");
			}
		else
			{
				alert("Noooo");
			}
	}
function externalPrompt()
	{
		var name = prompt("Enter external Prompt value :");
		alert("hii" + name);
		document.write("Jevin");
		console.log("text");
		console.error("text");
	}