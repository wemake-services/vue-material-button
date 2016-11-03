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
        <slot></slot>

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
        const classes = []

        if (this.raised) {
          classes.push('material-button--raised')
        }

        if (this.large) {
          classes.push('material-button--large')
        }

        return classes
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
      },
      large: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    },
    components: {
      MaterialRipple
    }
  }
</script>

<style lang="scss">
  @import '~vue-material-ripple/style.css';

  .material-button__component {
    .material-button {
      color: #fff;
      background-color: #1B5E20;

      text-decoration: none;
      text-align: center;
      letter-spacing: .5px;
      cursor: pointer;

      outline: none;
      border: none;
      border-radius: 2px;

      display: inline-block;
      position: relative;
      height: 36px;
      line-height: 36px;

      padding: 0 2rem;
      margin: 0;
      overflow: hidden;

      vertical-align: middle;
      -webkit-tap-highlight-color: transparent;
      transition: .2s ease-out;

      &.material-button--raised {
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);

        &:hover {
          box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
        }
      }

      &.material-button--large {
        height: 54px;
        line-height: 56px;
      }

      &:disabled {
        background-color: #DFDFDF !important;
        box-shadow: none !important;
        color: #9F9F9F !important;
        cursor: default;
      }

      &:hover {
        background-color: #217227;
      }
    }
  }
</style>
