<template>
  <div class="header-filter">
    <div class="header-filter__content agoda-container">
      <span class="header-filter__label">Chọn lọc</span>

      <div class="header-filter__popular">
        <b-dropdown id="ddown-left" :class="{'value-select' : valuePopular.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-topic-hotel-highlight dropdown-icon--padding" v-if="valuePopular.length == 0"></i>
            <span class="count-select" v-if="valuePopular.length > 0">{{ valuePopular.length }}</span>
            <span>Phổ biến </span>
            <i class="ficon ficon-negative icon-close" v-if="valuePopular.length > 0" @click="valuePopular = []"></i>
          </template>
          <span class="filter-menu">Chọn lọc phổ biến ở Hà Nội</span>
          <ul>
            <li v-for="(itemPopolar, index) in dataFiler.Popular" :key="index" class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">{{ itemPopolar.name }} ({{ itemPopolar.count }})</span>
                <input type="checkbox" :value="itemPopolar.value" v-model="valuePopular">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__price">
        <b-dropdown id="ddown-left" :class="{'value-select' : valuePrice.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-promotion-right dropdown-icon--padding"></i>
            <span v-if="valuePrice.length === 0">Giá</span>
            <span v-if="valuePrice.length > 0" class="text-long-dot">{{ dataFiler.PriceFilterRange.CurrencyCode }} {{ priceMin }} - {{ dataFiler.PriceFilterRange.CurrencyCode }} {{ priceMax }}</span>
            <i class="ficon ficon-negative icon-close" v-if="valuePrice.length > 0" @click="(valuePrice = [])"></i>
          </template>
          <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
             <router-link tag="a" to="/" class="delete-value-filter" @click.native="(valuePrice = [])" v-show="valuePrice.length">XÓA</router-link>
          </div>
          <ul>
            <li class="filter-item-vue" v-for="(itemPriceFilter, index) in dataFiler.PriceFilterRange.BinsPrices" :key="index">
              <label class="container-checkbox">
                <span class="label-checkbox">{{ itemPriceFilter.Min }} {{ dataFiler.PriceFilterRange.CurrencyCode }}
                  <span v-if="index < dataFiler.PriceFilterRange.BinsPrices.length -1">- {{ itemPriceFilter.Max }} {{ dataFiler.PriceFilterRange.CurrencyCode }}</span>
                  ({{ itemPriceFilter.count }})
                </span>
                <input type="checkbox" :value="itemPriceFilter.Min + '-' + itemPriceFilter.Max" v-model="valuePrice">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__star-rating">
        <b-dropdown id="ddown-left" :class="{'value-select' : valueStart.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-hotel-star dropdown-icon--padding"></i>
            <span class="number-start">{{ valueStart[valueStart.length-1] }}</span>
            <span :class="{ 'width-text' : valueStart > 0}">Xếp hạng sao</span>
            <i class="ficon ficon-negative icon-close" v-if="valueStart.length > 0" @click="(valueStart = [])"></i>
          </template>
          <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
             <router-link tag="a" to="/" class="delete-value-filter"  @click.native="(valueStart = [])" v-show="valueStart.length">XÓA</router-link>
          </div>
          <ul>
            <li class="filter-item-vue" v-for="(ItemStart, index) in dataFiler.StarRating" :key="index">
              <label class="container-checkbox">
                <span class="label-checkbox-start ficon" :class="ItemStart.icon"></span>
                <span class="number-start">{{ ItemStart.name }} ({{ ItemStart.count }})</span>
                <input type="checkbox" :value="ItemStart.id" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__area">
        <b-dropdown id="ddown-left" :class="{'value-select' : valueArea.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-neighborhood dropdown-icon--padding" v-if="valueArea.length == 0"></i>
            <span class="count-select" v-if="valueArea.length > 0">{{ valueArea.length }}</span>
            <span>Khu vực</span>
            <i class="ficon ficon-negative icon-close" v-if="valueArea.length > 0" @click="(valueArea = [])"></i>
          </template>
          <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
            <router-link tag="a" to="/" class="delete-value-filter"  @click.native="(valueArea = [])" v-show="valueArea.length">XÓA</router-link>
          </div>
          <ul>
            <li class="filter-item-vue" v-for="(itemArea, index) in dataFiler.Area" :key="index">
              <label class="container-checkbox">
                <span class="label-checkbox">{{ itemArea.name }} ({{ itemArea.count }})</span>
                <input type="checkbox" :value="itemArea.name" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__reviewscores">
        <b-dropdown id="ddown-left" :class="{ 'value-select' : valueReview != 0 }">
          <template slot="button-content">
            <i class="ficon ficon-user dropdown-icon--padding" v-if="valueReview === 0"></i>
            <span class="count-select" v-if="valueReview != 0">1</span>
            <span class="text-long-dot">Đánh giá của khách</span>
          </template>
           <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
             <router-link tag="a" to="/" class="delete-value-filter"  @click.native="deleteFilterReview" v-show="valueReview != 0">XÓA</router-link>
          </div>
          <ul>
            <li class="filter-item-vue" v-for="(itemReview, index) in dataFiler.ReviewScores" :key="index" @click="activeReview = itemReview.id" :class="{ active:activeReview === itemReview.id }">
              <label class="container-checkbox-radio">
                <span class="label-checkbox">{{ itemReview.title }} {{ itemReview.name }} ({{ itemReview.count }})</span>
                <input type="radio" class="toggle-checkbox" :value="itemReview.id" v-model.number="valueReview">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__more">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <span>Thêm</span>
          </template>
          <ul>
            <li class="filter-item-vue" v-for="(itemRoomAmen, index) in dataFiler.RoomAmenities.ItemList" :key="index">
              <label class="container-checkbox">
                <span class="label-checkbox">{{ itemRoomAmen.Name }}</span>
                <input type="checkbox" :value="itemRoomAmen.FilterData.itemId" v-model="RoomAmenities">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__text-search">
        <input type="text" placeholder="Từ khóa hay tên khách sạn">
        <i class="ficon ficon-search-box text-search-icon"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DATA_HEADER_FILTER } from "@/constants/data.js";
import "./header-filter.component.scss";

@Component
export default class HeaderFilterComponent extends Vue {
  valuePopular: Array<any> = [];
  valueArea: Array<any> = [];
  valuePrice: Array<any> = [];
  valueStart: Array<any> = [];
  RoomAmenities: Array<any> = [];
  valueReview: number = 0;
  activeReview: number = 0;
  sliderValue: number = 50;

  valueDuringYourStay: Array<boolean> = [];

  priceMin: number = 0;
  priceMax: number = 0;

  dataFiler: any = DATA_HEADER_FILTER;

  mounted() {
    this.stickyHeader();
  }

  stickyHeader() {
    var header = <HTMLElement> document.querySelector(".header-filter");
    var sticky = header.offsetTop;

    window.onscroll = function() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  deleteFilterReview() {
    this.valueReview = 0;
    this.activeReview = 0;
  }

  updated() {
    this.getMinMaxPrice();
    this.getvalueArea();
    this.getvalueStart();
    this.getValueReview();
  }

  getMinMaxPrice() {
    let fomatValuePrice: Array<any> = [];
    let newArray: Array<any> = [];
    let valueObjectFilterPrice: any = {};
    let price: Object = {};

    for (let i = 0; i < this.valuePrice.length; i++) {
      fomatValuePrice =  fomatValuePrice.concat(this.valuePrice[i].split('-'))
    }
    newArray = [...new Set(fomatValuePrice)].sort((a, b) => a - b);

    this.priceMin = newArray[0];
    this.priceMax = newArray[newArray.length-1];


     price = {
       conditionPrice: {
          minPrice: this.priceMin,
          maxPrice: this.priceMax,
       }
     }

     this.$parent.$emit('updateFilter', price);
  }

  getvalueArea () {
    let valueArea : Object = {};

    valueArea = {
      conditionArea: this.valueArea
    }

    this.$parent.$emit('updateFilter', valueArea);
  }

  getValueReview() {
    let value: object = {}

    value = {
      conditionReview : this.valueReview
    }

    this.$parent.$emit("updateFilter", value)
  }

  getvalueStart() {
    let start: Object ={}

    start = {
      conditionStart : this.valueStart
    }

    this.$parent.$emit("updateFilter", start);
  }
}
</script>
