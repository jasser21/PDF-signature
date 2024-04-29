<script setup lang="ts">
import SignHeader from './SignHeader.vue';
import SignFooter from './SignFooter.vue';
import SignLoading from './SignLoading.vue';
import SignToast from './SignToast.vue';
</script>

<template>
  <router-view>
  </router-view>
  <sign-loading />
  <sign-toast />
</template>

<style lang="postcss">
#app {
  @apply w-full overflow-x-hidden;
}

.slide-fade-enter-active {
  @apply transition-all duration-300 ease-out;
}

.slide-fade-leave-active {
  @apply transition-all duration-300 ease-in-page;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply opacity-0 translate-x-5;
}
</style>
