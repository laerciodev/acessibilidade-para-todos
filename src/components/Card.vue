<template>
  <div :class="[$style.card, color]" @click="goTo">
    <Eye v-if="props.icon === 'eye'" />
    <Ear v-if="props.icon === 'ear'" />
    <Puzzle v-if="props.icon === 'autism'" />
    <Question v-if="props.icon === 'quiz'" />
    <Tools v-if="props.icon === 'tools'" />
    <Lightbuib v-if="props.icon === 'lightbulb'" />
    <Feedback v-if="props.icon === 'feedback'" />

    <h4 :class="$style.title">
      {{ $t(`accessibility.${props.icon}`) }}
    </h4>
  </div>
</template>

<script lang="ts" setup>
import { useCssModule, computed } from 'vue';
import { useRouter } from 'vue-router';

import Eye from './icons/eye.vue';
import Ear from './icons/ear.vue';
import Puzzle from './icons/puzzle.vue';
import Question from './icons/question.vue';
import Tools from './icons/tools.vue';
import Lightbuib from './icons/lightbuib.vue';
import Feedback from './icons/feedback.vue';

type Props = {
  icon: string;
  to: string,
}

type Icon = {
  [eye: string]: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'eye',
  to: '/'
});

const styles = useCssModule();
const color = computed(() => {
  const icons: Icon = {
    eye: styles.eye,
    ear: styles.ear,
    autism: styles.autism,
    quiz: styles.quiz,
    tools: styles.tools,
    lightbulb: styles.lightbulb,
    feedback: styles.feedback,
  }

  return icons[props.icon];
});

const router = useRouter();

const goTo = () => {
  router.push(props.to);
}

</script>

<style lang="scss" module>
.card {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #051d3b;
  border-radius: 8px;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
  border: solid .03em #0d4d9c;
  cursor: pointer;
  padding: 20px;
  
  &.eye {
    color: #00c86f;
  }

  &.ear {
    color: #6bd1ff;
  }

  &.autism {
    color: #9cd33b;
  }

  &.quiz {
    color: #f16165;
  }

  &.tools {
    color: #dc6ebe;
  }

  &.lightbulb {
    color: #ffba05,
  }

  &.feedback {
    color: #ff8c2a,
  }

  .title {
    margin-left: 16px;
    color: inherit;
  }

  &:hover {
    border: solid 1px #308dff;
    transform: translateY(-10px);
    transition: .3s;
  }
}

</style>