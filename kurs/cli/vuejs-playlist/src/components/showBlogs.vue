<template>
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
      <article>{{ blog.content | snippet}}</article>
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
    this.$http.get("https://vue-playlist-tutorial.firebaseio.com/posts.json")
    .then(function(data) {
      return data.json();
    }).then(function(data) {
      var blogsArray = [];
      for(let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  },
  computed: {
    // filteredBlogs: function() {
    //   return this.blogs.filter((blog) => {
    //     return blog.title.match(this.search);
    //   });
    // }
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
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
}
</style>
