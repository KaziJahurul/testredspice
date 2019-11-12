<template>
    <div class="site_wrapper page_reservation">

        <section class="reservation_section">
            <div class="reservation_container">

                <form class="reservation_form">

                    <div class="form_field">
                        <input class="rs_freservation_field" type="text">
                    </div>

                    <div class="form_field">
                        <input class="rs_freservation_field" type="text">
                    </div>

                    <div class="form_field">
                        <input class="rs_freservation_field" type="text">
                    </div>

                    <div class="form_field">
                        <input class="rs_freservation_field" type="text">
                    </div>
                    
                    <div class="form_field">
                        <input class="rs_freservation_field" type="text">
                    </div>

                </form> <!-- /.reservation_form -->

            </div>
        </section> <!-- /.reservation_section -->

    </div> <!-- /.site_wrapper -->
</template>

<script>
export default {
    name: 'reservationpage',
    props:['webSiteInfo'],
}
</script>