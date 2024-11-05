<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
        //EX 1
        
            $nom = "Martin";
            $anneeNaissance = 2000;

            function agecCalcul($anneeNaissance) {
                return date("Y") - $anneeNaissance;
            }
        
        //EX 2

            function concatenation($nom, $age) {
                return  'Bonjour Mr ' . $nom . ' vous avez ' . $age . ' ans.';
            }
            $age = agecCalcul($anneeNaissance);
            echo concatenation($nom, $age);
        
        //EX 3

            $note_maths = 15;
            $note_français = 12;
            $note_HG = 9;
            function moyenne($note_maths, $note_français, $note_HG) {
                return ($note_maths + $note_français + $note_HG)/3;
            }
            echo 'La moyenne est de ' . moyenne($note_maths, $note_français, $note_HG) . '/20';
        
        //EX 4

            $sexe = "homme";
            if ($sexe == "homme") {
                echo "Vous êtes un homme";
            } else {
                echo "Vous êtes une femme";
            }

        //EX 5

            $heure = 15;
                if ($heure=5 || $heure<13) {
                    echo "C'est le matin";
                } elseif ($heure=13 || $heure < 18) {
                    echo "C'est l'après-midi";
                } else {
                    echo "C'est le soir";
                }

        //EX 6

            $age = 22;
            if ($age>18) {
                echo "Vous êtes majeur, vous pouvez jouer à GTA";
            } else {
                echo "Vous êtes mineur, retour sur Purble Place";
            }
                $choix = 2;
                if ($choix==1) {
                    echo "Insérer";
                } elseif ($choix==2) {
                    echo "Supprimer";
                } elseif ($choix==3) {
                    echo "Afficher";
                } elseif ($choix==4) {
                    echo "Ce choix n'existe pas";
                }

        //EX 7

            $nombre = 15;
            if ((($nombre%3)==0) && (($nombre%5)==0))
            {
                echo $nombre . " est un multiple de 3 et 5.";
            } else {
                echo $nombre . " n'est pas un multiple de 3 et 5.";
            }

        //EX 8

            $prixHT=25;
            function volEtatique($prixHT) {
                return $prixHT*1.2;
            }
            echo "Le prix après TVA est de " . volEtatique($prixHT) . " €";

        //EX 9

            $prixEuro= 20;
            function eurDollar($prixEuro) {
                return $prixEuro * 1.09;
            }
            function eurYen($prixEuro) {
                return $prixEuro * 168.84;
            }
            echo "Le prix en dollars est de " . eurDollar($prixEuro) . " $<br>";
            echo "Le prix en yens est de " . eurYen($prixEuro) . " ¥";

        //EX 10

            $age = 19;
            $sexe = "femme";
            if (($sexe == "femme")&&($age>18)&&($age<35)) {
                echo "Bonjour madame, je suis un gentlemen";
            } else {
                echo "Bonjour à toi, être non compris entre 18 et 35 ans et potentiellement non binaire";
            }

        //EX 11

            $codePostal = 44000;

            while ($codePostal <= 44999) {
                echo $codePostal . "<br>";
            $codePostal++;
            }

        //EX 12

            for ($i = 1; $i <= 5; $i++) {
                for ($j = 1; $j <= $i; $j++) {
                    echo $i;
                }
                echo "<br>";
            }

        //EX 13

            $nombre = 0;

                while ($nombre < 20) { 
                        if ($nombre == 10) { 
                    echo "<strong style='color: red;>" . $nombre . "</strong><br>";
                } else {
                    echo $nombre . "<br>";
                }
                $nombre += 2;
            }

        //EX 14

            function nombrePair() {
                return rand(1, 50) * 2;
            }
            
            function nombreImpair() {
                return rand(0, 49) * 2 + 1;
            }
            
            $pair = nombrePair();
            $impair1 = nombreImpair();
            $impair2 = nombreImpair();

            echo "La suite est : " . $pair . ", " . $impair1 . ", " . $impair2;

        //EX15

            $nombreChoisi = rand(100, 999);
            $compteur = 0;

            while (true) {
                $tirage = rand(100, 999);
                $compteur++;

                if ($tirage === $nombreChoisi) {
                    break;
                }
            }

            echo "Le nombre choisi était : $nombreChoisi<br>";
            echo "Nombre de tirages nécessaires : $compteur<br>";
            ?>
    </body>
</html>