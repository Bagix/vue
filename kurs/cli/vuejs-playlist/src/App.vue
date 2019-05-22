<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
    <ninjas2></ninjas2>
  </div>
</template>

<script>
import Ninjas2 from './Ninjas2.vue' // Komponent lokalny, tylko w tym komponenćie

export default {
  components: {
    'ninjas2': Ninjas2
  },
  data () {
    return {
      title: 'Ninja App'
    }
  },
}
</script>

<style lang="scss">

</style>
