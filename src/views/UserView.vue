<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { appRouters } from "@/constants";
import { useUsersStore } from "@/stores/users";

import UserCard from "@/components/UserCard.vue";
import UserNotFound from "@/components/UserNotFound.vue";
import IconBack from "@/components/icons/IconBack.vue";
import Button from "@/components/global/Button.vue";
import Loader from "@/components/global/Loader.vue";

const route = useRoute();
const router = useRouter();
const usersStore = useUsersStore();

onMounted(() => {
  usersStore.getSelectedUser(route.params.id as string);
});

const goToHomeScreen = () => {
  router.push({ name: appRouters.HOME.name, params: {} });
};
</script>

<template>
  <Button :onClick="goToHomeScreen" :icon="IconBack" />

  <Loader v-if="usersStore.loading" />
  <UserCard
    v-else-if="usersStore.selectedUser"
    :user="usersStore.selectedUser"
  />
  <UserNotFound v-else />
</template>
