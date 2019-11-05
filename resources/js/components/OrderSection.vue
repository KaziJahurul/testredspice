<template>
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
</template>

<script>
export default {
    name: 'ordersection',
}
</script>