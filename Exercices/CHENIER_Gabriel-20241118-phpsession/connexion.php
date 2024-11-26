<?php
session_start();

// Données de connexion hardcodées
$utilisateur_correct = "admin";
$mot_de_passe_correct = "admin";

// Gestion de la connexion
$message = "";
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['action']) && $_POST['action'] === "connexion") {
    $nom_utilisateur = $_POST['nom_utilisateur'] ?? '';
    $mot_de_passe = $_POST['mot_de_passe'] ?? '';

    if ($nom_utilisateur === $utilisateur_correct && $mot_de_passe === $mot_de_passe_correct) {
        $_SESSION['nom_utilisateur'] = $nom_utilisateur;

        // Initialisation des données de profil si non existantes
        if (!isset($_SESSION['profil'])) {
            $_SESSION['profil'] = [
                'nom' => '',
                'age' => '',
                'sexe' => '',
                'date_naissance' => '',
                'ville' => '',
                'profession' => '',
            ];
        }
        $message = "Connexion réussie !";
    } else {
        $message = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Gestion de la mise à jour du profil
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['action']) && $_POST['action'] === "profil") {
    $_SESSION['profil']['nom'] = $_POST['nom'] ?? '';
    $_SESSION['profil']['age'] = $_POST['age'] ?? '';
    $_SESSION['profil']['sexe'] = $_POST['sexe'] ?? '';
    $_SESSION['profil']['date_naissance'] = $_POST['date_naissance'] ?? '';
    $_SESSION['profil']['ville'] = $_POST['ville'] ?? '';
    $_SESSION['profil']['profession'] = $_POST['profession'] ?? '';

    $message = "Profil mis à jour avec succès.";
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
    <title>Connexion et Profil</title>
</head>
<body>
    <?php if (!isset($_SESSION['nom_utilisateur'])): ?>
        <!-- Formulaire de connexion -->
        <h1>Connexion</h1>
        <form method="post" action="connexion.php">
            <input type="hidden" name="action" value="connexion">
            <label for="nom_utilisateur">Nom d'utilisateur :</label>
            <input type="text" name="nom_utilisateur" id="nom_utilisateur" required>
            <br>
            <label for="mot_de_passe">Mot de passe :</label>
            <input type="password" name="mot_de_passe" id="mot_de_passe" required>
            <br>
            <button type="submit">Se connecter</button>
        </form>
        <p style="color: red;"><?= htmlspecialchars($message) ?></p>
    <?php else: ?>
        <!-- Page de profil -->
        <h1>Profil de <?= htmlspecialchars($_SESSION['nom_utilisateur']) ?></h1>
        <p style="color: green;"><?= htmlspecialchars($message) ?></p>
        <form method="post" action="connexion.php">
            <input type="hidden" name="action" value="profil">
            <label for="nom">Nom :</label>
            <input type="text" name="nom" id="nom" value="<?= htmlspecialchars($_SESSION['profil']['nom']) ?>" required>
            <br>
            <label for="age">Âge :</label>
            <input type="number" name="age" id="age" value="<?= htmlspecialchars($_SESSION['profil']['age']) ?>" required>
            <br>
            <label for="sexe">Sexe :</label>
            <select name="sexe" id="sexe" required>
                <option value="" <?= $_SESSION['profil']['sexe'] === '' ? 'selected' : '' ?>>Sélectionnez</option>
                <option value="Homme" <?= $_SESSION['profil']['sexe'] === 'Homme' ? 'selected' : '' ?>>Homme</option>
                <option value="Femme" <?= $_SESSION['profil']['sexe'] === 'Femme' ? 'selected' : '' ?>>Femme</option>
                <option value="Autre" <?= $_SESSION['profil']['sexe'] === 'Autre' ? 'selected' : '' ?>>Autre</option>
            </select>
            <br>
            <label for="date_naissance">Date de naissance :</label>
            <input type="date" name="date_naissance" id="date_naissance" value="<?= htmlspecialchars($_SESSION['profil']['date_naissance']) ?>" required>
            <br>
            <label for="ville">Ville :</label>
            <input type="text" name="ville" id="ville" value="<?= htmlspecialchars($_SESSION['profil']['ville']) ?>" required>
            <br>
            <label for="profession">Profession :</label>
            <input type="text" name="profession" id="profession" value="<?= htmlspecialchars($_SESSION['profil']['profession']) ?>" required>
            <br>
            <button type="submit">Enregistrer</button>
        </form>

        <p>
            <a href="connexion.php?deconnexion=true">Déconnexion</a>
        </p>
    <?php endif; ?>
</body>
</html>
