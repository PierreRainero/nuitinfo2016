<!DOCTYPE html>
<html lang="en" class="full_back4">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SafeZone</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/the-big-picture.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type="application/javascript" src="js/easterEgg.js"></script>

</head>

<body>

<!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php">Accueil</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle actual-page" data-toggle="dropdown" id="pourquoi">Pourquoi ce site ? <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="conflits.php">Les conflits et persécutions dans leur pays</a>
                        </li>
                        <li>
                            <a href="voyage.php">Le voyage vers l'Europe</a>
                        </li>
                        <li>
                            <a href="conditionsDeVie.php">Leur conditions de vie en France</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Apprentissage <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="apprentissageAdulte.php">Adulte</a>
                        </li>
                        <li>
                            <a href="apprentissageEnfant.php">Enfant</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="forumAccueil.php">Forum</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>

<div class="container">
    <div class="row">
        <div class="col-md-6 col-sm-12 text-container">
            <h1>Le voyage vers l'Europe</h1>
            <p>Pour rejoindre l'Europe le voyage (qu'il soit maritime ou terrestre) est dangereux. Pour rejoindre l'Europe, le voyage est dangereux. Que ce soit par la voie maritime avec un nombre important de mort chaque jours. Ou encore par la voie terrestre : le trajet est long (risque de blessures, fatigue, ...), ils ne trouvent pas toujours de quoi se nourrir.</p>
        </div>

        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="esaterEgg" data-target="#modalegg" style="display: none;">Open Modal</button>

        <div id="modalegg" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Surprise !</h4>
                    </div>
                    <div class="modal-body">
                        <img class="img-responsive" src='img/team.jpg' />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- /.row -->
</div>

<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- Script to Activate the Carousel -->
<script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
</script>

</body>

</html>
