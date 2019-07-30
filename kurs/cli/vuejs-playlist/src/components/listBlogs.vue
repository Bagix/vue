<template>
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  components: {

  },
  data () {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {

  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(data) {
      this.blogs = data.body.slice(0,10);
    });
  },
  computed: {

  },
  filters: {
    toUppercase(value) { // inny sposób zapisu
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style lang="scss">

</style>
