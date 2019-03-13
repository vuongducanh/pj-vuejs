<template>
  <div class="header-filter">
    <div class="header-filter__content agoda-container">
      <span class="header-filter__label">Chọn lọc</span>

      <div class="header-filter__popular display-inline-block">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <i class="ficon ficon-topic-hotel-highlight dropdown-icon--padding"></i>
            <span>Phổ biến</span>
          </template>
          <div>An item</div>
          <div>An item</div>
        </b-dropdown>
      </div>

      <div class="header-filter__price display-inline-block">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <i class="ficon ficon-promotion-right dropdown-icon--padding"></i>
            <span>Giá</span>
          </template>
          <div>An item</div>
          <div>An item</div>
        </b-dropdown>
      </div>

      <div class="header-filter__starrating display-inline-block">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <i class="ficon ficon-hotel-star dropdown-icon--padding"></i>
            <span>Xếp hạng sao</span>
          </template>
          <div>An item</div>
          <div>An item</div>
        </b-dropdown>
      </div>

      <div class="header-filter__area display-inline-block">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <i class="ficon ficon-neighborhood dropdown-icon--padding"></i>
            <span>Khu vực</span>
          </template>
          <div>An item</div>
          <div>An item</div>
        </b-dropdown>
      </div>

      <div class="header-filter__facilities display-inline-block">
        <b-dropdown id="ddown-left">
          <template slot="button-content">
            <i class="ficon ficon-solid-24hour-room-service dropdown-icon--padding"></i>
            <span>Tiện nghi</span>
          </template>
          <div>An item</div>
          <div>An item</div>
        </b-dropdown>
      </div>

      <div class="header-filter__reviewscores display-inline-block">
         <b-dropdown id="ddown-left">
          <template slot="button-content">
            <i class="ficon ficon-user dropdown-icon--padding"></i>
            <span class="text-long-dot">Đánh giá của khách</span>
          </template>
          <div>An item</div>
          <div>An item</div>
        </b-dropdown>
      </div>

      <div class="header-filter__more display-inline-block">
         <b-dropdown id="ddown-left">
          <template slot="button-content">
            <span>Thêm</span>
          </template>
          <div>An item</div>
          <div>An item</div>
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
export default class HeaderFilterComponent extends Vue {}
</script>