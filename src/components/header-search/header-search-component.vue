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
      <div class="header-search__content-startdate">
        <v-datepicker :value="state.startDate"></v-datepicker>
      </div>
      <div class="header-search__content-endate">
        <v-datepicker :value="state.endDate"></v-datepicker>
      </div>
      <div class="header-search__content-addroom">
        <input type="text">
      </div>
      <div class="header-search__content-search">
        <button>Tìm Kiếm</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueSingleSelect from "vue-single-select";
import Datepicker from "vuejs-datepicker";

import "./header-search-component.scss";

@Component({
  components: {
    "vue-single-select": VueSingleSelect,
    "v-datepicker": Datepicker
  }
})
export default class HeaderSearchComponent extends Vue {
  optionCity: Array<any> = ["Seoul", "Gangnam", "Dongdaemun", "VietNam"];
  valueSelect: any = [];
  state: Object = {
    startDate: new Date(2019, 3, 12),
    endDate: new Date(2019, 4, 12)
  };

  created() {
    this.$root.$on("mess", function(data: any) {
      console.log("header-search = ", data);
    });
  }
}
</script>
