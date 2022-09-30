<template>
  <header class="header">
    <Logo />
  </header>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
</script>

<style>
.header {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(9, 18, 56, 0.3);
}
</style>