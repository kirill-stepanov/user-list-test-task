<template>
  <div class="loader__wrapper">
    <span class="loader"></span>
  </div>
</template>

<style lang="scss" scoped>
.loader__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #000000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
