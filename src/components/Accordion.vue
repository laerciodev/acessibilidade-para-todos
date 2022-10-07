<template>
  <div>
    <div :class="[$style.accordion, showContent && $style.showContent]">
      <h3 :class="$style.title">
        {{ props.title }}
      </h3>
      <PlusCircle v-show="!showContent" @click="showContent = true" />
      <MinusCircle v-show="showContent" @click="showContent = false" />
    </div>
    <div 
      v-if="showContent"
      :class="[$style.accordion, $style.showContent, $style.content]">
      <slot>
        {{ $t(`pages.tools.${props.title}`) }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PlusCircle from '@/components/icons/plus.vue';
import MinusCircle from '@/components/icons/minus.vue';

type Props = {
  title: string;
}

const showContent = ref(false);

const props = withDefaults(defineProps<Props>(), {
  title: '',
});

</script>

<style lang="scss" module>
.accordion {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #051d3b;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
  border: solid .03em #0d4d9c;
  cursor: pointer;
  padding: 20px;
  user-select: none;

  .title {
    font-size: 18px;
  }

  &.showContent {
    border: solid .03em #dc6ebe;
    &.content {
      font-size: 16px;
      line-height: 31px;
    }
  }

}
</style>