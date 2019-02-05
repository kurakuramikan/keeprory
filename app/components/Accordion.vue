<template>
  <div class="accordion">
    <div class="accordion__header" @click="accordionToggle()">{{ title }}</div>
    <transition
      name="slide"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="accordion__body" v-show="isShowed">
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      isShowed: true
    };
  },
  methods: {
    accordionToggle() {
      this.isShowed = !this.isShowed;
    },
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = "100vh";
    },
    beforeLeave(el) {
      el.style.height = "100vh";
    },
    leave(el) {
      el.style.height = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
.accordion__header {
  height: 40px;
  padding: 0 16px;
  border-bottom: 1px solid #808080;
  line-height: 40px;
  font-size: 24px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 200ms;

  &:hover {
    background-color: #eee;
  }
}

.accordion__body {
  padding: 16px;
  height: 100vh;
  // After Romove
  background-color: #eee;
  overflow: hidden;
  transition: 500ms ease-in-out;
}

.slide {
  &-enter-active {
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-name: slideIn;
  }
  &-leave-active {
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-name: slideOut;
  }
}

@keyframes slideIn {
  0% {
    padding: 0;
    margin: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    opacity: 1;
  }
  100% {
    padding: 0;
    margin: 0;
    opacity: 0;
  }
}
</style>
