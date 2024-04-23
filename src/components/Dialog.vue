<script>
export default {
  name: "theDialog",
  props: ["dialog"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template>
  <div
    v-for="(replica, index) in props.dialog"
    class="replica"
    :class="replica.class"
    :key="index"
  >
    {{ replica.text }}
  </div>
</template>

<style scoped>
.replica {
  border: 1px black solid;
  border-radius: 10%;
}
.botReplica {
  color: brown;
  text-align: left;
}
.userReplica {
  text-align: right;
}
</style>
