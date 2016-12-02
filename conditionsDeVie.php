<!DOCTYPE html>
<html lang="en" class="full">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SafeZone</title>

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
                    <a href="#" class="dropdown-toggle actual-page" data-toggle="dropdown">Pourquoi ce site ? <b class="caret"></b></a>
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
            <h1>Leur conditions de vie en France</h1>
            <p>En France, des mesures sont prises pour aider les migrants à s'intégrer. Il existe des centres d’accueil et d’orientation pour les acceuillir, mais des camps de migrants persistent : tous ne peuvent / veulent aller dans ces camps. Au niveau de la population, encore aujourd'hui beaucoup de personnes ne sont pas "favorables" à l'acceuil de ceux-ci, certaines ayant même peur des migrants alors qu'ils cherchent juste à echapper à la guerre.</p>
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
