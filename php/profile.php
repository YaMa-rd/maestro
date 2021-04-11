<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/session_start.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/head.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/connected.php');?>

<head>
    <link rel="stylesheet" href="/css/home.css">
    <title>Profile page</title>
</head>

<body>

    <h1>Page de profil de <?= $_SESSION['nom'] . ', ' . $_SESSION['role'] . '.'?></h1>    

    <footer>
        <?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/menu.php');?>
    </footer>

</body>

</html>