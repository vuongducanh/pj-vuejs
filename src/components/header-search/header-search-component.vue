<template>
  <div class="header-search">
    <div class="header-search__content">
      <div class="header-search__content-city">
        <vue-single-select
          :options="optionCity"
          :required="true"
          value="city"
          v-model="valueSelect"
          placeholder="Nhập điểm du lịch hoặc tên khách sạn"
        ></vue-single-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueSingleSelect from "vue-single-select";

import "./header-search-component.scss";

@Component({
  components: {
    "vue-single-select": VueSingleSelect
  }
})
export default class HeaderSearchComponent extends Vue {
  optionCity: Array<any> = ['Seoul','Gangnam','Dongdaemun','VietNam'];
  valueSelect: any = [];

  created() {
    this.$root.$on("mess", function(data: any) {
      console.log("header-search = ", data);
    });
  }
}
</script>
