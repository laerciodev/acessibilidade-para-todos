<template>
  <div class="container" id="clipboard" @click="copy">
    <button :class="$style.button">
      Copiar
      <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="#fff" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H0V512H384V64H282.5C269.4 26.7 233.8 0 192 0zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm-80 64H272h16v32H272 112 96V192h16z"/></svg>
      <span v-if="showTooltip" :class="$style.tooltip">
        copiado
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showTooltip = ref(false);

function copy() {
  const textToCopy = (document.getElementById('code') as HTMLElement).innerText;
  if(navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showTooltip.value = true;
      setTimeout(() => {
        showTooltip.value = false;
      }, 1000);
    })
  } else {
    console.log('Browser Not compatible')
  }
  
}
</script>

<style lang="scss" module>

.container {
  height: 40px;
  display: flex;
  align-items: center;
}
.button {
  position: relative;
  cursor: pointer;
  border: none;
  background: #051d3b;
  border-radius: 8px;
  border: solid 0.03em #0d4d9c;
  color: #fff;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 40x;
  justify-content: space-between;
  padding: 8px 16px;
}

.tooltip {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  padding: 8px 16px;
  border-radius: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
}
</style>