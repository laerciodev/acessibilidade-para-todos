<template>
  <div :class="$style.container">
    <h1 :class="$style.title">
      {{ $t('pages.home.title') }}
    </h1>
  </div>
  <div :class="$style.cards">
    <Card icon="eye" />
    <Card icon="ear" />
    <Card icon="autism" />
    <Card icon="question" />
    <Card icon="tools" />
    <Card icon="lightbulb" />
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue';

</script>

<style module lang="scss">
.container {
  width: 80%;
  text-align: center;
  margin: 32px auto;
}

.title {
  font-size: 32px;
  line-height: 51px;
}

.cards {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  justify-items: center;

  @media(min-width: 468px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>