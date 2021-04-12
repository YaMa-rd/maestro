<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/session_start.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/head.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/connected.php');?>

<head>
    <link rel="stylesheet" href="/css/form.css">
    <title>Log in</title>
</head>

<body>

    <section class="form">
        <!-- Formulaire de connexion -->
        <h1>Log in</h1>
        <form action="sql_connect.php" method="post">
            <div>
                <input type="text" name="nom" id="nom" placeholder="Nom">
                <input type="password" name="motdepasse" id="motdepasse" placeholder="Mot de passe">
                <select name="role" id="role">
                    <option value="apprenant">apprenant</option>
                    <option value="enseignant">enseignant</option>
                    <option value="admin">admin</option>
                </select>
                <input type="submit" value="Send">
            </div>
        </form>

    </section>    

    <footer>
        <?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/menu.php');?>
    </footer>

</body>
    
</html>