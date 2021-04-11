<div class="connected">
    <?php
        if (isset($_SESSION['nom'])) {
            echo 'You are logged in as ' . $_SESSION['nom'] . '.';
            ?>
            <pre><?php print_r($_SESSION); ?></pre>
            <?php
        }
        else {
            echo "Welcome, anonymous visitor !";
        }
    ?>
</div>