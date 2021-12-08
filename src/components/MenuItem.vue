<template>
  <v-menu
    :open-on-hover="!isMobile"
    :open-on-click="isMobile"
    close-on-content-click
    bottom
    offset-y
    v-if="menu.subMenu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        plain
        color="white"
        class="text-capitalize"
      >
        {{ menu.title }}
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </template>
    <v-list :max-width="isMobile ? '100%' : 300">
      <v-list-item
        v-for="subItem in menu.subMenu"
        :key="subItem.id"
        :href="subItem.url"
        target="_blank"
      >
        <v-list-item-content>
          <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ subItem.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-btn
    v-else
    plain
    text
    color="white"
    class="text-capitalize"
    :href="menu.url"
    :target="menu.url ? '_blank' : undefined"
    :to="menu.to"
    :key="menu.id"
    >{{ menu.title }}
  </v-btn>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
