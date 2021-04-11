<link rel="stylesheet" href="/css/menu.css">

<?php
    // Menu pour l'utilisateur connecté
    if (isset($_SESSION['nom'])) {
        ?>
        <nav id="menu">
            <a href="/php/home.php" title="Home">Home page</a>
            <a href="/php/profile.php" title="Sign up">Profile</a>
            <a href="/php/log_out.php" title="Log out">Log out</a>
        </nav>
        <?php
    }
    else if (isset($_SESSION['admin'])) {
        ?>
        <nav id="menu">
            <a href="/php/home.php" title="Home">Home page</a>
            <a href="/php/admin.php" title="Sign up">Admin</a>
            <a href="/php/log_out.php" title="Log out">Log out</a>
        </nav>
        <?php
    }
    // Menu pour le visiteur
    else {
        ?>
        <nav id="menu">
            <a href="/php/home.php" title="Home">Home page</a>
            <a href="/php/sign_up.php" title="Sign up">Sign up</a>
            <a href="/php/log_in.php" title="Log in">Log in</a>
            <a href="/php/log_out.php" title="Log out">Log out</a>
        </nav>
        <?php
    }
?>