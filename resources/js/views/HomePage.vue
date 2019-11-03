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
        
    </section> <!-- /.home_banner -->

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

    <booking-cta :booking-now="BookingNow"></booking-cta>

    <section class="rs_order_section">
        <div class="container">
            
            <div class="rs_order_section_in">

                <div class="row">

                    <div class="col-sm">
                        <div class="delivery_btn_holder">
                            <a href="#" class="rs_btn">Delivary</a>
                            <a href="#" class="rs_btn">Take-Away</a>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-sm-4">
                        <div class="booking_city_search">
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="booking_addr_search">
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                </div>
                    
                <div class="row">

                    <div class="col-sm">

                        <div class="order_btn_holder">
                            <a href="#" class="rs_btn">Order Now</a>
                            <a href="#" class="rs_btn">Order Later</a>
                        </div>

                        <div class="skip_btn_holder">
                            <a href="#" class="rs_btn">Skip to see Menu</a>
                        </div>

                    </div>

                </div>

            </div> <!-- /.rs_order_section_in -->

        </div>
    </section> <!-- /.rs_order_section -->

    <booking-cta :booking-now="BookingNow"></booking-cta>

    <subscription-section></subscription-section>

</div>
</template>

<script>

import BookingCta from "../components/BookingCta.vue";
import SubscriptionSection from "../components/SubscriptionSection.vue";


export default {
    name: 'homepage',
    components: {
        BookingCta,
        SubscriptionSection
    },
    props:['webSiteInfo', 'BookingNow'],
    data() {
        return {
            siteInfo: this.webSiteInfo,
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
