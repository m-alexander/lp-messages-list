<template>
  <div class="conversation-messages">
    <div class="conversation-messages__items" ref="container">
      <ConversationMessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :self="message.author === 'vasiliy'"
      />
    </div>
  </div>
</template>

<script>
import ConversationMessageItem from './ConversationMessageItem.vue';

export default {
  components: {
    ConversationMessageItem,
  },

  props: ['messages'],

  watch: {
    messages() {
      this.$nextTick(() => {
        const element = this.$refs.container;
        element.scrollTop = element.scrollHeight;
      });
    },
  },
};
</script>

<style lang="stylus">
  .conversation-messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    &__items {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
</style>
