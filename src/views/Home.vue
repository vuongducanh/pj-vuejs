<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  posts: any =  '';
  errors: any = [];

   created() {
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
