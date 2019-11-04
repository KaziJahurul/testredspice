<template>
    <section class="site_footer">
        <div class="container">
            <div class="row">

                <div class="col-sm">
                    <div class="foter_col footer_col_1">
                        <router-link to="/"><img :src="siteInfo.siteLogo" alt="Red Spice Restaurant" class="footer_logo"></router-link>
                        <ul class="social_nav">
                            <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="foter_col footer_col_2">
                        <h3  class="footer_title">Opening Hours</h3>
                        <ul class="footer_list">
                            <li>
                                <span>Monday</span>
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                            <li>
                                <span>Tuesday</span>
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                            <li>
                                <span>Wednesday</span>
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                            <li>
                                <span>Thursday</span>
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                            <li>
                                <span>Friday</span>
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                            <li>
                                <span>Saturday</span>
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                            <li>
                                <span>Sunday</span>		
                                <span>08.00 am - 10.00 pm</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="foter_col footer_col_3">
                        <h3  class="footer_title">Contact Us</h3>
                        <ul class="footer_list">
                            <li><a href="tel:+971551457856"><i class="fa fa-phone"></i> +971551457856</a></li>
                            <li><a href="mailto:info@redspice.ae"><i class="fa fa-envelope"></i> info@redspice.ae</a></li>
                            <li><a href="https://redspice.ae"><i class="fa fa-globe"></i> www.redspice.ae</a></li>
                            <li>
                                <i class="fa fa-map-marker"></i>
                                P.O. Box: 31436, Shop: 5 &amp; 6 <br>
                                Beside Marina Hotel Appartments<br>
                                Marina Walk, Dubai Marina Dubai, UAE
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sitefooter',
    props:['siteInfo'],
}
</script>