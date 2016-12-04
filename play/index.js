import { play } from 'vue-play'

import Constructor from './components/Constructor.vue'
import Theme from './components/Theme.vue'

play('MaterialButton', module)
  .add('constructor', Constructor)
  .add('theme', Theme)
