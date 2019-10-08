<template>
  <div :class="{'conversation-message-item': true, 'conversation-message-item--self': self }">
    <div class="conversation-message-item__message">
      {{ message.text }}
    </div>

    <div class="conversation-message-item__footer">
      <div class="conversation-message-item__title">
        {{ message.author }}
      </div>
      <div class="conversation-message-item__date">
        {{ message.created | datetime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    self: Boolean,
    message: Object,
  },

  filters: {
    datetime(dateStr) {
      return new Date(dateStr)
        .toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        });
    },
  },
};
</script>

<style lang="stylus">
  .conversation-message-item {
    width: 380px;
    margin: 20px 40px;

    &__message {
      font-size: 14px;
      line-height: 20px;
      color: #474E54;

      padding: 22px 22px 15px 22px;

      background: #F6F7F9;
      border-radius: 8px 8px 8px 0;
    }

    &__footer {
      display: flex;
      align-items: flex-end;
      margin-top: 10px;
    }

    &__title {
      font-size: 13px;
      font-weight: bold;
      color: #000000;
      margin-right: 12px;
    }

    &__date {
      font-size: 10px;
      color: #B7C0C8;
    }

    &--self {
      align-self: flex-end;

      & ^[0]__message {
        background: #E9F5F4;
        border-radius: 8px 8px 0 8px;
      }

      & ^[0]__footer {
        justify-content: flex-end;
      }

    }
  }
</style>
