<template>
  <div class="header-search">
    <div class="header-search__content">
      <div class="header-search__content-city">
        <label for="single-select" class="icon-search">
          <img src="../../assets/images/svg/search-icon.svg">
        </label>
        <vue-single-select
          :options="optionCity"
          :required="true"
          value="city"
          v-model="valueSelect"
          placeholder="Nhập điểm du lịch hoặc tên khách sạn">
        </vue-single-select>
      </div>

      <div class="header-search__content-startdate">
        <v-datepicker :value="state.startDate" :language="vi">
          <div slot="afterDateInput" class="calender-header">
            <img src="../../assets/images/svg/check-in.svg" class="icon-check-in">
            <span class="input-day">Thứ Năm</span>
          </div>
        </v-datepicker>
      </div>

      <div class="header-search__content-endate">
        <v-datepicker :value="state.endDate" :language="vi">
          <div slot="afterDateInput" class="calender-header">
            <img src="../../assets/images/svg/check-in.svg" class="icon-check-in">
            <span class="input-day">Thứ sáu</span>
          </div>
        </v-datepicker>
      </div>
      <div class="header-search__content-addroom">
        <img src="../../assets/images/svg/users.svg" alt="icon-user" class="icon-user">
        <label for="input-room" class="label-addroom">2 người lớn</label>
        <span class="number-room">1 Phòng</span>
        <input type="text" readonly="true" id="input-room">
      </div>
      <div class="header-search__content-search">
        <input type="button" value="Tìm Kiếm">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueSingleSelect from "vue-single-select";
import Datepicker from "vuejs-datepicker";
import { HEADER_OPTION_CITY } from "@/constants/data.js";
import { vi } from "vuejs-datepicker/dist/locale";

import "./header-search-component.scss";

@Component({
  components: {
    "vue-single-select": VueSingleSelect,
    "v-datepicker": Datepicker
  }
})
export default class HeaderSearchComponent extends Vue {
  optionCity: Array<any> = HEADER_OPTION_CITY;
  valueSelect: any = [];
  items: Array<any> = [];
  state: Object = {
    startDate: new Date(),
    endDate: new Date(2019, 4, 12)
  };
  vi: any = vi;
}
</script>
