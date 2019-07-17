<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import {bus} from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    changeTitle: function() {
      //this.$emit('changeTitle', 'Vue Wizards');
      this.title = 'Vue Wizard';
      bus.$emit('titleChanged', 'Vue Wizards');
    }
  }
}
</script>


<style lang="scss" scoped>
header {
  background: lightgreen;
  padding: 1rem;
  h1 {
    color: #222;
    text-align: center;
  }
}
</style>
