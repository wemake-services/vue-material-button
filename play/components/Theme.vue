<template>
  <div class="material-button-example material-button-theme">
    <h1>Button's custom theme</h1>

    <MaterialButton
      :raised="true"
      :ripple="true">
        Click
    </MaterialButton>
  </div>
</template>

<script>
  import MaterialButton from '../../src/components/MaterialButton.vue'

  export default {
    name: 'material-button-theme',
    components: {
      MaterialButton
    }
  }
</script>

<style lang="sass">
  .material-button-theme {
    .material-button__component {
      .material-button {
        color: white;
        background-color: #F44336;

        &:disabled {
          color: grey;
          background-color: light-grey;
        }

        &:hover {
          background-color: #E53935;
        }
      }

      .ripple__component {
        background-color: #E57373;
      }
    }
  }
</style>
