<?php
    //C'est ici qu'il faut préciser le moyen d'accès à la base de données
    try {
        //PDO (hôte mysql, nom de la base de données, jeu de caractères, utilisateur, mot de passe, gestion des erreurs)
        $database = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    catch (Exception $e) {
        die('Error : ' . $e->getMessage());
    }

?>