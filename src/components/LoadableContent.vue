<template>
  <div class="loadable-content">
    <div v-if="loading" class="loadable-content__spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>




<style lang="stylus">

  .loadable-content {

    position: relative;
    height: 100%;

    &__spinner {
      position: absolute;
      display: flex;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;

      div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border-radius: 50%;
        animation: Spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-width: 6px;
        border-style: solid;
        border-color: #7d8790 transparent transparent transparent;

        &:nth-child(1) {
          animation-delay: -0.45s;
        }

        &:nth-child(2) {
          animation-delay: -0.3s;
        }

        &:nth-child(3) {
          animation-delay: -0.15s;
        }
      }
    }
  }


  @keyframes Spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
