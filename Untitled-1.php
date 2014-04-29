<?php

$link=mysql_connect("localhost", "user1", "");
if (!$link)
  {
  die('Could not connect: ' . mysql_error());
  }
  $dbselect = mysql_select_db( "form", $link);
if(!$dbselect){
	echo'error';
	}

$value=$_POST['email'];
date_default_timezone_set('Asia/Calcutta');
$date=date('Y/m/d H:i:s');
$sql="INSERT INTO pix (`email`,`time`) VALUES('$value','$date')";
if(!mysql_query($sql))
{
	echo'Error, Please Enter Email Properly';
}
else{
	
echo'Gotcha!! We\'ll Inform You About Our Launch. Please Check Your Email.';	
}
mysql_close($link);


?>
