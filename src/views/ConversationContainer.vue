<template>
  <LoadableContent :loading="isLoading">
    <Conversation
      :messages="messages"
      :disabled="isLoading"
      @message="onAddMessage"
    />
  </LoadableContent>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Conversation from '../components/Conversation/Conversation.vue';
import LoadableContent from '../components/LoadableContent.vue';

export default {
  components: {
    Conversation,
    LoadableContent,
  },

  methods: {
    ...mapActions([
      'fetchMessages',
      'addMessage',
    ]),

    onAddMessage(message) {
      this.addMessage({
        message,
        chatId: +this.$route.params.id,
      });
    },
  },

  computed: {
    ...mapState([
      'messages',
      'isLoading',
    ]),
  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler(id) {
        this.fetchMessages(+id);
      },
    },
  },
};
</script>
