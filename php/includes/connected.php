<div class="connected">
    <?php
        if (isset($_SESSION['nom'])) {
            echo 'You are logged in as ' . $_SESSION['nom'] . '.';
        }
        else if (isset($_SESSION['admin'])) {
            echo 'You are logged in as ' . $_SESSION['admin'] . '.';
        }
        else {
            echo "Welcome, anonymous visitor !";
        }
    ?>
</div>