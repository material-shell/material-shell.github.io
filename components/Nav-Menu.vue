<template>
  <div class="nav-menu">
    <ul class="hidden-xs-only desktop-nav-list">
      <li :key="i" v-for="(item, i) in items">
        <nuxt-link :to="item.to" class="n-link font-weight-medium no-style">{{
          item.title
        }}</nuxt-link>
      </li>
    </ul>

    <v-list class="device-menu hidden-sm-and-up">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="device-menu-item font-weight-medium"
      >
          <v-list-item-action class="hidden-sm-and-up">
            <v-icon class="device-menu-icon">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-image-multiple',
          title: 'Gallery',
          to: '/gallery'
        },
        {
          icon: 'mdi-account-box',
          title: 'Contact',
          to: '/contact'
        },
        {
          icon: 'mdi-download',
          title: 'Download',
          to: '/download'
        }
      ]
    }
  }
}
</script>

<style scoped>
.nav-menu {
  height: 100%;
  background: #191919;
}

ul.desktop-nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

ul > li {
  display: inline-block;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}

.no-style {
  color: #a3a3a3;
  text-decoration: none;
}

.n-link {
  height: 100%;
  width: 100%;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 48px;
  padding: 0 20px 0 20px;
}

.n-link:hover {
  background: #222222;
}

.nuxt-link-active {
  color: #fff;
  height: 100%;
  border-bottom: #fff 2px solid;
  display: inline-block;
}

.device-menu {
  background: #191919 !important;
  color: #a3a3a3 !important;
  display: flex;
  flex-flow: column nowrap;
  align-items: right;
  justify-content: flex-end;
}

.device-menu-item {
  background: #191919 !important;
  color: #a3a3a3 !important;
}

.device-menu-icon {
  color: #a3a3a3 !important;
}

/deep/.v-list-item--active {
  background: #000 !important;
  border-left: 3px #3f51b5 solid;
}

/deep/.v-list-item--active > div,
/deep/.v-list-item--active > div > i.v-icon {
  color: #fff !important;
  margin-left: -1.5px;
}
</style>
