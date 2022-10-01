<template>
  <header class="header">
    <Logo />
    <SelectLanguage language="pt-BR" />
  </header>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
import SelectLanguage from '@/components/SelectLanguage.vue';

</script>

<style>
.header {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(9, 18, 56, 0.3);
}
</style>