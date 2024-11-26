<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale-1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            // $prenom ="John";
            // $nom = "Doe";
            // $age = 11;
            // echo $prenom." ".$nom;
            // echo "<hr>";
            // //ecrire du texte
            // echo "Bonjour je suis un poisson";
            // echo "<hr>";

            // echo gettype($prenom).PHP_EOL;
            // echo gettype($age).PHP_EOL;

            // if($age <12 ){
            //     echo "vous n'avez pas l'age de conduire";
            // }else{
            //     echo "vous avez l'age de conduire";
            // }

            // for ($i = 0; $i<10; $i++){
            //         echo 'boucle for php, numéro'.$i.'<br>';
            // }

            //     $i = 5;
            //     while($i>9){
            //         echo $i;
            //         $i++;
            //     }

            //                     // Déclaration du tableau
            //     $tableau = array();

            //     // Remplir le tableau
            //     $tableau[] = "valeur1";
            //     $tableau[] = "valeur2";
            //     $tableau[] = "valeur3";

            //     // Affichage de la première valeur du tableau indexé
            //     echo $tableau[0]; // Affiche "valeur1"

            //     // Modification de la première valeur du tableau
            //     $tableau[0] = "nouvelle valeur1";

            //     // Déclaration et initialisation de $tableau2
            //     $tableau2 = array("Valeur1", "Valeur2", "Valeur3");

            //     // Utilisation de foreach pour afficher les clés et les valeurs du tableau $tableau
            //     foreach ($tableau as $cle => $valeur) {
            //         echo $cle . " : " . $valeur . "<br>";
            //     }

            //     // Utilisation de foreach pour afficher uniquement les valeurs du tableau $tableau
            //     foreach ($tableau as $valeur) {
            //         echo $valeur . "<br>";
            //     }

            //     // Déclaration d'une variable pour la boucle do...while
            //     $i = 0;

            //     // Boucle do...while pour afficher les valeurs de $i tant qu'il est inférieur à 9
            //     do {
            //         echo $i . "<br>";
            //         $i++;
            //     } while ($i < 9);
                
            //     //tableau associatif
            //     $tableauAsso = array();
            //     $tableau['nom'] = "dupont";
            //     $tableau['prenom'] = ""

            $x=27;
            echo 'Mon age +10 ans est ' . $x +10;

            $x = 50;
            $y = 3;
            $quotient = (intdiv($x, $y));
            $reste = (fmod($x, $y));
            echo 'Le resultat de la division entière de 50 par 3 est de '.$quotient.' et le reste est '.$reste.'<br>';



            $xP = 10;
            $yP = 5;
            if ($xP>$yP){
                echo 'x est plus grand que y'.'<br>';
            } else {
                echo 'y est plus grand que x'.'<br>';
            }



            for ($i=0;$i<16; $i++) {
                echo pow(2, $i).'<br>';
            }



            $i=0;
            while ($i<16) {
                echo pow(2, $i).'<br>';
                $i++;
            }



            $durée = 6700;

            $heures = floor($durée / 3600);               
            $minutes = floor(($durée % 3600) / 60);       
            $secondes = $durée % 60;            

            echo "<br>{$heures}h{$minutes}m{$secondes}s";
            ?>
    </body>
</html>