<template>
  <div class="chat-list">

    <div class="chat-list__header">
      Сообщения
      <span class="chat-list__counter">{{ chatsCount }}</span>
    </div>

    <div class="chat-list__items">
      <ChatListItem
        v-for="chat in chats"
        :key="chat.id"
        :selected="chat.id === selected"
        :chat="chat"
      />
    </div>

  </div>
</template>

<script>
import ChatListItem from './ChatsListItem.vue';


export default {
  components: {
    ChatListItem,
  },

  props: ['chats', 'selected'],

  computed: {
    chatsCount() {
      return this.chats ? this.chats.length : 0;
    },
  },
};
</script>

<style lang="stylus">
  .chat-list {
    width: 300px;
    background: #f3f6f8;

    height: 100%;
    overflow: auto;

    &__header {
      font-size: 14px;
      line-height: 20px;
      color: #656b77;
      padding: 24px 20px 16px;
      border-bottom: 1px solid #e9edf2;
    }

    &__counter {
      margin-left: 10px;
      color: #d2d8de;
    }
  }
</style>
