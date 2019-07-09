<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Naruto', 'Sakura', 'Sasuke']
    }
  },
}
</script>

<style lang="scss" scoped>
ul > li {
  color: palevioletred;
}

</style>