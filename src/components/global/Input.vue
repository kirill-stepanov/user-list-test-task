<script setup lang="ts">
interface Props {
  value: string;
  placeholder: string;
  onChange: (payload: Event) => void;
}

defineProps<Props>();
</script>

<template>
  <input
    class="input"
    :value="value"
    @input="onChange"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
.input {
  padding: 16px 24px;
  margin: 0;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
}

.input:focus,
.input:focus-visible {
  border: none;
  outline: none;
}
</style>
