<template>
  <div class="header">
    <div class="header__item-left">
      <div class="header__logo">
        <a href="#">
          <img
            src="https://cdn6.agoda.net/images/MVC/default/agoda-logo.svg"
            alt="Agoda"
            class="header__logo-link"
          >
        </a>
      </div>
      <ul class="header__link">
        <li class="header__link-item">
          <a href="#">Chỗ ở</a>
        </li>
         <li class="header__link-item">
          <a href="#">Chuyến bay</a>
        </li>
         <li class="header__link-item">
          <a href="#">Taxi sân bay</a>
        </li>
         <li class="header__link-item">
          <a href="#">Ưu đãi cho gia đình</a>
        </li>
         <li class="header__link-item">
          <a href="#">agoda Homes</a>
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
          <a href="#" class="header__group-signup" @click="sentData()">
            Tạo tài khoản
          </a>
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

  sentData() {
    this.data++;
    this.$root.$emit('mess',  this.data);
  }
}
</script>
