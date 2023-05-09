import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ArcoVue, { Message } from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
Message._context = app._context;
document.body.setAttribute('arco-theme', 'dark');