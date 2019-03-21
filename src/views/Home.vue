<template>
  <div id="home" sticky-container>
    <header-search-component></header-search-component>
    <header-filter-component v-sticky sticky-offset="offset" sticky-side="top"></header-filter-component>
    <tab-filter-component></tab-filter-component>

    <div class="home__content-filter">
      <b-row>
        <b-col cols="3">
          <search-page-left-component></search-page-left-component>
        </b-col>
        <b-col cols="9">
          <availability-message-component></availability-message-component>
          <tab-filter-sort-component></tab-filter-sort-component>
          <div class="home__result-data" v-for="(itemData, index) in dataDisplay" :key="index" v-show="index < 4">
            <result-dataComponent :homeItem="itemData"></result-dataComponent>
          </div>
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
import AvailabilityMessageComponent from "../components/availability-message/availability-message.vue";
import TabFilterSortComponent from "../components/tab-filter-sort/tab-filter-sort.vue";
import ResultDataComponent from "../components/result-data/result-data.vue";
import { URL_API } from "@/constants";
import Sticky from "vue-sticky-directive";
Vue.use(Sticky);

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
  dataDisplay: Array<any> = [];
  prices: Object = {};
  checkdataFilter: Object = {};
  saveDataFilter: Object = {};

  created() {
    this.getData();

    this.$on("updateFilter", (data:any) => {
      this.saveDataFilter = Object.assign(this.saveDataFilter , data);
      this.updateFilter(this.saveDataFilter);
    });
  }

  async getData() {
    const response = await axios.get("http://demo4528318.mockable.io/agodamock");
    this.originData = response.data;
    this.dataDisplay = this.originData.ResultList;
  }

  updateFilter(conditions) {
    function checkFilter(this: any, element) {
      return this.checkPrice(conditions.conditionPrice, element.DisplayPrice) &&
      this.checkArea(conditions.conditionArea, element.AreaName) &&
      this.checkbreakfastFree(conditions.conditionBreakFastFree, element.IsBreakfastIncluded) &&
      this.checkStart(conditions.conditionStart, element.StarRating)
    }

    this.dataDisplay = this.originData.ResultList.filter(checkFilter.bind(this));
    this.checkTabSort(conditions.conditionFilterSort, this.dataDisplay);
  }

  checkPrice(conditionPrice, price) {
    if (!conditionPrice || !conditionPrice.minPrice || !conditionPrice.maxPrice) {
      return true;
    }

    if (parseInt(conditionPrice.minPrice) <= price && price <= parseInt(conditionPrice.maxPrice)) {
      return true;
    }

    return false;
  }

  checkArea(conditionArea, areaName) {
    if (!conditionArea || !conditionArea.length) {
      return true;
    }

    for (let i = 0; i < conditionArea.length; i++) {
      if (conditionArea[i].toLowerCase() === areaName.toLowerCase() ) {
        return true;
      }
    }

    return false;
  }

  checkbreakfastFree(conditionBreakFastFree, valuebreakfastFree) {
    if (!conditionBreakFastFree) {
      return true;
    }

    if (conditionBreakFastFree && valuebreakfastFree) {
      return true;
    }

    return false;
  }

  checkStart(conditionStart, start) {
    if (!conditionStart || !conditionStart.length) {
      return true;
    }

    for (let i = 0; i < conditionStart.length; i++) {
      if (parseInt(conditionStart[i]) === Math.round(start) || parseInt(conditionStart[i]) === start) {
        return true;
      }
    }

     return false;
  }

  checkTabSort(conditionFilterSort, dataSort) {
    if (conditionFilterSort === "search-sort-price") {
      dataSort =  dataSort.sort((a, b) => parseInt(a.FormattedDisplayPrice.split('.').join("")) - parseInt(b.FormattedDisplayPrice.split('.').join("")));
    }

    if ( conditionFilterSort ==="search-sort-review") {
      dataSort =  dataSort.sort((a, b) => parseInt(b.ReviewScoreFormatted.split('.').join("")) - parseInt(a.ReviewScoreFormatted.split('.').join("")));
    }
  }
}
</script>
