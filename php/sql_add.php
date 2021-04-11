<?php include('./includes/session_start.php');?>
<?php include('./includes/head.php');?>

<head>
    <link rel="stylesheet" href="/css/sql.css">
    <title>SQL add</title>
</head>

<body>

    <?php 
    
        // Voir le fichier PDO pour paramétrer l'accès à la base données
        include('./includes/pdo/pdo.php');

        
        if ($_POST['role'] == 'apprenant') {
            
            $response = $database->prepare('INSERT INTO apprenant (nom, motdepasse, mail) VALUES (:nom, :motdepasse, :mail)');
            $response->execute(array(
                'nom' => $_POST['nom'],
                'motdepasse' => $_POST['motdepasse'],
                'mail' => $_POST['mail'],
            ));
            $response->closeCursor();
            
            $response = $database->prepare('SELECT id, nom, mail FROM apprenant WHERE nom = :nom AND motdepasse = :motdepasse LIMIT 0, 1');
            $response->execute(array(
                'nom' => $_POST['nom'],
                'motdepasse' => $_POST['motdepasse'],
            ));
            while ($data = $response->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <div class="data">
                    <?php
                    foreach ($data as $key => $value) {
                        ?>
                        <div><?= $key . ' = ' . $value ?></div>
                        <?php
                    }
                    ?>
                </div>
                <?php
            }
            echo "Bienvenue parmi nous, " . $_POST['nom'] . " !";
            $response->closeCursor();
        
        }

        if ($_POST['role'] == 'enseignant') {

            $response = $database->prepare('INSERT INTO enseignant (nom, motdepasse, mail) VALUES (:nom, :motdepasse, :mail)');
            $response->execute(array(
                'nom' => $_POST['nom'],
                'motdepasse' => $_POST['motdepasse'],
                'mail' => $_POST['mail'],
            ));
            $response->closeCursor();
            
            $response = $database->prepare('SELECT id, nom, mail FROM enseignant WHERE nom = :nom AND motdepasse = :motdepasse LIMIT 0, 1');
            $response->execute(array(
                'nom' => $_POST['nom'],
                'motdepasse' => $_POST['motdepasse'],
            ));
            while ($data = $response->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <div class="data">
                    <?php
                    foreach ($data as $key => $value) {
                        ?>
                        <div><?= $key . ' = ' . $value ?></div>
                        <?php
                    }
                    ?>
                </div>
                <?php
            }
            echo "Bienvenue parmi nous, " . $_POST['nom'] . " !";
            $response->closeCursor();
        
        }
        
    ?>

    <footer>
        <?php include('./includes/menu.php');?>
    </footer>

</body>

</html>