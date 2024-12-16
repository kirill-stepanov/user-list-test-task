<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { useUsersStore } from "@/stores/users";

import UserList from "@/components/UserList.vue";
import Input from "@/components/global/Input.vue";
import Loader from "@/components/global/Loader.vue";

const usersStore = useUsersStore();

const timer = ref<number | NodeJS.Timeout | null>(null);
const searchValue = ref<string>("");

const handleSearch = (event: Event) => {
  timer.value !== null && clearTimeout(timer.value);

  const value = (event.target as HTMLInputElement)?.value;

  timer.value = setTimeout(() => {
    searchValue.value = value;
  }, 500);
};

const filteredUsers = computed(() =>
  usersStore.users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.value.toLowerCase())
  )
);

onMounted(() => {
  usersStore.getUsers();
});
</script>

<template>
  <Input
    :value="searchValue"
    :onChange="handleSearch"
    placeholder="Type to search users..."
  />

  <Loader v-if="usersStore.loading" />
  <UserList v-else :users="filteredUsers" />
</template>
