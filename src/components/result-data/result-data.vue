<template>
  <div class="result-data">
    <a href="#" class="result-data__content" v-for="(homeItem, index) in dataDisplay.ResultList" :key="index">
      <div class="result-data__content-images"></div>
      <div class="result-data__content-info">
        <ul class="result-data__hotelinfo">
          <li>
            <h3 class="result-data__hotelinfo-title">
              <span class="hotel-gca" v-if="homeItem.AwardYear && (homeItem.AwardYear != 0)">
                <i class="ficon ficon-gca-wreath-left"></i>
                  <span>{{homeItem.AwardYear}}</span>
                <i class="ficon ficon-gca-wreath-right"></i>
              </span>
              {{homeItem.HotelDisplayName}}
            </h3>
          </li>
          <li class="result-data__hotelinfo-starAreaLine">
            <span class="start-rating">
              <i class="ficon orange-yellow" :class="'ficon-' + homeItem.StarRatingCss"></i>
            </span>
            <span class="areacity-name">
              <i class="ficon ficon-pin-star"></i>
              <span class="areacity-text">{{homeItem.AreaName}},{{homeItem.CityName}} - Xem trên bản đồ </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="result-data__content-price"></div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import "./result-data.scss";

@Component
export default class ResultDataComponent extends Vue {
  @Prop({ type: Object }) dataDisplay: any;
}
</script>