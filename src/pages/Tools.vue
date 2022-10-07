<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <Tools />
      <h1 :class="$style.title">
        {{ $t('accessibility.tools') }}
      </h1>
    </header>
    <Accordion
      v-for="tool of tools"
      :title="tool"
      :class="$style.accordion"
    />
  </section>
</template>

<script lang="ts" setup>
import Tools from '@/components/icons/tools.vue';
import Accordion from '@/components/Accordion.vue';

const tools = [
  'axe',
  'accessi',
  'a11y',
  'google-chrome-accessibility-developer-tools',
  'wave',
  'pa11y',
  'crownpeak',
  'ibm',
  'chrome-lens',
  'screen-readers'
];

</script>

<style lang="scss" module>
.container {
  cursor: pointer;
  width: 80%;
  max-width: 1080px;
  margin: 32px auto;
}

.header {
  display: flex;
}

.title {
  margin-left: 16px;
  color: #dc6ebe;
}

.accordion {
  margin: 16px 0;
}
</style>