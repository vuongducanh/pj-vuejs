<template>
  <div id="wrapper">
    <header-component></header-component>
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";
import HeaderComponent from '@/components/header/header-component.vue';
import MainLayout from '@/components/Layout/MainLayout';

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainLayout,
  },
}
</script>

