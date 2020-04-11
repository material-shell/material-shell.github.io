<template>
  <v-list class="hidden-xs-only app-menu">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      :alt="item.title"
      class="list-item"
      router
      exact
    >
      <v-list-item-action class="hidden-xs-only">
        <v-icon class="panel-icon">{{ item.icon }}</v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
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
.item {
  display: block;
  font-size: 20px;
  color: #a3a3a3;
}

.item:hover {
  background: #222222;
}

.app-menu {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  background: #191919;
  color: #a3a3a3;
  font-size: 10px;
  text-align: center;
}

.panel-icon {
  color: #a3a3a3;
}

.list-item {
  height: 48px !important;
  width: 48px !important;
  padding: 0;
  text-align: center;
}

.list-item:hover {
  background: #222222;
}

/deep/ .v-list-item--active {
  border-left: 3px #3f51b5 solid;
  color: #fff;
  background: #000 !important;
}

/deep/ .v-list-item__action {
  height: 48px !important;
  width: 48px !important;
  margin: 0 !important;
  padding: 0 !important;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>
