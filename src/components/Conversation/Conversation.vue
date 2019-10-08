<template>
  <div class="conversation">
    <div class="conversation__messages">
      <ConversationMessages :messages="messages" />
    </div>

    <div class="conversation__input-box">
      <InputBox :disabled="disabled" @submit="$emit('message', $event)" />
    </div>
  </div>
</template>

<script>
import ConversationMessages from './ConversationMessages.vue';
import InputBox from './InputBox.vue';

export default {
  components: {
    ConversationMessages,
    InputBox,
  },

  props: ['messages', 'disabled'],
};
</script>

<style lang="stylus">
.conversation {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  width: 100%;

  &__messages {
    flex: 1;
    max-height: calc(100% - 80px);
  }
}
</style>
