<?php
session_start();

// Vérification de la session
if (!isset($_SESSION['nom_utilisateur'])) {
    header("Location: connexion.php");
    exit;
}

// Déconnexion
if (isset($_GET['deconnexion'])) {
    session_destroy();
    header("Location: connexion.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
    <h1>Bienvenue, <?= htmlspecialchars($_SESSION['nom_utilisateur']) ?> !</h1>
    <p>Ceci est votre page d'accueil.</p>
    <form method="get" action="index.php">
        <button type="submit" name="deconnexion">Déconnexion</button>
    </form>
</body>
</html>
