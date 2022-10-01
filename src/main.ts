import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createI18n } from 'vue-i18n';
import { messages } from './locales';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  fallbackLocale: 'pt-BR',
  locale: 'pt-BR',
  messages,
});

app.use(router);
app.use(i18n);

app.mount('#app');

export { app };
