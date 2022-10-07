<template>
  <section :class="$style.container">
    <header>
      <h1>
        {{ $t('accessibility.quiz') }}
      </h1>
    </header>
    <p>
      Vamos testar seu conhecimento sobre acessibilidade.
    </p>
    <p>
      Que comecem os jogos!
    </p>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
.container {
  cursor: pointer;
  width: 80%;
  max-width: 1080px;
  margin: 32px auto;
}
</style>