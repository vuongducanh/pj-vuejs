<template>
  <div class="header">
    <div class="header__item-left">
      <div class="header__logo">
        <router-link :tag="dataHeader.logo.tag" :to="dataHeader.logo.logoLink" v-if="dataHeader.logo">
          <img :src="dataHeader.logo.logoImages" class="header__logo-link">
        </router-link>
      </div>
      <ul class="header__link">
        <li class="header__link-item" v-for="(item, index) in dataHeader.linkItem" :key="index">
          <i v-if="item.icon" class="ficon ficon-agoda-homes icon-agoda-home"></i>
          <router-link :tag="item.tag" :to="item.link">{{item.text}}</router-link >
        </li>
      </ul>
      <div class="header__EllipsisLinkContainer">
        <span>...</span>
      </div>
    </div>

    <div class="header__item-right">
      <ul class="header__subgroup">
        <li class="header__group">
          <div class="header__icon-language"></div>
          <div class="header__currency-trigger">đ</div>
        </li>
        <li class="header__group">
          <button class="header__group-signin">
            Đăng nhập
          </button>
          <router-link tag="a" to="/" class="header__group-signup"> Tạo tài khoản</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DATA_HEADER } from "@/constants/data.js";
import "./header-component.scss";

@Component
export default class HeaderComponent extends Vue {
  dataHeader: any = DATA_HEADER;
}
</script>
