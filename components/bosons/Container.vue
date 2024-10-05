<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container {
  width: 40%;
  padding: 20px;
  gap: 20px;
  background-color: #081826;
  width: 40%;
  border-radius: 10px;
  margin: auto;
}
</style>
