<template>
    <div>
        <v-app-bar>
            <v-toolbar-title>SHOPPING</v-toolbar-title>
            <!-- <v-text-field
                label="Search"
                outlined
                dense
                rounded>
            </v-text-field> -->
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-cart</v-icon>
            </v-btn>
        </v-app-bar>
        <router-view></router-view>
        <v-footer
            fixed
            padless>
            <v-card
                tile
                class="lighten-1 white--text elevation-3"
                width="100%">
                <span class="black--text" v-for="item in footerMenu" :key="item">
                    <a class="mr-2 black--text">{{item}}</a>
                </span>
                <v-divider></v-divider>
                <v-card-text class="black--text">
                    <strong>Copyright 2023</strong>
                </v-card-text>
                <v-card-text>SHOPPING</v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      footerMenu: [
        'เข้าสู่ระบบ',
        'ลงทะเบียน',
        'สมัครร้านค้า'
      ]
    }
  }
}
</script>

<style>

</style>
