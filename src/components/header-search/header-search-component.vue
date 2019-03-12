<template>
  <div class="header-search">
    <div class="header-search__content">
      <vue-single-select
        :options="['apple','banana','cherry','tomato']"
        :required="true"
        value="aaaa">
        </vue-single-select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueSingleSelect from "vue-single-select";

import "./header-search-component.scss";

@Component({
  components: {
    'vue-single-select': VueSingleSelect
  }
})
export default class HeaderSearchComponent extends Vue {
  created() {
    this.$root.$on('mess', function(data: any) {
      console.log("header-search = ",data);
    })
  }
}
</script>
