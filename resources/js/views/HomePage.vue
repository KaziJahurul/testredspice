<template>
<div class="home site_wrapper">

    <home-banner :site-info="siteInfo"></home-banner>

    <cuisine></cuisine>

    <booking-cta :booking-now="BookingNow"></booking-cta>

    <order-section></order-section>

    <booking-cta :booking-now="BookingNow"></booking-cta>

    <subscription-section></subscription-section>

    <site-footer :site-info="siteInfo"></site-footer>

</div>
</template>

<script>

import HomeBanner from "../components/HomeBanner.vue";
import Cuisine from "../components/Cuisine.vue";
import BookingCta from "../components/BookingCta.vue";
import OrderSection from "../components/OrderSection.vue";
import SubscriptionSection from "../components/SubscriptionSection.vue";
import SiteFooter from "../components/SiteFooter.vue";


export default {
    name: 'homepage',
    components: {
        HomeBanner,
        Cuisine,
        BookingCta,
        SubscriptionSection,
        SiteFooter,
        OrderSection,
    },
    props:['webSiteInfo', 'BookingNow'],
    data() {
        return {
            siteInfo: this.webSiteInfo,
        }
    },
    computed: {
        
    },
}
</script>
