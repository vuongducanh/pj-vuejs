<template>
  <div class="tab-filter agoda-content">
    <div class="tab-filter__content">
      <ul class="tab-filter__content-list">
        <li class="tab-filter__content-item" @click="activeTab='1'" :class="{active:activeTab==='1'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-all" type="radio" value="all" v-model="valueTab">
            <label for="checkbox-tab-all">Mọi lựa chọn</label>
          </div>
        </li>

         <li class="tab-filter__content-item" @click="activeTab='2'" :class="{active:activeTab==='2'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-hotel" type="radio" value="Hotel" v-model="valueTab">
            <label for="checkbox-tab-hotel">Khách sạn</label>
          </div>
        </li>

        <li class="tab-filter__content-item" @click="activeTab='4'" :class="{active:activeTab==='4'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-agoda-home" type="radio" value="Apartment" v-model="valueTab">
            <label for="checkbox-tab-agoda-home">Agoda Homes</label>
          </div>
        </li>

      </ul>

      <div class="tab-filter__toggle">
        <span class="tab-filter__toggle-text">Chế độ gia đình</span>
        <i class="ficon ficon-info-with-circle tab-filter__toggle-icon"></i>
        <label class="switch">
          <input type="checkbox" v-model="switchOnOff">
          <span class="slider round"></span>
        </label>
        <span class="tab-switch-text" v-if="!switchOnOff">Tắt</span>
        <span class="tab-switch-text" v-else>Bật</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./tab-filter.scss";

@Component
export default class TabFilterComponent extends Vue {
    activeTab: string = '1';
    valueTab: string = 'all';
    switchOnOff: boolean = false;

    updated() {
      let datafilterTab : Object = {}

      datafilterTab = {
        conditionFilterTab: this.valueTab
      }

      this.$parent.$emit("updateFilter", datafilterTab);
    }
}
</script>
