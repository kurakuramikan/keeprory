<template>
  <section class="container">
    <draggable
      v-model="tagsRow1"
      :options="{animation: 100,group: 'people'}"
      @start="drag=true"
      @end="drag=false"
    >
      <div v-for="(tag, index) in tagsRow1" :key="index">
        <div class="tag" :style="{ backgroundColor: tag.bgColor }">
          <p>{{ tag.body }}</p>
        </div>
      </div>
    </draggable>
    <draggable
      v-model="tagsRow2"
      :options="{animation: 100,group: 'people'}"
      @start="drag=true"
      @end="drag=false"
    >
      <div v-for="(tag, index) in tagsRow2" :key="index">
        <div class="tag" :style="{ backgroundColor: tag.bgColor }">
          <p>{{ tag.body }}</p>
        </div>
      </div>
    </draggable>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";

export default {
  components: {
    draggable
  },
  data() {
    return {
      tagsRow1: [
        {
          body: "これは１列目の赤色の付箋です",
          bgColor: "#f2b9c6"
        },
        {
          body: "これは１列目の青色の付箋です",
          bgColor: "#c6deed"
        },
        {
          body: "これは１列目の黄色の付箋です",
          bgColor: "#edf374"
        },
        {
          body: "これは１列目の緑色の付箋です",
          bgColor: "#bde4bb"
        }
      ],
      tagsRow2: [
        {
          body: "これは２列目の赤色の付箋です",
          bgColor: "#f2b9c6"
        },
        {
          body: "これは２列目の青色の付箋です",
          bgColor: "#c6deed"
        },
        {
          body: "これは２列目の黄色の付箋です",
          bgColor: "#edf374"
        },
        {
          body: "これは２列目の緑色の付箋です",
          bgColor: "#bde4bb"
        }
      ]
    };
  }
  // computed: {
  //   ...mapGetters("tags", ["tags"])
  // }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 32px;
}

.tag {
  width: 240px;
  height: 240px;
  margin: 16px;
  padding: 16px;
  background-color: #c6deed;
}
</style>
