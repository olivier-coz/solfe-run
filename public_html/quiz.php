<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>GoodbyWorld!</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.ico" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">



    <!-- Game CSS Files -->
    <link href="assets/game/style.css" rel="stylesheet">

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

</head>
<!-- BODY -->
<body>






	 <!-- ======= Header ======= -->
    <?php
    $currentPage = "quiz";
    include("./header.php");
    ?>
    <!-- End Header -->






    <main id="main">
        <section id="portfolio" class="portfolio">
            <div class="section-title" data-aos="fade-in" data-aos-delay="100">
                <h2>Quizz</h2>
            </div>

			<div class="container text-center">
				<h1>Quel type de pantoufle êtes-vous ?</h1>
			</div>
			<div class="container text-center">
				<ul id="quiz" class="list-group">

				</ul>
			</div>

			<div class="container text-center hide results1 d-flex justify-content-center">
				<img src="quiz/img/pantoufle.jpg" class="results col-md-4 col-sm-4 col-xs-4">
			</div>

			<div class="container text-center hide results2 d-flex justify-content-center">
				<img src="quiz/img/babouche.jpg" class="results col-md-4 col-sm-4 col-xs-4">
			</div>

			<div class="container text-center hide results3 d-flex justify-content-center">
				<img src="quiz/img/bouteille.jpg" class="results col-md-4 col-sm-4 col-xs-4">
			</div>


			<div class="container text-center results hide ">
				<p id="results"></p>
			</div>

			<div class="container text-center bottom">
				<button id="submit-btn" class="btn btn-primary btn-lg">Valider</button>

				<button id="retake-btn" class="hide btn btn-primary btn-lg">Refaire le Quiz</button>
			</div>









        </section>
    </main><!-- End #main -->

	<!-- ======= Footer ======= -->
    <?php
    include("./footer.php");
    ?>
    <!-- End Footer -->

    	<!-- SCRIPTS -->

	<!-- JQUERY -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<!-- BOOTSTRAP -->
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<!-- CUSTOM -->
	<script type="text/javascript" src="quiz/js/main.js"></script>

	<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>

</body>
</html>
