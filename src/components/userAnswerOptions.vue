<script>
import AnswerOption from "./answerOption.vue";
import AddingNewDialogPieceForm from "./addingNewDialogPieceForm.vue";

export default {
  name: "userAnswerOptions",
  props: ["options", "needBackButton", "redactor"],
  emits: ["handle-select", "go-back", "delete", "add"],
  components: {
    AnswerOption,
    AddingNewDialogPieceForm,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template>
  <div class="user-answer-options">
    <div v-for="(answerOption, index) in props.options" :key="index">
      <AnswerOption
        class="answer"
        :answerOption="answerOption"
        :index="index"
        :redactor="props.redactor"
        @handle-select="$emit('handle-select', answerOption)"
        @delete="$emit('delete', index)"
      />
    </div>
    <div v-if="props.redactor" class="left">
      <AddingNewDialogPieceForm
        @add="
          (userReplica, botReplica) => $emit('add', userReplica, botReplica)
        "
        class="add-form"
      />
    </div>
    <button v-if="props.needBackButton" @click="$emit('go-back')">Назад</button>
  </div>
</template>

<style scoped>
.add-form {
  background: rgba(0, 128, 0, 0.1);
  border: 1px solid green;
  padding: 3px;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.user-answer-options {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
}
.answer {
  display: flex;
  border: 1px solid green;
}
</style>
