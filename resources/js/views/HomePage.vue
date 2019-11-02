<template>
<div class="home site_wrapper">

    <section class="home_banner">

        <div class="site_content">
    
            <div class="rs_logo">
                <a class="rs_logo_link" href="#">
                    <img class="logo_img" :src="siteInfo.siteLogo" alt="Red Spice Restaurant">
                </a>
            </div>

            <div class="home_title">
                <h1 v-if="siteInfo.siteTitle" v-text="siteInfo.siteTitle"></h1>
            </div>

            <div class="btn_container">
                <div class="btn_holder">
                    <a class="order rs_btn" :href="orderBtn.url" v-text="orderBtn.text"></a>
                </div>
                <div class="button_holder">
                    <a class="booking rs_btn" :href="bookBtn.url" v-text="bookBtn.text"></a>
                </div>
            </div>
            
        </div>   
        
    </section>

    <section class="rs_cusine">
        <div class="container">
            <div class="row">
                <div class="col-sm">

                    <div class="rs_cuisine_in">

                        <h2 class="rs_section_title">Cuisine</h2>

                        <div class="rs_cuisine_item">

                            <div class="rs_cuisine_item_img">
                                <img src="https://via.placeholder.com/250x180" alt="">
                            </div>
                            <div class="rs_cusine_item_content">
                                <p>
                                    We bring you some of the most celebrated Mexican dishes which will leaveyou wanting for more, every time. Burritos with Minced Meat Filling. Gorge on delicious tortilla wraps stuffed with spiced minced meat. Chicken Quesadillas. Do-It-Yourself Tacos. Guacamole. Chilli Con Carne. Tomato Salsa. Enchiladas.
                                </p>
                                <a href="#" class="rs_btn">ITALIAN</a>
                            </div>
                            

                        </div> <!-- /.rs_cuisine_item -->

                        <div class="rs_cuisine_item">

                            <div class="rs_cuisine_item_img">
                                <img src="https://via.placeholder.com/250x180" alt="">
                            </div>
                            <div class="rs_cusine_item_content">
                                <p>
                                    We bring you some of the most celebrated Mexican dishes which will leaveyou wanting for more, every time. Burritos with Minced Meat Filling. Gorge on delicious tortilla wraps stuffed with spiced minced meat. Chicken Quesadillas. Do-It-Yourself Tacos. Guacamole. Chilli Con Carne. Tomato Salsa. Enchiladas.
                                </p>
                                <a href="#" class="rs_btn">FAST FOOD</a>
                            </div>
                            

                        </div> <!-- /.rs_cuisine_item -->

                    </div> <!-- /.rs_cuisine_in -->

                </div>

            </div>
        </div>
    </section> <!-- /.rs_cusine -->

    <section class="rs_booking_cta_section">
        <div class="container">
            <div class="row">
                <div class="col-sm">

                    <div class="rs_booking_cta_holder">
                        <a href="#" class="rs_btn">Booking Now</a>
                    </div>

                </div>
            </div>
        </div>
    </section> <!-- /.rs_booking_cta_section -->


</div>
</template>

<script>
export default {
    name: 'homepage',
    data() {
        return {
            // siteInfo: this.webSiteInfo,
            siteInfo: {
                siteLogo: 'images/logo.svg',
                siteTitle: 'RED SPICE RESTAURANT',
            },
            orderBtn: {
                text: 'Order Now',
                url: '#',
            },
            bookBtn: {
                text: 'Booking',
                url: '#',
            },
        }
    },
    computed: {
        
    },
}
</script>
