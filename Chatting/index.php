<?php
//Set your username here
if(!isset($_COOKIE['user']))
{
  setcookie("user", "username", time()+160);
}


?>
<html>
		<head>
				<title>SIMPLE CHAT</title>
				<script type="text/javascript">												
						var xmlhttp;
						function setXMLHttpRequest()
						{						   							
							if (window.XMLHttpRequest)
  							{// code for IE7+, Firefox, Chrome, Opera, Safari
  								xmlhttp=new XMLHttpRequest();
  							}else{// code for IE6, IE5
	  							xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  							}														
						}																		
						
						function addChat(chatStatus)
						{																				
							var chatBox = document.getElementById('chatBox').value;	
							setXMLHttpRequest();
														
							xmlhttp.onreadystatechange=function()
  							{
  								if (xmlhttp.readyState==4 && xmlhttp.status==200)
    							{
    								document.getElementById("chatText").value=xmlhttp.responseText;
    							}
  							}
  							
  							  if(chatStatus=="chatMessage")
  							  {  							  
  							  //You can add username as cookie (look NOTE above)   
  							  xmlhttp.open("GET","chat.php?"+chatStatus+"="+chatBox,true);
							  }
							  if(chatStatus=="")
							  {
							  xmlhttp.open("GET","chat.php",true);
							  }
							  xmlhttp.send();
							
						}												 
						setInterval(function(){addChat("")},3000);
				</script>				
		</head>
		<body>
				<p><h1>Simple CHAT</h1></p>
				<p><textarea rows="30" cols="50" id="chatText"></textarea></p>
				<p><input type="text" id="chatBox" style="width:400;"/></p>
				<p><input type="button" id="submitButton" value="submit" onClick="addChat('chatMessage');"/></p>
		</body>
</html>