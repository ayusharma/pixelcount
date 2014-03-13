<?php
if (isset($_POST['email']))
{
$id = $_POST['email'];
$to = $id;
$subject = 'Pixelcount Creative Labs';
$message = "

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<title>Untitled Document</title>
</head>
<img src='www.pixelcount.net/sqlmail.jpg' style='display:block; margin:auto;max-width:100%'/>
<table width='100%' border='0' cellspacing='0' cellpadding='0' style='font-family:Georgia,'Times New Roman', Times,serif;margin:auto;'>
  <tr>
    <td style='background-color:#121212;
	color:#fff;
	font-size:14px;
	text-align:center;
	padding:10px;
	background-color:#121212;'><strong>Welcome To <a style='font-size:16px;
	color:#f00;'>Pixelcount.net</a></strong></td>
  </tr>
  <tr>
    <td style='color:#fff;
	font-size:14px;
	padding:10px;
	background-color:#003466;'><br /> We are the <strong> Jaipur, India based design company</strong> specialized in delivering a great and reliable solutions which suit you best.</td>
  </tr>
  <tr>
    <td style='color:#fff;
	font-size:14px;
	padding:10px;
	background-color:#003466;'><em>Believe the word define us a lot, we believe in carving of every pixel to make your exposure creative. With your identity, we expand your branding to a wide range of reach.</em>
</td>
  </tr>
  <tr>
    <td style='color:#f00;
	font-size:14px;
	padding:10px;
	font-weight:bold;
	background-color:#003466;'><img src='www.pixelcount.net/do.png' width='50' height='50'/><strong><a style='font-size:18px;
	color:#f00;'>W</a>hat We Do:</strong></td>
  </tr>
  <tr>
    <td style='color:#fff;
	font-size:14px;
	padding:10px;
	background-color:#003466;'>We Provide creative on demand solutions on your request by applying our full potential.<br/>
<ul>
<li>Create Maintain & Support Dazzling Web Interfaces</li><br/>
<li>Graphics & Multimedia</li><br/>
<li>HD & Secure Live Webcasts</li><br/>
</ul>
</td>
  </tr>
  <tr>
    <td style='color:#f00;
	font-size:14px;
	padding:10px;
	font-weight:bold;
	background-color:#003466;'><img src='www.pixelcount.net/love.png' width='50' height='50' /><strong><a style='font-size:18px;
	color:#f00;'>W</a>hat We Love:</strong></td>
  </tr>
  <tr>
    <td style='color:#fff;
	font-size:14px;
	padding:10px;
	background-color:#003466;'>We love what we do. We focus to design user friendly environment by our own visualization.<br/>
<ul>
<li>Smooth & Dynamic Digital Experience</li><br/>
<li>HTML,CSS,Java Scripts,PHP, My-Sql</li><br/>
<li>Logo Brochure & Graphics</li><br/>
<li>Theme Design</li><br/>
</ul></td>
  </tr>
  <tr>
    <td style='color:#f00;
	font-size:14px;
	padding:10px;
	font-weight:bold;
	background-color:#003466;'><img src='www.pixelcount.net/are.png' width='50' height='50'/><strong><a style='font-size:18px;
	color:#f00;'>W</a>hat We Are:</strong></td>
  </tr>
  <tr>
    <td style='color:#fff;
	font-size:14px;
	padding:10px;
	background-color:#003466;'>We listen to your query and give what is the best solution to build the best environment to meet your requirements. You can find us here:</td>
  </tr>
  <tr>
    <td style='text-align:center;
	background-color:#121212;
	padding:10px;
	color:#fff;'>Feel Free to contact Us.<br/>
<strong><a style='font-size:16px;
	color:#f00;'>Pixelcount.net <br/>
(An endeavor of Pixelcount Creative Labs, Jaipur)<br/>
contact@pixelcount.net<br/></a></strong>
+91-9008278254<br/>
+91-8946920261</td>
  </tr>
  
</table>

<body>
</body>
</html>

";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= 'From: <welcome@pixelcount.net>' . "\r\n";


mail($id,$subject,$message,$headers);
	
}
?>
</html>