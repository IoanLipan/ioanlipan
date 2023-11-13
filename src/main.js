import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import router from './router';
import App from './App.vue';
import './style.css';
import './variables.css';
import titleMixin from './mixins/titleMixins';

const app = createApp(App);

app.mixin(titleMixin);

app.use(MotionPlugin);

app.use(router).mount('#app');
