<template>
  <div class="home">
    <header-component></header-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/header/header-conponent.vue';
import axios from 'axios';

@Component({
  components: {
    HeaderComponent
  },
})
export default class Home extends Vue {
  posts: any =  '';
  errors: any = [];

   created() {
    this.getdata()
  }

  getdata() {
     axios.get('http://demo4528318.mockable.io/demojson')
    .then(response => {
      this.posts = response.data;
			console.log('TCL: Home -> privatecreated -> this.posts', this.posts)
    })
    .catch((e: any) => {
      this.errors.push(e);
    });
  }
}
</script>
