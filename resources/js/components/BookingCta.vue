<template>
    <section class="rs_booking_cta_section">
        <div class="container">
            <div class="row">
                <div class="col-sm">

                    <div class="rs_booking_cta_holder">
                        <!-- <a href="#" class="rs_btn">Booking Now</a> -->
                        <router-link class="rs_btn" :to="BookingNowcomp.url">{{ BookingNowcomp.text }}</router-link>
                    </div>

                </div>
            </div>
        </div>
    </section> <!-- /.rs_booking_cta_section -->
</template>

<script>
export default {
    name: 'bookingCta',
    props:['BookingNow'],
    data() {
        return {
            BookingNowcomp: this.BookingNow
        }
    },
}
</script>