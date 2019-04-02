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
          <div v-for="(item, i) in 5" :key="'A' + i">
             <pl-result-data-component v-if="!loadDataFinish"></pl-result-data-component>
          </div>
          <div v-for="(itemData, index) in dataDisplay" :key="index" class="home__result-data load-lazy" :class="[index < 2 ? 'show'  : 'hide']"  >
            <result-dataComponent :homeItem="itemData" v-if="loadDataFinish"></result-dataComponent>
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
import PlResultDataComponent from"../components/pl-result-data/pl-result-data.vue";
import ResultDataComponent from "../components/result-data/result-data.vue";
import { URL_API } from "@/constants";

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
    ResultDataComponent,
    PlResultDataComponent
  }
})

export default class Home extends Vue {
  originData: any = "";
  dataDisplay: Array<any> = [];
  prices: Object = {};
  checkdataFilter: Object = {};
  saveDataFilter: Object = {};

  loadDataFinish: boolean = false;

  created() {
    this.getData();

    this.$on("updateFilter", (data:any) => {
      this.saveDataFilter = Object.assign(this.saveDataFilter , data);
      this.updateFilter(this.saveDataFilter);
    });
  }

  updated() {
    if (this.loadDataFinish) {
      var lazyloadcomponent = document.querySelectorAll(".load-lazy");
      var lazyloadThrottleTimeout;

      function lazyload() {
          var scrollTop = window.pageYOffset;
          lazyloadcomponent.forEach(function (element: any) {
            if ((element.offsetTop + 400) < (window.innerHeight + scrollTop)) {
              element.classList.remove('hide');
            }
          });
          if (lazyloadcomponent.length == 0) {
            document.removeEventListener("scroll", lazyload);
          }
      }
      document.addEventListener("scroll", lazyload);
    }
}

  getData() {
    axios
    .get('http://demo4528318.mockable.io/agodamock')
    .then(response => {
      this.originData = response.data;
      this.dataDisplay = this.originData.ResultList;
      this.loadDataFinish = true;
    })
  }

  updateFilter(conditions) {
    function checkFilter(this: any, element) {
      return this.checkPrice(conditions.conditionPrice, element.DisplayPrice) &&
      this.checkArea(conditions.conditionArea, element.AreaName) &&
      this.checkbreakfastFree(conditions.conditionBreakFastFree, element.IsBreakfastIncluded) &&
      this.checktabFilter(conditions.conditionFilterTab, element.PropertyType) &&
      this.checkStart(conditions.conditionStart, element.StarRating) &&
      this.checkReview(conditions.conditionReview, element.ReviewScore)
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
      if (parseInt(conditionStart[i]) === Math.floor(start) || parseInt(conditionStart[i]) === start) {
        return true;
      }
    }

     return false;
  }

  checktabFilter(conditionFilterSort, propertyType) {
    if (!conditionFilterSort || conditionFilterSort === "all") {
      return true;
    }

    if (conditionFilterSort === propertyType) {
      return true;
    }

    return false;
  }

  checkReview(conditionReview, numberReview) {
    if (!conditionReview) {
      return true;
    }

    if (numberReview >= conditionReview) {
      return true;
    }

    return false;
  }

  // checkDuringStay(conditionDuring, haveDuringYourStay) {
  //   if (!conditionDuring) {
  //     return true;
  //   }

  //   if(conditionDuring[0] == haveDuringYourStay.IsBNPLDuringYourStay) {
  //     return true;
  //   }

  //   return false;
  // }

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
