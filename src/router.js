import Vue from 'vue';
import Router from 'vue-router';
import Messages from './views/Messages.vue';
import ConversationContainer from './views/ConversationContainer.vue';
import ChatNotSelected from './views/ChatNotSelected.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Messages,
      children: [
        {
          path: '',
          component: ChatNotSelected,
        },
        {
          path: ':id',
          component: ConversationContainer,
        },
      ],
    },
  ],
});
