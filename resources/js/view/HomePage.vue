<template>
<div class="home_wrapper">

    <!-- <burger-nav></burger-nav> -->

        <div class="site_wrapper home">
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
            
        </div>
</div>
</template>

<script>
export default {
    name: 'homepage',
    props: ['webSiteInfo'],
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