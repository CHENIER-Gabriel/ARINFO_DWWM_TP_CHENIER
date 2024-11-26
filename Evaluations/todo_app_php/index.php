<?php
session_start();
// header("Location: ".$_SERVER['PHP_SELF']); 
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

// Initialisation du tableau des tâches
if (!isset($_SESSION['tasks'])) {
    $_SESSION['tasks'] = [];
}

// Ajouter une tâche
if (isset($_POST['add_task'])) {
    $task = [
        'id' => uniqid(), // Identifiant unique
        'name' => strtoupper(str_replace(' ', '-', htmlspecialchars($_POST['task_name']))),
        'desc' => htmlspecialchars($_POST['task_desc']),
        'status' => 'Non terminée',
        'date' => date('d/m/Y') // Date actuelle
    ];
    $_SESSION['tasks'][] = $task;
}

// Marquer une tâche comme terminée
if (isset($_POST['complete_task'])) {
    foreach ($_SESSION['tasks'] as &$task) {
        if ($task['id'] == $_POST['task_id']) {
            $task['status'] = 'Terminée';
            break;
        }
    }
    unset($task); // Réinitialise la référence
}

// Supprimer une tâche
if (isset($_POST['delete_task'])) {
    $_SESSION['tasks'] = array_filter($_SESSION['tasks'], function($task) {
        return $task['id'] !== $_POST['task_id'];
    });
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="styles/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Michroma&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <img src="assets/PHP-logo.svg.png" alt="PHPLogo">
        <a href="logout.php">Déconnexion</a>
    </header>
    <main>
    <h1>To Do List</h1>
    <h2>Bienvenue, <?= htmlspecialchars($_SESSION['username']); ?></h2>
    <form method="POST" action="">
        <input type="text" name="task_name" placeholder="Nom de la tâche" required>
        <input type="text" name="task_desc" placeholder="Description de la tâche">
        <button type="submit" name="add_task">Ajouter Tâche</button>
    </form>
    <table>
        <tr class="legend">
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Statut</th>
            <th>Date</th>
            <th>Actions</th>
        </tr>
        <?php foreach ($_SESSION['tasks'] as $task): ?>
            <tr class="<?= $task['status'] == 'terminée' ? 'completed' : ''; ?>">
                <td><?= $task['id']; ?></td>
                <td><?= $task['name']; ?></td>
                <td><?= $task['desc']; ?></td>
                <td><?= $task['status']; ?></td>
                <td><?= $task['date']; ?></td>
                <td>
                    <form method="POST" action="">
                        <input type="hidden" name="task_id" value="<?= $task['id']; ?>">
                        <?php if ($task['status'] !== 'terminée'): ?>
                            <button type="submit" name="complete_task" class="terminer">Terminer</button>
                        <?php endif; ?>
                        <button type="submit" name="delete_task" class="supprimer">Supprimer</button>
                    </form>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
    </main>
</body>
</html>

