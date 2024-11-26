	

	Présentation :


Mini-application de gestion simple.Vous pouvez ajouter, marquer comme terminées, supprimer des tâches, 
et gérer les sessions utilisateur pour personnaliser l'expérience.


	Installation


Prérequis :
-Serveur web (Apache, Nginx, etc.) ou local (XAMP, WAMP, etc.)
-PHP version 7.x ou supérieure
-Navigateur web moderne

1- Clonez ce projet ou téléchargez-le directement :
git clone https://github.com/votre-repo/tache-gestion.git

2- Placez le dossier dans le répertoire racine de votre serveur local (htdocs pour XAMPP ou www pour WAMP).

3- Lancez votre serveur PHP.

4- Accédez à l'application via votre navigateur :
Généralement : http://localhost:8000/login.php 


 	Utilisation de l'application


1- Connexion utilisateur :
-Ouvrez login.php.
-Entrez un nom d'utilisateur pour accéder à l'application.

2- Ajouter une tâche :
Remplissez le formulaire sur la page principale (index.php) :
	-Nom de la tâche (obligatoire)
	-Description (optionnelle)
Cliquez sur le bouton "Ajouter" pour créer la tâche.

3- Afficher les tâches :
Les tâches sont listées dans un tableau avec leur ID, nom, description, statut et des boutons d'action.

4- Marquer une tâche comme terminée :
Cliquez sur le bouton "Marquer comme terminée" à côté de la tâche souhaitée.

5- Supprimer une tâche :
Cliquez sur le bouton "Supprimer" pour retirer définitivement une tâche.


	Fonctionnalités principales


-Ajout de tâches : Créez facilement de nouvelles tâches avec un nom et une description.

-Gestion des statuts : Marquez les tâches comme terminées pour suivre votre progression.

-Suppression des tâches : Supprimez les tâches terminées ou non désirées.

-Affichage dynamique : Les tâches terminées et non terminées sont distinguées visuellement.

-Sessions utilisateur : Personnalisez l'expérience avec des sessions PHP pour identifier l'utilisateur connecté.


	Fonctionnalités à venir 


-Ajout d'une date de fin de la tâche.

-Ajout d'une option de modification avec un bouton.

-Créer un système de recherche et de filtrage.






