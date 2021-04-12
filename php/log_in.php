<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/session_start.php');?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/connected.php');?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/log_in.css">
</head>
<body>

  
    <div class="connexion">
        <p>Connectez-vous !</p>
    </div>
        
    <form action="sql_connect.php" method="post" class="container-md">
        <div class="row">
            <label for="nom" class="form-label">Identifiant</label>
            <input type="text" name="nom" class="form-control" id="nom" placeholder="Nom">
        </div>
        <br/>

        <div class="container">
            <div class="row">
                <label for="motdepasse" class="form-label">Mot de passe</label>
                <input type="password" name="motdepasse" class="form-control" id="motdepasse" placeholder="Mot de passe">
            </div>
        </div>
        <div class="container row">
            <label for="role" class="form-label">Rôle</label>
            <select name="role" id="role" class="form-control">
                <option value="apprenant">apprenant</option>
                <option value="enseignant">enseignant</option>
                <option value="admin">admin</option>
            </select>
        </div>
        <div class="container submit">
            <input type="submit" value="Send">
        </div>
        <br/>
        <br/>
        <br/>
    </form>

    <div class="container">
        <p class="text-center">Pas de compte ? <a href>Inscrivez-vous !</a></p>
        <br/>
        <p class="text-center">Mot de passe ou identifiant oublié? <a href>Cliquez-ici !</a></p>
    </div>

    
    




   

    <footer>
        <?php include($_SERVER['DOCUMENT_ROOT'].'/php/includes/menu.php');?>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</body>
</html>