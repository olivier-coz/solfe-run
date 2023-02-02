<!-- ======= Pre-loader ======= -->
<div id="preloader"></div>
<!-- ======= Header ======= -->
<header id="header" class="fixed-top <?php echo $currentPage == "index" ? "header-transparent" : "" ?>">
  <div class="container d-flex align-items-center justify-content-between">

    <div class="logo">
      <!-- <h1 class="text-light"><a href="index.php"><span>GOODBYWORLD!</span></a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="index.php"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>
    </div>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="nav-link scrollto <?php echo $currentPage == "run" ? "active" : "" ?>" href="./index.php">Solfé Run</a></li>
        <li><a class="nav-link scrollto <?php echo $currentPage == "quiz" ? "active" : "" ?>" href="./quiz.php">Pantoufle</a></li>
        
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav><!-- .navbar -->

  </div>
</header><!-- End Header -->

