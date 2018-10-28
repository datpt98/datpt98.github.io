<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Contact form</title>
</head>
<body>
	<main>
		<form action="contactform.php" method="post">
			<p>
				<label>Your Name (required)</label>
				<input type="text" name="name" required>
			</p>
			<p>
				<label>Your Email (required)</label>
				<input type="text" name="email" required>
			</p>
			<p>
				<label>Subject</label>
				<input type="text" name="subject">
			</p>
			<p>
				<label>Message</label>
				<textarea name="message" rows="5"></textarea>
			</p>				
			<p>
				<button type="submit" name="submit">Send</button>
			</p>
		</form>
	</main>
</body>
</html>