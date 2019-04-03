<template>
  <div class="result-data">
    <router-link tag="a" to="/" class="result-data__content">
      <div class="result-data__gallery">
        <div class="result-data__gallery-big" :style="{'background-image': 'url(' + homeItem.MainPhotoRetinaUrl + ')'}">
          <ul>
            <li class="text-Badge-list" v-if="homeItem.IsBreakfastIncluded">Có ăn Sáng</li>
          </ul>
        </div>
        <div class="result-data__gallery-thumbnial">
          <div class="result-data__gallery-thumbnial-item"
          v-for="(itemThumbnial,index) in homeItem.galleryContainerProps.mainImages.slice(0, 10)"
          :key="index"
          :style="{'background-image': 'url(' + itemThumbnial.imageItemProps.url + '?s=100x100' + ')'}">
          </div>
        </div>
      </div>
      <div class="result-data__content-info">
        <div class="result-data__hotelinfo">
          <div class="result-data__title">
            <h3 class="result-data__hotelinfo-title">
              <span class="hotel-gca" v-if="homeItem.AwardYear && (homeItem.AwardYear != 0)">
                <i class="ficon ficon-gca-wreath-left"></i>
                  <span>{{ homeItem.AwardYear }}</span>
                <i class="ficon ficon-gca-wreath-right"></i>
              </span>
              {{ homeItem.HotelDisplayName }}
            </h3>
          </div>
          <div class="result-data__hotelinfo-agoda-home" v-if="homeItem.PropertyType === 'Apartment'">
            <span class="agoda-homes-title"><span class="ficon agoda-homes-badge"></span>{{ homeItem.AgodaHomesText }}</span>
            <span class="agoda-homes-text">{{ homeItem.AccommodationType }}</span>
          </div>
          <div class="result-data__hotelinfo-starAreaLine">
            <span class="start-rating">
              <i class="ficon orange-yellow" :class="'ficon-' + homeItem.StarRatingCss"></i>
            </span>
            <span class="areacity-name">
              <i class="ficon ficon-pin-star"></i>
              <span class="areacity-text">{{ homeItem.LocationFullText }}</span>
            </span>
          </div>
          <div class="result-data__hotelinfo-locationPills">
            <ul>
              <li v-for="(itemLocationPills, index) in homeItem.locationHighlightFeatures.PillList" :key="index">
               <span v-if="itemLocationPills.Name">{{ itemLocationPills.Name }}</span>
              </li>
            </ul>
          </div>
          <div class="result-data__hotelinfo-pill-wrapper">
            <ul>
              <li v-if="homeItem.IsBreakfastIncluded">An sáng</li>
              <li v-if="homeItem.IsBNPLDuringYourStay">Thanh toán tại nơi ở</li>
            </ul>
          </div>
          <div class="result-data__hotelinfo-noCreditCard" v-if="homeItem.IsNoCreditCardRequired">
            <i class="ficon ficon-credit-card-required" ></i>
            <span>Không cần thẻ tín dụng</span>
          </div>
          <div class="result-data__hotelinfo-guestRecommended" v-if="homeItem.guestRecommended">
            <i class="ficon" :class="homeItem.guestRecommended.icon"></i>
            <span>{{ homeItem.guestRecommended.text }}</span>
          </div>
        </div>
      </div>
      <div class="result-data__price">
        <div class="result-data__price-item">
           <div class="result-data__price-review">
           <div class="score-text">{{ homeItem.ReviewText }}</div>
           <div class="count">
             <strong> {{ homeItem.NumberOfReviewLocale }}</strong>
             <span>nhận xét</span>
           </div>
         </div>
         <div class="result-data__price-number">
           <i class="ficon ficon-review-icon review-score-number"></i>
           <span class="number">{{ homeItem.ReviewScoreFormatted }}</span>
         </div>
        </div>

        <div class="result-data__price-box">
          <div class="limited-rooms" v-if="homeItem.LimitedRoomsDiscountMessage">
              {{ homeItem.LimitedRoomsDiscountMessage }}
          </div>
          <div class="price-drop" v-if="homeItem.LastMinutePriceDrop">
            <i class="ficon ficon-price-drop"></i>
            <span>{{ homeItem.LastMinutePriceDrop.promotionText }}</span>
            </div>
          <div class="per-night-text">Giá mỗi đêm rẻ nhất từ</div>
          <span class="multi-crossout" v-if="homeItem.FormattedCrossedOutPrice && (homeItem.FormattedCrossedOutPrice != 0)">{{ homeItem.FormattedCrossedOutPrice }}</span>
          <div class="price-final">{{ homeItem.FormattedDisplayPrice }} <span class="price-currency">{{ homeItem.DisplayCurrency }}</span></div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import "./result-data.scss";

@Component
export default class ResultDataComponent extends Vue {
  @Prop({ type: Object }) homeItem: any;
}
</script>
