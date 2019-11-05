<template>
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
</template>

<script>
export default {
    name: 'homebanner',
    props: ['siteInfo'],
    data() {
        return {
            orderBtn: {
                text: 'Order Now',
                url: '#',
            },
            bookBtn: {
                text: 'Booking',
                url: '#',
            },
        }
    }
}
</script>