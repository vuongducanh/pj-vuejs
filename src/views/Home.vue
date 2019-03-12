<template>
  <div id="home">
    <header-component></header-component>
    <header-search-component></header-search-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderComponent from "../components/header/header-component.vue";
import HeaderSearchComponent from "../components/header-search/header-search-component.vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import "./custom.scss";
import "./home.scss";
import axios from "axios";

@Component({
  components: {
    HeaderComponent,
    HeaderSearchComponent
  }
})
export default class Home extends Vue {
  posts: any = "";
  errors: any = [];

  created() {
    this.getdata();
  }

  getdata() {
    axios
      .get("http://demo4528318.mockable.io/demojson")
      .then(response => {
        this.posts = response.data;
      })
      .catch((e: any) => {
        this.errors.push(e);
      });
  }
}
</script>
