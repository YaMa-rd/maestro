<div class="connected">
    <?php
        if (isset($_SESSION['nom'])) {
            echo 'You are logged in as ' . $_SESSION['nom'] . '.';
        }
        else {
            echo "Welcome, anonymous visitor !";
        }
    ?>
</div>