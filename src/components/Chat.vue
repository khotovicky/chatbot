<script>
import { computed, ref } from "vue";
import { getIdForNextChild } from "../utils/getIdForNextChild";
import { deleteTreeBranch } from "../utils/deleteTreeBranch";
import { initialTree } from "../initialDialogTree";
import theDialog from "../components/Dialog.vue";
import UserAnswerOptions from "../components/userAnswerOptions.vue";
import BotReplica from "./botReplica.vue";

const dialogTree = ref(initialTree);
const currentId = ref(dialogTree.value[0].id);
const currentDialogPiece = computed(() => {
  const dialogPiece = dialogTree.value.find(({ id }) => id === currentId.value);
  return dialogPiece;
});
const dialog = ref([
  { text: currentDialogPiece.value.botReplica, class: "botReplica" },
]);
const needBackButton = computed(() => {
  if (currentDialogPiece.value.id === "01") {
    return false;
  }
  return true;
});

function addReplicaToDialog() {
  dialog.value.push(
    { text: currentDialogPiece.value.userReplica, class: "userReplica" },
    { text: currentDialogPiece.value.botReplica, class: "botReplica" }
  );
}

function handleOptionSelection(answerOption) {
  console.log(currentDialogPiece.value);
  currentId.value = answerOption.id;
  console.log(currentDialogPiece.value);
}

function goBack() {
  const newId = String(currentId.value).slice(0, currentId.value.length - 2);
  currentId.value = newId;
}

function updateDialogBeginning(isDialogNew) {
  const dialogBeginning = {
    text: currentDialogPiece.value.botReplica,
    class: "botReplica",
  };
  if (isDialogNew) {
    dialog.value = [dialogBeginning];
  } else {
    dialog.value.push(dialogBeginning);
  }
}

function deleteAnswerOption(index) {
  if (
    currentDialogPiece.value.userAnswerOptions[index].id <
    currentDialogPiece.value.idForNextChild
  ) {
    currentDialogPiece.value.idForNextChild =
      currentDialogPiece.value.userAnswerOptions[index].id;
  }
  dialogTree.value = deleteTreeBranch(
    currentDialogPiece.value.userAnswerOptions[index].id,
    dialogTree.value
  );
  currentDialogPiece.value.userAnswerOptions.splice(index, 1);
}

function addUserAnswerOption(userReplica, botReplica) {
  const newUserAnswerOption = {
    id: currentDialogPiece.value.idForNextChild,
    text: userReplica,
  };
  currentDialogPiece.value.userAnswerOptions.push(newUserAnswerOption);
  currentDialogPiece.value.idForNextChild = getIdForNextChild(
    currentDialogPiece.value
  );
  dialogTree.value.push({
    id: newUserAnswerOption.id,
    userReplica,
    botReplica,
    userAnswerOptions: [],
    idForNextChild: newUserAnswerOption.id + "01",
  });
}

export default {
  name: "chatWindow",
  props: ["mode"],
  components: {
    theDialog,
    UserAnswerOptions,
    BotReplica,
  },
  setup(props) {
    return {
      props,
      dialog,
      currentDialogPiece,
      goBack,
      updateDialogBeginning,
      deleteAnswerOption,
      addUserAnswerOption,
      handleOptionSelection,
      needBackButton,
      addReplicaToDialog,
    };
  },
};
</script>

<template>
  <div v-if="props.mode === 'user'" class="flex">
    <theDialog :dialog="dialog" />
    <UserAnswerOptions
      :options="currentDialogPiece.userAnswerOptions"
      @handle-select="
        (option) => {
          handleOptionSelection(option);
          addReplicaToDialog();
        }
      "
      :needBackButton="needBackButton"
      @go-back="
        () => {
          goBack();
          updateDialogBeginning(false);
        }
      "
    />
  </div>
  <div v-else class="flex">
    <BotReplica
      :botReplica="currentDialogPiece.botReplica"
      @change="
        (text) => {
          currentDialogPiece.botReplica = text;
          updateDialogBeginning(true);
        }
      "
    />
    <UserAnswerOptions
      :options="currentDialogPiece.userAnswerOptions"
      @handle-select="handleOptionSelection"
      :needBackButton="needBackButton"
      @go-back="
        () => {
          goBack();
          updateDialogBeginning(true);
        }
      "
      :redactor="true"
      @delete="deleteAnswerOption"
      @add="addUserAnswerOption"
    />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
