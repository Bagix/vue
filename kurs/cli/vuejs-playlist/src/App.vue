<template>
  <div>
    <!--<add-blog></add-blog>-->
    <!-- <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>

</template>

<script>
//import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header2 from './components/header2.vue';

export default {
  components: {
    //'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header2,
  },
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Lucida Sans', sans-serif;
}
</style>
