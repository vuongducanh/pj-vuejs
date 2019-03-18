<template>
  <div class="result-data">
    <a href="#" class="result-data__content" v-for="(homeItem, index) in dataDisplay" :key="index">
      <div class="result-data__gallery">
        <div class="result-data__gallery-big" :style="{'background-image': 'url(' + homeItem.MainPhotoRetinaUrl + ')'}">
        </div>
        <div class="result-data__gallery-thumbnial">
          <div class="result-data__gallery-thumbnial-item"
          v-for="(itemThumbnial,index) in homeItem.galleryContainerProps.mainImages.slice(0, 10)"
          :key="index"
          :style="{'background-image': 'url(' + itemThumbnial.imageItemProps.url + ')'}">
          </div>
        </div>
      </div>
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
              <span class="areacity-text">{{homeItem.LocationFullText}}</span>
            </span>
          </li>
          <li class="result-data__hotelinfo-locationPills">
            <ul>
              <li v-for="(itemLocationPills, index) in homeItem.locationHighlightFeatures.PillList" :key="index">
               <span v-if="itemLocationPills.Name">{{itemLocationPills.Name}}</span>
              </li>
            </ul>
          </li>
          <li class="result-data__hotelinfo-pill-wrapper">
            <ul>
              <li v-if="homeItem.IsBreakfastIncluded"> An sáng </li>
              <li> Thanh toán tại nơi ở</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="result-data__price">
        <div class="result-data__price-item">
           <div class="result-data__price-review">
           <div class="score-text">{{homeItem.ReviewText}}</div>
           <div class="count">
             <strong> {{homeItem.NumberOfReviewLocale}}</strong>
             <span>nhận xét</span>
           </div>
         </div>
         <div class="result-data__price-number">
           <i class="ficon ficon-review-icon review-score-number"></i>
           <span class="number">{{homeItem.ReviewScoreFormatted}}</span>
         </div>
        </div>

        <div class="result-data__price-box">
          <div class="per-night-text" v-if="homeItem.PriceDetail">{{homeItem.PriceDetail.PriceViewText}}</div>
          <span class="multi-crossout" v-if="homeItem.FormattedCrossedOutPrice && (homeItem.FormattedCrossedOutPrice != 0)">{{homeItem.FormattedCrossedOutPrice}}</span>
          <div class="price-final">{{homeItem.FormattedDisplayPrice}} <span class="price-currency">{{homeItem.DisplayCurrency}}</span></div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import "./result-data.scss";

@Component
export default class ResultDataComponent extends Vue {
  @Prop({ type: Array }) dataDisplay: any;
}
</script>
