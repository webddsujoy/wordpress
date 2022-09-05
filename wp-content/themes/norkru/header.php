<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Norkru
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
	<link href="<?php bloginfo('template_url'); ?>/assets/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/all.min.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/fontawesome.min.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/wow.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/slick-theme.min.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/slick.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/style.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/responsive.css">
    <script src="<?php bloginfo('template_url'); ?>/assets/js/min-jquery.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/assets/js/jquery-ui.js"></script>
</head>


<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
  <!--Start main-header -->
  <header class="header overflow__width">
        <div class="b-container container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="<?php bloginfo('template_url'); ?>/assets/images/logo.png"></a>
                    <button class="navbar-toggler uarr collapsed x" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <!-- <span class="navbar-toggler-icon"></span> -->
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="service-interior.html"><span><img
                                                    src="<?php bloginfo('template_url'); ?>/assets/images/construction.svg" alt=""></span> Construction
                                            Clean Up</a></li>
                                    <li><a class="dropdown-item" href="reno.html"> <span><img
                                                    src="<?php bloginfo('template_url'); ?>/assets/images/renovation.svg" alt=""></span>Post-Reno
                                            Cleaning</a></li>
                                    <li><a class="dropdown-item" href="service-design.html"><span><img
                                                    src="<?php bloginfo('template_url'); ?>/assets/images/real-estate.svg" alt=""></span>Real Estate
                                            Cleaning</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="about.html">About</a>
                            </li>



                            <li class="nav-item">
                                <a class="nav-link" href="tel:+16047677623">Contact Us</a>
                            </li>
                        </ul>
                        <div class="right-icon">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request A Quote</a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- End main-header -->