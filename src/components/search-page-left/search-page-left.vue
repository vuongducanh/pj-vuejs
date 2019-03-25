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
        <b class="blue">89</b>
        du khách hiện đang dùng bản đồ Seoul để kiếm phòng!
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
       Những khách tìm phòng ở Hà Nội cũng cân nhắc các thành phố sau
      </span>

      <ul class="search-left__list">
        <li class="search-left__list-item">
          <img src="https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=354x200&p=true">
          <div class="search-left__list-description">
            <h4>Hồ Chí Minh</h4>
            <p>8.454 nơi ở có phòng</p>
          </div>
        </li>

        <li class="search-left__list-item">
          <img src="https://pix6.agoda.net/geo/city/17160/1_17160_02.jpg?s=354x200&p=true">
          <div class="search-left__list-description">
            <h4>Sapa</h4>
            <p>538 nơi ở có phòng</p>
          </div>
        </li>

        <li class="search-left__list-item">
          <img src="https://pix6.agoda.net/geo/city/17182/1_17182_02.jpg?s=354x200&p=true">
          <div class="search-left__list-description">
            <h4>Hạ Long</h4>
            <p>1.077 nơi ở có phòng</p>
          </div>
        </li>

        <li class="search-left__list-item">
          <img src="https://pix6.agoda.net/geo/city/3738/1_3738_02.jpg?s=354x200&p=true">
          <div class="search-left__list-description">
            <h4>Huế</h4>
            <p>546 nơi ở có phòng</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./search-page-left.scss";

@Component
export default class SearchPageLeftComponent extends Vue {
  valuebreakfastFree: boolean = false;
  isBreakfast: Object = {};

  updated() {
    this.isBreakfast = {
      conditionBreakFastFree: this.valuebreakfastFree
    }

    this.$parent.$emit("updateFilter", this.isBreakfast);
  }
}
</script>
