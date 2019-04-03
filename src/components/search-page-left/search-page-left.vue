<template>
  <div class="search-left">
    <router-link tag="a" to="/" class="search-left__map">
      <img class="search-left__map-paper" src="https://cdn6.agoda.net/images/MAPS-1213/default/bkg-map-entry.svg">
      <img  class="search-left__map-pin" src="https://cdn6.agoda.net/images/MAPS-1213/default/img-map-pin-red.svg">
      <div class="search-left__map-caption">TRÊN BẢN ĐỒ</div>
    </router-link>
    <div class="search-left__urgency">
      <i class="ficon ficon-hotel-people-looking search-left__urgency-icon"></i>
      <span class="search-left__urgency-text">
        <b class="blue">{{ listCity.countPassenger }}</b>
        du khách hiện đang dùng bản đồ Hà Nội để kiếm phòng!
      </span>
    </div>

    <div class="search-left__banner-filter">
      <i class="ficon ficon-solid-breakfast fiteritem-prefix"></i>
      <label class="container-checkbox">
        <span class="label-checkbox">Xem nơi ở có bữa sáng miễn phí</span>
        <input type="checkbox" value="true" v-model="valuebreakfastFree">
        <span class="checkmark ficon"></span>
      </label>
    </div>

    <div class="search-left__recommended">
      <span class="search-left__recommended-title">
       {{ listCity.title }}
      </span>

      <ul class="search-left__list">
        <li class="search-left__list-item" v-for="(item, index) in listCity.items" :key="index">
          <img :src="item.image">
          <div class="search-left__list-description">
            <h4>{{ item.city }}</h4>
            <p>{{ item.count }} {{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DATA_HEADER_FILTER } from "@/constants/data.js";
import "./search-page-left.scss";

@Component
export default class SearchPageLeftComponent extends Vue {
  valuebreakfastFree: boolean = false;
  isBreakfast: Object = {};
  listCity: any = DATA_HEADER_FILTER.FilterListCity

  updated() {
    this.isBreakfast = {
      conditionBreakFastFree: this.valuebreakfastFree
    }

    this.$parent.$emit("updateFilter", this.isBreakfast);
  }
}
</script>
