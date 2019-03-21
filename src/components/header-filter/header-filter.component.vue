<template>
  <div class="header-filter">
    <div class="header-filter__content agoda-container">
      <span class="header-filter__label">Chọn lọc</span>

      <div class="header-filter__popular display-inline-block">
        <b-dropdown id="ddown-left" :class="{'value-select' : valueArea.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-topic-hotel-highlight dropdown-icon--padding" v-if="valueArea.length == 0"></i>
            <span class="count-select" v-if="valueArea.length > 0">{{valueArea.length}}</span>
            <span>Phổ biến </span>
            <i class="ficon ficon-negative icon-close" v-if="valueArea.length > 0" @click="(valueArea = [])"></i>
          </template>
          <span class="filter-menu">Chọn lọc phổ biến ở Hà Nội</span>
          <ul>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Khu Phố Cổ (172)</span>
                <input type="checkbox" value="Phố Cổ" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Khu Quận Hoàn Kiếm (182)</span>
                <input type="checkbox" value="Quận Hoàn Kiếm" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Thanh toán tại nơi ở (820)</span>
                <input type="checkbox" value="1" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Thanh toán tại nơi ở (820)</span>
                <input type="checkbox" value="2" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">phù hợp cho gia đình/trẻ em (245)</span>
                <input type="checkbox" value="3" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__price display-inline-block">
        <b-dropdown id="ddown-left" :class="{'value-select' : valuePrice.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-promotion-right dropdown-icon--padding"></i>
            <span v-if="valuePrice.length === 0">Giá</span>
            <span v-if="valuePrice.length > 0" class="text-long-dot">₫ {{priceMin }} - ₫ {{priceMax}}</span>
            <i class="ficon ficon-negative icon-close" v-if="valuePrice.length > 0" @click="(valuePrice = [])"></i>
          </template>
          <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
            <a href="javascript:void(0)" @click.prevent.self="(valuePrice = [])" v-show="valuePrice.length" class="delete-value-filter">XÓA</a>
          </div>
          <ul>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">0 ₫ - 920.000 ₫ (17)</span>
                <input type="checkbox" value="0-920000" v-model="valuePrice">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">920.000 ₫ - 1.800.000 ₫ (77)</span>
                <input type="checkbox" value="920000-1800000" v-model="valuePrice">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">1.800.000 ₫ - 2.700.000 ₫ (31)</span>
                <input type="checkbox" value="1800000-2700000" v-model="valuePrice">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">2.700.000 ₫ - 3.700.000 ₫ (10)</span>
                <input type="checkbox" value="2700000-3700000" v-model="valuePrice">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">3.700.000 ₫ + (5)</span>
                <input type="checkbox" value="3700000-2147483647" v-model="valuePrice">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__star-rating display-inline-block">
        <b-dropdown id="ddown-left" :class="{'value-select' : valueStart.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-hotel-star dropdown-icon--padding"></i>
            <span class="number-start">{{valueStart[valueStart.length-1]}}</span>
            <span>Xếp hạng sao</span>
          </template>
          <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
            <a href="javascript:void(0)" @click.prevent.self="(valueStart = [])" v-show="valueStart.length" class="delete-value-filter">XÓA</a>
          </div>
          <ul>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox-start ficon ficon-star-5 star-orange"></span>
                <span class="number-start">(64)</span>
                <input type="checkbox" value="5" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox-start ficon ficon-star-4 star-orange"></span>
                <span class="number-start">(50)</span>
                <input type="checkbox" value="4" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox-start ficon ficon-star-3 star-orange"></span>
                <span class="number-start">(341)</span>
                <input type="checkbox" value="3" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox-start ficon ficon-star-2 star-orange"></span>
                <span class="number-start">(242)</span>
                <input type="checkbox" value="2" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox-start ficon ficon-star-1 star-orange"></span>
                <span class="number-start">(98)</span>
                <input type="checkbox" value="1" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox-start"></span>
                <span class="number-start">Chưa xếp hạng (293)</span>
                <input type="checkbox" value="0" v-model="valueStart">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__area display-inline-block">
        <b-dropdown id="ddown-left" :class="{'value-select' : valueArea.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-neighborhood dropdown-icon--padding" v-if="valueArea.length == 0"></i>
            <span class="count-select" v-if="valueArea.length > 0">{{valueArea.length}}</span>
            <span>Khu vực</span>
            <i class="ficon ficon-negative icon-close" v-if="valueArea.length > 0" @click="(valueArea = [])"></i>
          </template>
          <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
            <a href="javascript:void(0)" @click.prevent.self="(valueArea = [])" v-show="valueArea.length" class="delete-value-filter">XÓA</a>
          </div>
          <ul>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Phố Cổ (34)</span>
                <input type="checkbox" value="Phố Cổ" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Quận Hoàn Kiếm (67)</span>
                <input type="checkbox" value="Quận Hoàn Kiếm" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Quận Ba Đình (45)</span>
                <input type="checkbox" value="Quận Ba Đình" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Quận Cầu Giấy (24)</span>
                <input type="checkbox" value="Quận Cầu Giấy" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Quận Tây Hồ (27)</span>
                <input type="checkbox" value="Quận Tây Hồ" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Quận Hai Bà Trưng (16)</span>
                <input type="checkbox" value="Quận Hai Bà Trưng" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">My Dinh (10)</span>
                <input type="checkbox" value="My Dinh" v-model="valueArea">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__reviewscores display-inline-block">
        <b-dropdown id="ddown-left" :class="{'value-select' : valueReview.length > 0 }">
          <template slot="button-content">
            <i class="ficon ficon-user dropdown-icon--padding" v-if="valueReview.length == 0"></i>
            <span class="count-select" v-if="valueReview.length > 0">1</span>
            <span class="text-long-dot">Đánh giá của khách</span>
          </template>
           <div class="filter-menu">
            <span class="filter-text">Giá phòng (1 đêm)</span>
            <a href="javascript:void(0)" @click.prevent.self="deleteFilterReview" v-show="valueReview.length" class="delete-value-filter">XÓA</a>
          </div>
          <ul>
            <li
              class="filter-item-vue"
              @click="activeReview='1'"
              :class="{active:activeReview==='1'}"
            >
              <label class="container-checkbox-radio">
                <span class="label-checkbox">9+Trên cả tuyệt vời (253)</span>
                <input type="radio" class="toggle-checkbox" value="Trên cả tuyệt vời" v-model="valueReview">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li
              class="filter-item-vue"
              @click="activeReview='2'"
              :class="{active:activeReview==='2'}"
            >
              <label class="container-checkbox-radio">
                <span class="label-checkbox">Xuất sắc (737)</span>
                <input type="radio" class="toggle-checkbox" value="Xuất sắc" v-model="valueReview">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li
              class="filter-item-vue"
              @click="activeReview='3'"
              :class="{active:activeReview==='3'}"
            >
              <label class="container-checkbox-radio">
                <span class="label-checkbox">Rất tốt (1031)</span>
                <input type="radio" class="toggle-checkbox" value="Rất tốt" v-model="valueReview">
                <span class="checkmark ficon"></span>
              </label>
            </li>
            <li
              class="filter-item-vue"
              @click="activeReview='4'"
              :class="{active:activeReview==='4'}"
            >
              <label class="container-checkbox-radio">
                <span class="label-checkbox">6+Hài lòng (1136)</span>
                <input type="radio" class="toggle-checkbox" value="Hài lòng" v-model="valueReview">
                <span class="checkmark ficon"></span>
              </label>
            </li>
          </ul>
        </b-dropdown>
      </div>

      <div class="header-filter__more display-inline-block">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <span>Thêm</span>
          </template>
          <ul>
            <li class="filter-item-vue">
              <label class="container-checkbox">
                <span class="label-checkbox">Khu Phố Myeong-dong</span>
                <input type="checkbox" value="ducanh">
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
import "./header-filter.component.scss";

@Component
export default class HeaderFilterComponent extends Vue {
  valueArea: Array<any> = [];
  valuePrice: Array<any> = [];
  valueStart: Array<any> = [];
  valueReview: string = "";
  activeReview: number = 0;

  priceMin: number = 0;
  priceMax: number = 0;

  deleteFilterReview() {
    this.valueReview = '';
    this.activeReview = 0;
  }

  updated() {
    this.getMinMaxPrice();
    this.getvalueArea();
    this.getvalueStart();
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

  getvalueStart() {
    let start: Object ={}

    start = {
      conditionStart : this.valueStart
    }

    this.$parent.$emit("updateFilter", start);
  }
}
</script>
