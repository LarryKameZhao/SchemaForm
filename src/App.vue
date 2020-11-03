<template>
  <div>
    <h1>{{ username }}</h1>
    <h1>{{ userInfo }}</h1>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      name: "name"
    });
    const username = ref("username");
    const userInfo = computed(() => {
      return `username:${username.value}`;
    });
    setTimeout(() => {
      username.value += "1";
    }, 1000);
    return {
      username,
      userInfo
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
