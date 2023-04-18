import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import main from './main.js'
import selector from './components/selector.js'
import rolAprendiz from './components/rolAprendiz.js';
import rolInstructor from './components/rolInstructor.js';

const app = createApp(main);
app.component(selector.name, selector);
app.component(rolAprendiz.name, rolAprendiz)
app.component(rolInstructor.name, rolInstructor)
app.mount('#app')


