<template>
  <div class="messages">
    <ChatsList :chats="chats" :selected="selectedChat" />
    <div class="messages__conversation">
      <router-view />
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

import ChatsList from '../components/ChatsList/ChatsList.vue';

export default {
  components: {
    ChatsList,
  },

  created() {
    this.fetchChats();
  },

  methods: {
    ...mapActions([
      'fetchChats',
    ]),
  },

  computed: {
    ...mapState([
      'chats',
    ]),

    selectedChat() {
      return +this.$route.params.id;
    },
  },
};
</script>

<style lang="stylus">
  .messages {
    display: flex;
    height: 100vh;

    &__conversation {
      flex: 1;
      background: #FFFFFF;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
  }
</style>
