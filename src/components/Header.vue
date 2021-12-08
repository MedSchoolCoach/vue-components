<template>
  <div id="header">
    <v-app-bar
      color="secondary"
      max-width="1260px"
      flat
      dense
      class="my-0 mx-auto pa-0"
    >
      <v-btn href="/" plain class="pa-0 ma-0">
        <v-img alt="MyMedSchoolCoach logo" :src="logo" max-width="40px" />
        <v-toolbar-title
          class="font-weight-bold mr-md-4 pa-0 ma-0 white--text text-capitalize"
          >MyMedSchoolCoach
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="menu in menuItems">
          <menu-item :menu="menu"></menu-item>
        </template>
      </v-toolbar-items>
      <v-menu
        open-on-click
        bottom
        offset-y
        content-class="mymsc-mobile-menu mt-2"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            plain
            color="white"
            class="text-capitalize hidden-md-and-up"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list-item
          v-for="menu in menuItems"
          :key="menu.id"
          :href="menu.url"
          target="_blank"
        >
          <v-list-item-content>
            <menu-item :menu="menu" is-mobile></menu-item>
          </v-list-item-content>
        </v-list-item>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'Header',
  components: { MenuItem },
  data () {
    return {
      logo: require('@/static/images/mymsc-logo.png'),
      menuItems: [
        {
          id: 'mcat-tutoring-and-preparation',
          title: 'MCAT Tutoring & Preparation',
          subMenu: [
            {
              id: 'tutoring',
              title: 'Tutoring Portal',
              subtitle: 'Scheduling and Session History',
              url: this.$maybeSwitchDomain('tutoring')
            },
            {
              id: 'practice-exam',
              title: 'MCAT Practice Exam',
              subtitle: 'Simulates the Actual MCAT',
              url: this.$maybeSwitchDomain('msc-exam')
            },
            {
              id: 'mcat-prep-app',
              title: 'MCAT PREP APP',
              subtitle: 'Now for large and small screens',
              url: this.$maybeSwitchDomain('mcat-prep')
            }
          ]
        },
        {
          id: 'chart-for-advising',
          title: 'CHART for Advising',
          url: this.$maybeSwitchDomain('chart')
        },
        {
          id: 'experiences',
          title: 'Experiences',
          subMenu: [
            {
              id: 'events',
              title: 'Events',
              subtitle: 'Workshops and Webinars',
              url: 'https://www.medschoolcoach.com/events/'
            },
            {
              id: 'clinical-travel',
              title: 'Clinical Travel',
              subtitle: 'Join Us in Ghana',
              url: 'https://www.medschoolcoach.com/clinical-travel/ghana/'
            },
            {
              id: 'virtual-shadowing',
              title: 'Virtual Shadowing',
              subtitle: 'Explore Medical Specialties',
              url: this.$maybeSwitchDomain('shadowing')
            }
          ]
        },
        {
          id: 'tools-and-resources',
          title: 'Tools & Resources',
          to: '/tools-and-resources'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  background: var(--v-secondary-base);
  border: 1px solid var(--v-secondary-base);
}

.mymsc-mobile-menu {
  background: #54b6e7;
  max-width: 100%;
  width: 100%;
}
</style>
