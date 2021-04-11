<?php include('./includes/session_start.php');?>
<?php include('./includes/head.php');?>
<?php include('./includes/connected.php');?>

<head>
    <link rel="stylesheet" href="/css/form.css">
    <title>Sign up</title>
</head>

<body>

    <section class="form">

        <h1>Sign up</h1>
        <form action="sql_add.php" method="post">
            <div>
                <input type="text" name="nom" id="nom" placeholder="Nom">
                <input type="password" name="motdepasse" id="motdepasse" placeholder="Mot de Passe">
                <input type="text" name="mail" id="mail" placeholder="E-mail">
                <select name="role" id="role">
                    <option value="apprenant">apprenant</option>
                    <option value="enseignant">enseignant</option>
                </select>
                <input type="submit" value="Send">
            </div>
        </form>

    </section>    

    <footer>
        <?php include('./includes/menu.php');?>
    </footer>

</body>

</html>