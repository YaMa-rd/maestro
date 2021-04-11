<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/session_start.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/head.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/connected.php');?>

<head>
    <link rel="stylesheet" href="/css/home.css">
    <title>Home page</title>
</head>

<body>

    <h1>Home page</h1>

    <nav class="levels">
        <a href="/php/levels/level1.php">Level 1</a>
        <a href="/php/levels/level2.php">Level 2</a>
        <a href="/php/levels/level3.php">Level 3</a>
    </nav>

    <footer>
        <?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/menu.php');?>
    </footer>

</body>

</html>