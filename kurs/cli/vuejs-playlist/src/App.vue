<template>
  <div>
    <!--<form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>-->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form 1</button>
    <button v-on:click="component = 'form-two'">Show form 2</button>
  </div>
</template>

<script>
// import formHelper from './components/formHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    // 'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo,
  },
  data () {
    return {
     // title: "Dynamic slot title"
     component: 'form-two'
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">

</style>
