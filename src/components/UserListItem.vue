<script setup lang="ts">
import { useRouter } from "vue-router";

import { appRouters } from "@/constants";

import type { UserData } from "@/stores/users";

import Button from "@/components/global/Button.vue";
import IconUserAvatar from "@/components/icons/IconUserAvatar.vue";

interface Props {
  user: UserData;
}

const props = defineProps<Props>();

const router = useRouter();

const showUserInfo = () => {
  router.push({ name: appRouters.USER.name, params: { id: props.user.id } });
};
</script>

<template>
  <div class="user__list__item">
    <div class="user__wrapper">
      <IconUserAvatar class="user__avatar" />

      <div class="user__description">
        <span class="user__title">{{ user.name }}</span>
        <span class="user__email">{{ user.email }}</span>
      </div>
    </div>

    <Button :onClick="showUserInfo" type="danger" text="More" />
  </div>
</template>

<style lang="scss" scoped>
.user__list__item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid rgb(199 199 199);
}

.user__wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user__description {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.user__avatar {
  width: 46px;
  height: 46px;
}

.user__title {
  font-weight: 500;
}

.user__email {
  font-weight: 500;
  font-size: 16px;
  color: rgb(90, 90, 90);
}

@media (max-width: 520px) {
  .user__list__item {
    flex-direction: column;
    gap: 10px;
  }

  .button {
    width: 100%;
  }
}
</style>
