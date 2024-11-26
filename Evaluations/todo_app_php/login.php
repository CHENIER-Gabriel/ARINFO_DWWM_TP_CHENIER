<?php
session_start();
if (isset($_POST['login'])) {
    $_SESSION['username'] = htmlspecialchars($_POST['username']);
    header('Location: index.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="styles/style-login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Michroma&display=swap" rel="stylesheet">
</head>
<body>
    <section class="fond-animation">
        <div class="cercle" id="cercle1"></div>
    </section>
    <h1>Session</h1>
    <h4>Bonjour, qui êtes vous ?</h4>
    <form method="POST" action="">
        <input type="text" name="username" placeholder="Nom d'utilisateur" required>
        <button type="submit" name="login">Connexion</button>
    </form>
    <footer>
        <div class="footies"></div>
    </footer>
</body>
</html>