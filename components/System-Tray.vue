<template>
  <v-list class="hidden-xs-only app-menu">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :href="item.to"
      :alt="item.title"
      class="list-item"
      router
      exact
    >
      <v-list-item-action class="hidden-xs-only">
        <v-icon class="panel-icon">{{ item.icon }}</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-list-item class="list-item">
      <div class="current-year">
        <div class="year">{{ new Date().getFullYear() }}</div>
        <div class="copy">&copy;</div>
      </div>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-github',
        title: 'Github',
        to: 'https://github.com/PapyElGringo/material-shell',
      },
      {
        icon: 'mdi-discord',
        title: 'Discord',
        to: 'https://discord.gg/ZUqgA9M',
      },
    ],
  }),
}
</script>
<style lang="css" scoped>
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
  font-size: 17.5px;
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

.current-year {
  height: 48px !important;
  width: 48px !important;
  margin: 0 !important;
  padding: 0 !important;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.year {
  height: 50%;
}

.copy {
  height: 50%;
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
