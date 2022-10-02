<template>
  <footer :class="[
    $style.footer,
    route.path === '/' && $style.home,
  ]">
    {{ $t('pages.home.footer.message') }}
  </footer>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" module>
.footer {
  width: 100%;
  text-align: center;
  padding: 16px 0;
  background-color: rgba(9, 18, 56, 0.3);

  @media (min-width: 768px) {
    &.home {
      position: absolute;
      bottom: 0;
    }
  }
}
</style>