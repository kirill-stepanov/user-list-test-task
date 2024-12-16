<script setup lang="ts">
interface Props {
  title: string;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <span class="title">{{ title }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 500;
}

.text {
  font-weight: 500;
  font-size: 16px;
  color: rgb(90, 90, 90);
}
</style>
