<template>
  <div :class="$style.container" @click="menu = !menu">
    <Brazil v-show="selectedLanguage === 'pt-BR'" />
    <US v-show="selectedLanguage === 'en'"/>
    {{ $t(`language.${selectedLanguage}`) }}
    <ArrowDown />
    <div v-show="menu" :class="$style.menuContainer">
      <div
        v-for="lang of languages"
        :class="$style.option"
        @click="changeLanguage(lang)" 
        >
        <label :for="lang">
          {{ $t(`language.${lang}`) }}
        </label>
        <Brazil
          v-if="lang === 'pt-BR'"
          width="16"
        />
        <US
          v-if="lang === 'en'"
          width="16"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import { app } from '@/main.ts';
import Brazil from '@/components/icons/brazil.vue';
import US from '@/components/icons/us.vue';
import ArrowDown from '@/components/icons/arrow-down.vue';

type Props = {
  language: string;
};

const props = withDefaults(defineProps<Props>(), {
  language: 'pt-BR',
});

const selectedLanguage = ref(props.language);

const languages = ['pt-BR', 'en'];

const menu = ref(false);

const instance = getCurrentInstance();

function changeLanguage(lang: string) {
  app.config.globalProperties.$i18n.locale = lang;
  selectedLanguage.value = lang;
}

</script>

<style lang="scss" module>
.container {
  position: relative;
  width: 150px;
  height: 50px;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border: solid .03em #0d4d9c;
  cursor: pointer;
  margin-right: 10%;
  border-radius: 4px;
  background-color: #051d3b;

  &:hover {
    border: solid 1px #308dff;
  }
}

.menuContainer {
  position: absolute;
  left: 0;
  top: calc(100% + 1px);
  width: calc(100% + 1px);
  background-color: #051d3b;
  border-radius: 4px;
  border: solid .03em #0d4d9c;
}

.option {
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>