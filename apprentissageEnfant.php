<!DOCTYPE html>
<html lang="en" class="full_condition">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="The walking code">

    <title>SafeZone</title>


    <!-- Mini jeu - IMPORTS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script type="application/javascript" src="js/MiniJeu.js"></script>
    <link rel="stylesheet" type="text/css" href="css/GlobalCSS.css">

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
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pourquoi ce site ? <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="conflits.php">Les conflits et persécutions dans leur pays</a>
                        </li>
                        <li>
                            <a href="voyage.php">Le voyage vers l'Europe</a>
                        </li>
                        <li>
                            <a href="conditionsDeVie.php">Leurs conditions de vie en France</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle actual-page" data-toggle="dropdown">Apprentissage <b class="caret"></b></a>
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
        <div class="well groupeMiniJeu col-xs-11 col-md-8">
            <div id="affichage"> <!-- Block d'affichage -->
                <div id="background">
                    <img class="img-responsive" src="img/gameBackground.jpg" id="fond"/>
                    <img class="img-responsive" src="img/gameBackground.jpg" id="fond2"/>
                    <img class="img-responsive" src="img/gameBackground.jpg" id="fond3"/>
                    <img class="img-responsive" src="img/gameBackground.jpg" id="fond4"/>
                    <img class="img-responsive" src="img/gameBackground.jpg" id="fond5"/>
                </div>

                <img class="img-responsive" src="img/coin.png" id="piece"/>
                <img class="img-responsive" src="img/fence.png" id="obstacle1"/>
                <img class="img-responsive" src="img/character.png" id="personnage"/>
            </div>
        </div>

        <div class="well groupeMiniJeu col-xs-11 col-md-3">
            <div id="commandes"> <!-- Block d'échange avec le moteur -->
                <div id="notifications" > <!-- Pourquoi il a fait faux à la question précédente -->

                </div>
                <div id="instructions"> <!-- Enoncé de la question en cours -->

                </div>
                <!-- Boutons actions -->
                <div id="boutons">
                    <button type="button" class="btn btn-default" id="reponse1"></button>
                    <button type="button" class="btn btn-default" id="reponse2"></button>
                    <button type="button" class="btn btn-default" id="reponse3"></button>
                </div>

            </div>
        </div>

        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="boutonmagik" data-target="#myModal" style="display: none;">Open Modal</button>

        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Aventure terminée !</h4>
                    </div>
                    <div class="modal-body">
                        <p id="contenuModalVictoire"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                    </div>
                </div>

            </div>
        </div>

<!-- Script to Activate the Carousel -->
<script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
</script>

</body>

</html>
