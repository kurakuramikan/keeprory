<template>
  <section class="container">
    <accordion title="Keep">
      <div slot="body">
        <div class="tag"/>
      </div>
    </accordion>
    <accordion title="Problem">
      <div slot="body">
        <div class="tag"/>
      </div>
    </accordion>
    <accordion title="Try">
      <div slot="body">
        <div class="tag"/>
      </div>
    </accordion>
  </section>
</template>

<script>
import Accordion from "~/components/Accordion.vue";

export default {
  components: {
    Accordion
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  padding: 16px 32px;
}

.tag {
  width: 280px;
  height: 280px;
  margin: 16px;
  background-color: #bde4bb;
}
</style>
