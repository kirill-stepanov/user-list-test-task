<script setup lang="ts">
import { type UserData } from "@/stores/users";

import UserListItem from "@/components/UserListItem.vue";

interface Props {
  users: UserData[];
}

defineProps<Props>();
</script>

<template>
  <div class="user__list">
    <UserListItem v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style lang="scss" scoped>
.user__list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
