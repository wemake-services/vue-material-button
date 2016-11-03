<template>
  <div class="material-button-example">
    <a href="#">back</a>
    <h1>Button playground</h1>
    <h2>Check our console for click events</h2>

    <div class="material-button-example-playground">
      <div class="material-button-example-playground-form">
        <div class="material-button-example-playground-field">
          <label for="id">Text</label>
          <input type="text" id="text" v-model="text">
        </div>

        <div class="material-button-example-playground-field">
          <label for="raised">Raised</label>
          <input type="checkbox" id="raised" v-model="raised">
        </div>

        <div class="material-button-example-playground-field">
          <label for="ripple">Ripple</label>
          <input type="checkbox" id="ripple" v-model="ripple">
        </div>

        <div class="material-button-example-playground-field">
          <label for="large">Large</label>
          <input type="checkbox" id="large" v-model="large">
        </div>

        <div class="material-button-example-playground-field">
          <label for="disable">Disabled</label>
          <input type="checkbox" id="disable" v-model="disabled">
        </div>
      </div>

      <div class="material-button-example-wrapper">
        <MaterialButton
          :raised="raised"
          :ripple="ripple"
          :large="large"
          :disabled="disabled"
          @click="handleClick">
          {{ text }}
        </MaterialButton>
      </div>
  </div>
</template>

<script>
  import MaterialButton from '../src/components/MaterialButton.vue'

  export default {
    name: 'material-button-example',
    data () {
      return {
        raised: true,
        ripple: true,
        large: false,
        disabled: false,
        text: 'Click'
      }
    },
    methods: {
      handleClick (e) {
        console.log(e)
      }
    },
    components: {
      MaterialButton
    }
  }
</script>

<style lang="scss">
  .material-button-example {
    max-width: 350px;
    margin: 0 auto;

    .material-button-example-playground-form {
      margin: 30px 0;
    }
  }
</style>
