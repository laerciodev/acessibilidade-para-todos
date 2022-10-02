<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <Eye />
      <h1 :class="$style.title">
        Deficiência visual
      </h1>
    </header>
    <div :class="$style.tags">
      <span :class="$style.tag">
        a
      </span>
    </div>
    <Anchor />
  </section>
</template>

<script lang="ts" setup>
import Eye from '@/components/icons/eye.vue';
import Anchor from '@/components/anchor.vue';

const tags = ['a', '']
</script>

<style lang="scss" module>
.header {
  display: flex;
}

.title {
  margin-left: 16px;
  color: #00c86f;
}

.container {
  cursor: pointer;
  width: 80%;
  max-width: 1080px;
  margin: 32px auto;
}

.article {
  font-size: 18px;
  line-height: 34px;
}

.tags {
  margin: 32px 0;
}

.tag {
  display: inline-block;
  text-align: center;
  width: 50px;
  padding: 8px 16px;
  background-color: #051d3b;
  border-radius: 6px;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
  border: solid .03em #0d4d9c;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}


</style>