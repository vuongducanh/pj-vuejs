<template>
  <div class="tab-filter-sort">
    <div class="tab-filter-sort__content">
      <ul class="tab-filter-sort__content-list">
        <li class="tab-filter-sort__content-item tab-filter-sort__content-header">
            <span>sắp xếp theo</span>
        </li>
        <li class="tab-filter-sort__content-item" @click="activeTab='1'" :class="{active:activeTab==='1'}">
          <div class="custom-checkbox">
            <input id="checkbox-tab-recommended" type="radio" value="search-sort-recommended" v-model="valueTabSort">
            <label for="checkbox-tab-recommended">gợi ý</label>
          </div>
        </li>

         <li class="tab-filter-sort__content-item" @click="activeTab='2'" :class="{active:activeTab==='2'}">
          <div class="custom-checkbox">
            <input id="checkbox-tab-price" type="radio" value="search-sort-price" v-model="valueTabSort">
            <label for="checkbox-tab-price">Giá thấp nhất trước</label>
          </div>
        </li>

        <li class="tab-filter-sort__content-item" @click="activeTab='3'" :class="{active:activeTab==='3'}">
          <div class="custom-checkbox">
            <input id="checkbox-tab-agoda-rating" type="radio" value="search-sort-guest-rating" v-model="valueTabSort">
            <label for="checkbox-tab-agoda-rating">Các nhận xét hàng đầu</label>
          </div>
        </li>

        <li class="tab-filter-sort__content-item" @click="activeTab='4'" :class="{active:activeTab==='4'}">
          <div class="custom-checkbox">
            <input id="checkbox-tab-secret-deals" type="radio" value="search-sort-secret-deals" v-model="valueTabSort">
            <label for="checkbox-tab-secret-deals">Ưu đãi bí mật</label>
          </div>
        </li>

      </ul>
    </div>
    <div class="tab-filter-sort__barcontainer">
      <i class="ficon ficon-couple"></i>
      <span>Những nơi ở này chúng tôi lựa chọn dành riêng cho bạn.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./tab-filter-sort.scss";

@Component
export default class TabFilterSortComponent extends Vue {
  activeTab: string = '1';
  valueTabSort: string = 'search-sort-recommended';

  updated() {
    console.log('valueTabSort', this.valueTabSort);
  }
}
</script>