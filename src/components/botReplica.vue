<script>
import { ref, watch, computed } from "vue";

export default {
  name: "botReplica",
  props: ["botReplica"],
  emits: ["change"],
  setup(props) {
    const isEditing = ref(false);
    const text = ref("");
    const botReplica = computed(() => {
      return props.botReplica;
    });
    watch(botReplica, () => {
      isEditing.value = false;
    });
    return {
      props,
      isEditing,
      text,
    };
  },
};
</script>

<template>
  <div v-if="isEditing === false" class="replica">
    <p>{{ props.botReplica }}</p>
    <button
      @click="
        () => {
          isEditing = true;
          text = props.botReplica;
        }
      "
      class="right-self blue"
    >
      Изменить
    </button>
  </div>
  <div v-else class="row">
    <div>
      <div>Реплика бота:</div>
      <textarea v-model="text" />
    </div>
    <div>
      <button
        @click="
          () => {
            $emit('change', text);
            isEditing = false;
          }
        "
        class="green margin3"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.replica {
  border: 1px black solid;
  border-radius: 10%;
  display: flex;
  justify-content: space-between;
  color: brown;
}
.blue {
  background: rgba(0, 0, 255, 0.2);
}
.right-self {
  align-self: right;
}
.green {
  background: rgba(0, 128, 0, 0.2);
}

.margin3 {
  margin: 3px;
}
</style>
