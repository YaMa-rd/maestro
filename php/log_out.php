<?php include('./includes/session_start.php');?>
<?php include('./includes/head.php');?>

<head>
    <link rel="stylesheet" href="/css/form.css">
    <title>Log out</title>
</head>

<body>

    <h1>Log out</h1>

    <?php

        $_SESSION = array();
        echo "You have been logged out.";

    ?>

    <footer>
        <?php include('./includes/menu.php');?>
    </footer>

</body>

</html>