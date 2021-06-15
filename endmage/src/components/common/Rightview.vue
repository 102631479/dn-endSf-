<template>
  <transition name="view">
    <div class="rightView" v-show="rightViewIsShow">
      <div class="viewMain">
        右侧view
        <div class="closeRightView" @click="closeRightView">X</div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        rightViewIsShow: false
      }
    },
    methods: {
      closeRightView() {
        this.rightViewIsShow=false
      }
    },
  };
</script>
<style scoped>
  .rightView {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background-color: #fff;
    z-index: 500;
    line-height: 100vh;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);

  }

  .viewMain {
    position: relative;
    height: 100vh;
    padding: 20px;
  }

  .closeRightView {
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .view-enter,
  .view-leave-to {
    transform: translate3d(100%, 0, 0)
  }

  .view-leave,
  .view-enter-to {
    transform: translate3d(0, 0, 0)
  }

  .view-enter-active,
  .view-leave-active {
    transition: all .2s
  }
</style>