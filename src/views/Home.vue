<template>
  <div id="home">
    <header-search-component></header-search-component>
    <header-filter-component></header-filter-component>
    <tab-filter-component></tab-filter-component>

    <div class="home__content-filter">
      <b-row>
        <b-col cols="3">
          <search-page-left-component></search-page-left-component>
        </b-col>
        <b-col cols="9">
          <availability-message-component></availability-message-component>
          <tab-filter-sort-component></tab-filter-sort-component>
          <result-dataComponent :dataDisplay="dataDisplay"></result-dataComponent>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderComponent from "../components/header/header-component.vue";
import HeaderSearchComponent from "../components/header-search/header-search-component.vue";
import HeaderFilterComponent from "../components/header-filter/header-filter.component.vue";
import TabFilterComponent from "../components/tab-filter/tab-filter.vue";
import SearchPageLeftComponent from "../components/search-page-left/search-page-left.vue";
import AvailabilityMessageComponent from '../components/availability-message/availability-message.vue';
import TabFilterSortComponent from '../components/tab-filter-sort/tab-filter-sort.vue';
import ResultDataComponent from '../components/result-data/result-data.vue';
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import "../assets/styles/custom.scss";
import "../assets/styles/common.scss";
import "./home.scss";
import axios from "axios";

@Component({
  components: {
    HeaderComponent,
    HeaderSearchComponent,
    HeaderFilterComponent,
    TabFilterComponent,
    SearchPageLeftComponent,
    AvailabilityMessageComponent,
    TabFilterSortComponent,
    ResultDataComponent
  }
})

export default class Home extends Vue {
  originData: any = "";
  dataDisplay: Object = {};


  created() {
    this.getData();
  }

  async getData() {
    const response = await axios.get('http://demo4528318.mockable.io/agodamock');

    this.originData = response.data;
    this.dataDisplay = this.originData;

    console.log('home',this.originData);
  }
}
</script>
