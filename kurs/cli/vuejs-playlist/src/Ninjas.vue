<template>
  <div>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
    <ninjas2></ninjas2>
  </div>
</template>

<script>
import Ninjas2 from './Ninjas2.vue' // Komponent lokalny, tylko w tym komponencie
export default {
  components: {
    'ninjas2': Ninjas2
  },
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Luigi']
    }
  },
}
</script>

<style lang="scss" scoped>
ul > li {
  color: goldenrod;
}

</style>