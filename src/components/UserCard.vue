<script setup lang="ts">
import { type UserData } from "@/stores/users";

import IconUserAvatar from "@/components/icons/IconUserAvatar.vue";
import UserCardField from "@/components/UserCardField.vue";

interface Props {
  user: UserData;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <IconUserAvatar class="card__icon" />

    <div>
      <UserCardField title="Name: " :text="user.name" />
      <UserCardField title="Username: " :text="user.username" />
      <UserCardField title="Email: " :text="user.email" />
      <UserCardField title="City: " :text="user.address.city" />
      <UserCardField title="Phone: " :text="user.phone" />
      <UserCardField title="Website: " :text="user.website" />
      <UserCardField title="Company name: " :text="user.company.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 16px 24px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  width: fit-content;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
}

.card__icon {
  width: 120px;
  height: 120px;
}

@media (max-width: 520px) {
  .card {
    flex-direction: column;
  }
}
</style>
