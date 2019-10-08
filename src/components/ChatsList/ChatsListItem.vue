<template>
  <router-link
    :to="'/' + chat.id"
    :class="{'chat-list-item': true, 'chat-list-item--selected': selected }"
  >
    <div class="chat-list-item__header">
      <div class="chat-list-item__title">
        {{ chat.subject }}
      </div>
      <div class="chat-list-item__date">
        {{ chat.created | date }}
      </div>
    </div>
    <div class="chat-list-item__message">
      {{ chat.message }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    selected: Boolean,
    chat: Object,
  },

  filters: {
    date(dateStr) {
      return new Date(dateStr)
        .toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    },
  },
};
</script>

<style lang="stylus">
  .chat-list-item {
    display: block;
    text-decoration: none;

    height: 100px;
    border-bottom: 1px solid #E9EDF2;
    padding: 18px 20px 22px
    border-left: 2px solid transparent;

    &--selected {
      background: #FFFFFF;
      border-left-color: #398BFF;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: #35383D;
    }

    &__date {
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #7D8790;
    }

    &__message {
      font-size: 13px;
      line-height: 20px;
      color: #7D8790;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
</style>
