# vue-material-button

[![Build Status](https://travis-ci.org/wemake-services/vue-material-button.svg?branch=master)](https://travis-ci.org/wemake-services/vue-material-button) [![Coverage Status](https://coveralls.io/repos/github/wemake-services/vue-material-button/badge.svg?branch=master)](https://coveralls.io/github/wemake-services/vue-material-button?branch=master)

Simple implementation of Material Input with no dependencies.

## Installation

```bash
npm install vue-material-button
```

## Usage

```vue
<template>
  <div class="material-button-example">
    <MaterialButton
      :raised="raised"
      :ripple="ripple"
      :large="large"
      :disabled="disabled"
      @click="handleClick">
        Click me
    </MaterialButton>
  </div>
</template>

<script>
  import MaterialButton from 'vue-material-button'

  export default {
    name: 'material-button-example',
    data () {
      return {
        raised: true,
        ripple: true,
        large: false,
        disabled: false
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
```

For more examples, please check [`/play`](https://github.com/wemake-services/vue-material-button/tree/master/play) folder and the [project's website](http://wemake.services/vue-material-button).
