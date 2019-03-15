<template>
  <div id="wrapper">
    <header-component></header-component>
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/header-component.vue';
import MainLayout from '@/components/Layout/MainLayout';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainLayout,
  },
}
</script>

