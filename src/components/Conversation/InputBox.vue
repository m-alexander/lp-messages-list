<template>
  <form class="input-box" @submit.prevent="onSubmit">
    <input
      class="input-box__input"
      type="text"
      placeholder="Введите текст..."
      v-model="message"
      ref="input"
    />
    <button class="input-box__send" :disabled="disabled">
      <svg width="22" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 17.26c.01.35.37.6.7.46l20.17-8.26a.5.5 0 000-.92L.7.28a.5.5 0 00-.7.46v5.82c0
         .25.19.46.44.5L11.82 8.5c.58.08.58.92 0 1L.44 10.94a.5.5 0 00-.44.5v5.82z" fill="#fff"/>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },

  data: () => ({
    message: '',
  }),

  methods: {
    onSubmit() {
      if (this.message && !this.disabled) {
        this.$emit('submit', this.message);
        this.message = '';
        this.$refs.input.focus();
      }
    },
  },
};
</script>

<style lang="stylus">
  .input-box {
    display: flex;

    &__input {
      flex: 1;
      font-size: 14px;
      padding: 30px;
      border: none;
      border-top: solid 1px #e9edf2;
    }

    &__send {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 80px;
      height: 80px;
      background: #398bff;
      border: none;

      cursor: pointer;

      &:disabled {
        background: #e9edf2;
      }
    }
  }
</style>
