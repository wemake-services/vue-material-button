<template>
  <div class="material-button__component">
    <button
      class="material-button"
      :class="computedClasses"
      :id="id"
      :name="name"
      :type="type"
      :disabled="disabled"
      @click="handleClick">
        <span class="material-button-content">
          <slot></slot>
        </span>

        <MaterialRipple v-if="ripple"></MaterialRipple>
    </button>
  </div>
</template>

<script>
  import MaterialRipple from 'vue-material-ripple'

  export default {
    name: 'material-button',
    computed: {
      computedClasses () {
        return {
          'material-button--raised': this.raised,
          'material-button--disabled': this.disabled,
          'material-button--active': !this.disabled
        }
      }
    },
    methods: {
      handleClick () {
        this.$emit('click')
      }
    },
    props: {
      id: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      }, // material specific props
      raised: {
        type: Boolean,
        default: false
      },
      ripple: {
        type: Boolean,
        default: false
      }
    },
    components: {
      MaterialRipple
    }
  }
</script>

<style lang="sass">
  @import '~vue-material-ripple/dist/style.css';

  // Variables

  // Sizes
  $button-height: 36px;

  // Fonts
  $font-size: 16px;

  .material-button__component {
    .material-button {
      font-size: $font-size;
      text-decoration: none;
      text-align: center;
      letter-spacing: .5px;
      cursor: pointer;

      outline: none;
      border: none;
      border-radius: 2px;

      display: inline-block;
      position: relative;
      height: $button-height;
      line-height: $button-height;

      padding: 0 2em;
      margin: 0;
      overflow: hidden;

      vertical-align: middle;
      -webkit-tap-highlight-color: transparent;
      transition: .2s ease-out;

      // States:

      &.material-button--active {
        &.material-button--raised {
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);

          &:hover {
            box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
          }
        }
      }

      &.material-button--disabled {
        cursor: default;
      }
    }
  }

  // Theme:

  // Colors
  $color-white: #fff;
  $color-green: #1B5E20;
  $color-green-light: #217227;

  $color-grey: #9F9F9F;
  $color-grey-light: #DFDFDF;

  .material-button__component {
    .material-button {
      color: $color-white;
      background-color: $color-green;

      &.material-button--disabled {
        color: $color-grey;
        background-color: $color-grey-light;
      }

      &.material-button--active:hover {
        background-color: $color-green-light;
      }
    }
  }
</style>
