<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Norkru
 */

?>
<!-- footer start -->

<footer class="overflow__width">
    <div class="upper-footer">
        <div class="container b-container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-12">
                    <div class="footer-logo-text">
                        <img src="<?php bloginfo('template_url'); ?>/assets/images/logo.png">
                        <p>Full-service construction cleaning company offering our expertise to the Metro Vancouver
                            area.</p>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-12">
                            <div class="footer-box">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Request A Quote</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <div class="footer-box">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Construction Clean Up</a></li>
                                    <li><a href="#">Post Renovation Cleaning</a></li>
                                    <li><a href="#">Real Estate Cleaning</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <div class="footer-box">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><a href="#">Phone: (604) 767-7623</a></li>
                                    <li><a href="#">info@norkru.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <div class="footer-box">
                                <h3>Stay Connected</h3>
                                <ul class="footer-social">
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-footer">
        <div class="container b-container">
            <div class="bottom-footer-text">
                <div class="copyright">
                    <p>Copyright © 2022 Norkru. All rights reserved</p>
                </div>
                <div class="design-text">
                    <p>Designed & Developed <span>Choquer Creative</span></p>
                </div>
            </div>


        </div>
    </div>

</footer>

<!-- footer end -->
<!-- Modal -->
<div class="modal fade request-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Request A Quote</h5>
                <div class="close-icon"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button></div>
            </div>
            <div class="modal-body">
                <form class="row g-5">
                    <div class="col-md-6">
                        <label for="ContactName" class="form-label">Contact Name</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="CompanyName " class="form-label">Company Name </label>
                        <input type="text" class="form-control" id="">
                    </div>
                    <div class="col-md-6">
                        <label for="CompanyName " class="form-label">Email Address</label>
                        <input type="text" class="form-control" id="">
                    </div>
                    <div class="col-md-6">
                        <label for="CompanyName " class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="">
                    </div>
                    <div class="col-md-6">
                        <label for="CompanyName " class="form-label">Choose A Date</label>
                        <input type="date" class="form-control" id="">
                    </div>

                    <div class="col-md-6">
                        <label for="CompanyName " class="form-label"> Choose Your Service</label>


                        <select id="Choose-Service" name="Choose-Service" data-name="Choose Service" class="form-select">
                            <option value="">Select A Service</option>
                            <option value="Real Estate Cleaning">Real Estate Cleaning</option>
                            <option value="Post Renovation Cleaning">Post Renovation Cleaning</option>
                            <option value="Construction Clean Up">Construction Clean Up</option>
                        </select>


                    </div>
                    <div class="col-md-12">
                        <label for="Project-Details" class="form-label">Share Project Details</label>
                        <textarea name="Project-Details" maxlength="5000" id="Project-Details" class="form-control"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>


<?php wp_footer(); ?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/jquery-ui.css">
<script src="<?php bloginfo('template_url'); ?>/assets/js/bootstrap.bundle.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/main.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/wow.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/slick.min.js"></script>

<script>
    $('.join-boxes').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
</script>


<script>
    $('.about-testimonial-boxes').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
</script>

</body>

</html>