<template>
  <button v-if="mode === 'user'" @click="() => (mode = 'admin')">
    Войти как администратор
  </button>
  <button v-else @click="() => (mode = 'user')">Войти как пользователь</button>

  <div class="chat-window">
    <chatWindow :mode="mode" />
  </div>
</template>

<script>
import { ref } from "vue";
import chatWindow from "./components/Chat.vue";

export const mode = ref("user");

export default {
  name: "App",
  components: {
    chatWindow,
  },
  setup() {
    return {
      mode,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chat-window {
  width: 300px;
  height: 400px;
  padding: 3px;
  overflow: auto;
  border: red solid 5px;
  box-shadow: chocolate 4px 2px;
}
</style>
