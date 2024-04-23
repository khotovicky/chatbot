<script>
import { ref } from "vue";

export default {
  name: "answerOption",
  props: ["answerOption", "index", "redactor"],
  emits: ["handle-select", "delete"],
  setup(props) {
    const isEditing = ref(false);
    return {
      props,
      isEditing,
    };
  },
};
</script>

<template>
  <div v-if="isEditing === false" class="flex">
    <button @click="$emit('handle-select', props.answerOption)" class="button">
      {{ props.answerOption.text }}
    </button>
    <div class="redactor" v-if="props.redactor">
      <button @click="isEditing = true" class="redactor-item blue">
        Изменить
      </button>
      <button @click="$emit('delete', props.index)" class="redactor-item red">
        Удалить
      </button>
    </div>
  </div>
  <div v-else>
    <textarea class="redactor-input" v-model="props.answerOption.text" />
    <button class="redactor" @click="isEditing = false">Сохранить</button>
  </div>
</template>

<style>
.flex {
  display: flex;
}
.button {
  flex: 2 1 100px;
}
.redactor {
  flex: 1 1 0;
}

.redactor-item {
  height: 50%;
  width: 100%;
}
.redactor-input {
  height: 50px;
  width: 100%;
}
.red {
  background: rgba(255, 0, 0, 0.2);
}
.blue {
  background: rgba(0, 0, 255, 0.2);
}
</style>
