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
  .material-button-theme { // local class

    // Customizing the button:

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

      // Customizing the ripple:

      .material-ripple__component {
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>
