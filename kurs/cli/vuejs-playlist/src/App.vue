<template>
  <!--<add-blog></add-blog>-->
  <show-blogs></show-blogs>

</template>

<script>
//import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  components: {
    //'add-blog': addBlog,
    'show-blogs': showBlogs,
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
