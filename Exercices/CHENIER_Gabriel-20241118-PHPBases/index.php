<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale-1.0">
        <title>Document</title>
        <style>
        table {
            width: 30%;
            border-collapse: collapse;
            margin: 20px auto;
        }
        th, td {
            border: 2px solid #000;
            padding: 10px;
            text-align: center;
        }
        </style>
    </head>
    <body>
    <?php
    // EX 1

        $depart=0;
        $increment=12;
        function incrementAffichage($depart, $increment) {
            $number = $depart;

            while ($number < 100) {
                $number += $increment;
                echo $number . "<br>"; 
            }
        }
        incrementAffichage(0, 12); 

    // EX 2

        $nombre = 15;
        if ((($nombre/2) == 0))
        {
            echo $nombre . " est un nombre pair<br>";
        } else {
            echo $nombre . " est un nombre impair<br>";
        }
        if ((($nombre%4)==0)) {
            echo $nombre . " est un multiple de 4<br>";
        } elseif ((($nombre%3)==0)){
            echo $nombre . " est un multiple de 3<br>";
        } else {
            echo $nombre . " n'est pas un multiple de 3 ou 4<br>";
        }

    // EX 3

        $base = 0.20;
        $hauteur = 0.50;
        function aireRectangle($base, $hauteur){
            return $base * $hauteur;
        }
        echo "Le rectangle de " . $base . " m de largeur et de " . $hauteur . " m de hauteur à une aire égale à " . aireRectangle($base, $hauteur) . " m²";

    // EX 4 

        function suite() {
            do {
                $nombre1 = rand(0, 9);
                $nombre2 = rand(0, 9);

                $nombre3 = 10 - ($nombre1 + $nombre2);
            } while ($nombre3 < 0 || $nombre3 > 9);
        
            return [$nombre1, $nombre2, $nombre3];
        }

        $nombres = suite();
        echo "<br>Les nombres générés sont : " . implode(", ", $nombres) . " et leur somme est : " . array_sum($nombres). "<br>";

    // EX 5

            echo "Les nombres entre 1 et 100 ayant une racine carrée entière sont :<br>";
            for ($i = 1; $i <= 100; $i++) {
                $racine = sqrt($i);

                if ($racine == intval($racine)) {
                    echo $i . "<br>";
                }
            }

    // EX 6 

        $G0 = 0; 
        $G1 = 1;
        $n = 20;


        $suite = [$G0, $G1];

            for ($i = 2; $i < $n; $i++) {
                $suite[$i] = $suite[$i - 1] + $suite[$i - 2];
            }

        echo "Les $n premiers termes de la suite sont : " . implode(", ", $suite). '<br>';

        // EX 7 

        date_default_timezone_set('Europe/Paris');

        echo "Nous sommes le " . date('Y-m-d') . " et il est actuellement " . date('H:i:s') . '<br>';

        // EX 8

        $elements= [
            [
                "symbole" => "H",
                "element" => "Hydrogène",
            ],
            [
                "symbole" => "He",
                "element" => "Helium",
            ],
            [
                "symbole" => "Li",
                "element" => "Lythium",
            ],
            [
                "symbole" => "Be",
                "element" => "Beryllium",
            ],
            [
                "symbole" => "B",
                "element" => "Bore",
            ],
            [
                "symbole" => "C",
                "element" => "Carbone",
            ],
            [
                "symbole" => "N",
                "element" => "Azote",
            ],
            [
                "symbole" => "O",
                "element" => "Oxygène ",
            ],
            [
                "symbole" => "F",
                "element" => "Fluor",
            ],
            [
                "symbole" => "Ne",
                "element" => "Neon",
            ],
        ];
        ?>
        <table>
            <thead>
                <tr>
                    <th>Symbole</th>
                    <th>Élément</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($elements as $element) : ?>
                    <tr>
                        <td><?= $element['symbole']; ?></td>
                        <td><?= $element['element']; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </body>
</html>