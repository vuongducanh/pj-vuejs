<template>
  <div class="header-search">
    <span>aa</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./header-search-component.scss";

@Component
export default class HeaderSearchComponent extends Vue {
  created() {
    this.$root.$on('mess', function(data: any) {
      console.log("header-search = ",data);
    })
  }
}
</script>
