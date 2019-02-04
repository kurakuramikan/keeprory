<template>
  <div>
    <the-header/>
    <nuxt class="container"/>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";

export default {
  components: {
    TheHeader
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #fafaef;
}
</style>
