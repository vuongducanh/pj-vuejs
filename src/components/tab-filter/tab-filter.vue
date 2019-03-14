<template>
  <div class="tab-filter agoda-content">
    <div class="tab-filter__content">
      <ul>
        <li class="tab-filter__content-item" @click="activeTab='1'" :class="{active:activeTab==='1'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-all" type="radio" value="Mọi lựa chọn" v-model="valueTab">
            <label for="checkbox-tab-all">Mọi lựa chọn</label>
          </div>
        </li>

         <li class="tab-filter__content-item" @click="activeTab='2'" :class="{active:activeTab==='2'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-hotel" type="radio" value="Khách sạn" v-model="valueTab">
            <label for="checkbox-tab-hotel">Khách sạn</label>
          </div>
        </li>

         <li class="tab-filter__content-item" @click="activeTab='3'" :class="{active:activeTab==='3'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-family" type="radio" value="Dành cho gia đình" v-model="valueTab">
            <label for="checkbox-tab-family">Dành cho gia đình</label>
          </div>
        </li>

        <li class="tab-filter__content-item" @click="activeTab='4'" :class="{active:activeTab==='4'}">
          <div class="custom-checkbox custom--price">
            <input id="checkbox-tab-agoda-home" type="radio" value="Agoda Homes" v-model="valueTab">
            <label for="checkbox-tab-agoda-home">Agoda Homes</label>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./tab-filter.scss";

@Component
export default class TabFilterComponent extends Vue {
    activeTab: string = '1';
    valueTab: string = 'Mọi lựa chọn';
}
</script>