<script>
import { ref } from "vue";

export default {
  name: "addingNewDialogPieceForm",
  emits: ["add"],
  setup() {
    const isAdding = ref(false);
    const userReplica = ref("");
    const botReplica = ref("");
    return {
      isAdding,
      userReplica,
      botReplica,
    };
  },
};
</script>

<template>
  <button
    v-if="isAdding === false"
    @click="
      () => {
        isAdding = true;
        userReplica = '';
        botReplica = '';
      }
    "
    class="italic"
  >
    Добавить ответ пользователя
  </button>
  <div v-else class="flex">
    <div>
      <div>Введите реплику пользователя:</div>
      <input v-model="userReplica" />
      <div>Введите реплику бота:</div>
      <input v-model="botReplica" />
    </div>
    <div class="width30">
      <button
        @click="
          () => {
            isAdding = false;
            $emit('add', userReplica, botReplica);
          }
        "
        class="green max-width"
      >
        Сохранить
      </button>
      <button @click="isAdding = false" class="red max-width">Отменить</button>
    </div>
  </div>
</template>

<style scoped>
.italic {
  font-style: italic;
}
.flex {
  display: flex;
  gap: 3px;
  margin: 3px 0;
  text-align: left;
  align-items: flex-end;
}
.width30 {
  width: 30%;
}
.red {
  background: rgba(255, 0, 0, 0.2);
}
.green {
  background: rgba(0, 128, 0, 0.2);
}
.max-width {
  width: 100%;
}
</style>
