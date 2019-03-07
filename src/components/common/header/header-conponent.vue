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
          <a href="#">Agoda Homes</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./header-component.scss";

export default class HeaderComponent extends Vue {}
</script>
