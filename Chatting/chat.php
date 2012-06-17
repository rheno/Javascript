
//**************************//
//Created by : Rheno Budiasa
//**************************//

<?php

//Log chat text file
$myFile = "chat.log";

//open then append chat message to text file	
$openAppendFile = fopen($myFile, 'a');

//open then read chat message on text file	
$openFile = fopen($myFile, 'r');

//check chat message whether is set or not 
if(isset($_GET['chatMessage']))
{	    
	fwrite($openAppendFile,$_GET['chatMessage']."\n");    
}

//Read line all chat message from text file 
while(!feof($openFile))
{
    $theData = fgets($openFile);
    echo $theData."\n";
}

//Close text file
fclose($openAppendFile); 
fclose($openFile);

?>


