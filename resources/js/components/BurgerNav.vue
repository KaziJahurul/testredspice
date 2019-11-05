<template>
    <div v-if="mainNav.isMainNav" class="main_nav">

        <div class="burger">
            <img @click="clickNav" class="burger_icon" :src="mainNav.burgerImage" alt="menu burger">
        </div>

        <div 
        :style="{ transform: 'translateX(' + mainNav.transformPercent + '%)' }" 
        class="main_nav_container"
        >

            <div class="nav_logo">
                <a href="#">
                    <img class="nav_logo_img" :src="siteInfo.siteLogo" alt="Red Spice Restaurent">
                </a>
            </div>

            <ul v-if="mainNav.navItems.length > 0" class="primary_nav">
                <li 
                    v-for="(item, index) in mainNav.navItems"
                    :key="index"
                    @click="clickNav"
                >
                    <router-link :to="item.itemUrl">
                        {{ item.itemText }}
                    </router-link>
                </li>
            </ul>
        </div>

    </div> <!-- /.main_nav -->
</template>

<script>
export default {
    name: 'burgernav',
    props:['webSiteInfo'],
    data() {
        return {
            siteInfo: this.webSiteInfo,
            mainNav: {
                isMainNav: true,
                openNav: false,
                burgerImageArray: ['images/burger.png', 'images/burger_close.png'],
                burgerImage: 'images/burger.png',
                transformPercent: 110,
                navItems: [
                    {
                        itemText: 'Home',
                        itemUrl: '/',
                    },
                    {
                        itemText: 'Cuisine',
                        itemUrl: '/cuisine',
                    },
                    {
                        itemText: 'Order',
                        itemUrl: '/order',
                    },
                    {
                        itemText: 'Reservation',
                        itemUrl: '/reservation',
                    },
                    {
                        itemText: 'Contact',
                        itemUrl: '/contact',
                    },
                ],
            },
        }
    },
    methods: {
        clickNav: function() {
                let thisNav = this.mainNav;
                if(thisNav.openNav) {
                thisNav.openNav = false;
                thisNav.transformPercent = 110;
                thisNav.burgerImage = thisNav.burgerImageArray[0];
            } else {
                thisNav.openNav = true;
                thisNav.transformPercent = 0;
                thisNav.burgerImage = thisNav.burgerImageArray[1];
            }
            // console.log(thisNav.openNav);
        },
    },
    computed: {
        
    },
}
</script>