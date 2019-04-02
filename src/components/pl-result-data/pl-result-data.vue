<template>
  <div class="pl-result-data">
    <div class="pl-result-data__box pl-result-data__box-images"></div>
    <div class="pl-info">
      <div class="pl-result-data__box pl-result-data__box--300 box-fixed"></div>
      <div class="pl-result-data__box pl-result-data__box--180 box-fixed"></div>
      <div class="pl-result-data__box pl-result-data__box--125 box-fixed"></div>
      <div class="pl-result-data__box pl-result-data__box--180 box-fixed"></div>
    </div>
    <div class="pl-result-data__price-review"></div>
    <div class="pl-result-data__price-out"></div>
    <div class="pl-result-data__price-detail"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import "./pl-result-data.scss";

@Component
export default class PlResultDataComponent extends Vue {}
</script>
