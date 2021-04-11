<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/session_start.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/head.php');?>

<head>
    <link rel="stylesheet" href="/css/sql.css">
    <title>SQL connect</title>
</head>

<body>

    <?php
        if (isset($_SESSION['nom'])) {
            echo 'Welcome to Maestro, ' . $_SESSION['nom'] . ' !';
        }
        else {
            echo 'User does not exist or password was not correct';
        }
    ?>

    <footer>
        <?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/menu.php');?>
    </footer>

</body>

</html>