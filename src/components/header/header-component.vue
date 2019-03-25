<template>
  <div class="header">
    <div class="header__item-left">
      <div class="header__logo">
        <router-link tag="a" to="/">
          <img
            src="https://cdn6.agoda.net/images/MVC/default/agoda-logo.svg"
            alt="Agoda"
            class="header__logo-link"
          >
        </router-link>
      </div>
      <ul class="header__link">
        <li class="header__link-item">
           <router-link tag="a" to="/">Chỗ ở</router-link >
        </li>
         <li class="header__link-item">
          <router-link tag="a" to="/">Chuyến bay</router-link >
        </li>
         <li class="header__link-item">
          <router-link tag="a" to="/">Taxi sân bay</router-link >
        </li>
         <li class="header__link-item">
          <router-link tag="a" to="/">Ưu đãi cho gia đình</router-link >
        </li>
         <li class="header__link-item">
          <i class="ficon ficon-agoda-homes icon-agoda-home"></i>
          <router-link tag="a" to="/">agoda Homes</router-link >
        </li>
      </ul>
      <div class="header__EllipsisLinkContainer">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="header__item-right">
      <ul class="header__subgroup">
        <li class="header__group">
          <div class="header__language"></div>
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
import "./header-component.scss";

@Component
export default class HeaderComponent extends Vue {
  data: number = 2;
}
</script>
