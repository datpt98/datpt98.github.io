<?php 
	if(isset($_POST['submit'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$mailTo = "odaph002@edu.xamk.fi";
		$header = "From: ".$email;
		$txt = "You have received an e-mail from ".$name.".\n\n".$message;

		mail($mailTo, $subject, $txt, $header);
		header("Location: index.php?mailsend");
	}
