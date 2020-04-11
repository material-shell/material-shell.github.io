<template>
  <div>
    <v-app-bar
      class="ms-panel-gray"
      height="48px"
      :clipped-left="clipped"
      fixed
      app
    >
      <div class="page-title">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
        <nuxt-link class="main-title no-style" to="/">
          <v-toolbar-title v-text="title" />
        </nuxt-link>
      </div>
      <v-spacer />
      <nav-menu class="hidden-xs-only" />
      <v-app-bar-nav-icon
        class="hidden-sm-and-up ms-font-gray"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-navigation-drawer
      class="hidden-sm-and-up"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      ><nav-menu class="hidden-sm-and-up" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavMenu from '~/components/Nav-Menu.vue'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Material Shell'
    }
  },
  components: {
    Logo,
    NavMenu
  }
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding-top: 0px !important;
  padding-left: 0px !important;
  padding-bottom: 0px !important;
}

/deep/ .theme--dark.v-btn.v-btn--icon {
  color: #a3a3a3;
}

.main-title {
  margin-left: 2px;
}

.no-style {
  color: #fff;
  text-decoration: none;
}

.ms-panel-gray {
  background: #191919 !important;
}
.ms-blue {
  background: #3f51b5;
}

.ms-font-gray {
  color: #a3a3a3;
}

.ms-font-active {
  color: #fff;
}

.page-title{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-right:20px;
}

.page-title:hover{
  background: #222222;

}
</style>
