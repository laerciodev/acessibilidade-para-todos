<template>
  <p>
    A tag <code>&lt;a&gt;</code> sempre deverá ter uma boa descrição.
    Um texto de link acessível é um texto que faz sentido sem qualquer contexto.
    Um texto de link deve explicar claramente quais informações o leitor obterá clicando nesse link.
    O attributo role também é imprescindível para que o leitor de tela saiba que o elemento é um link.
  </p>
  <h4 :class="$style.title">
    <Close />
    Incorreto:
  </h4>
  <pre>
    <code :class="$style.code">
      <span class="tag">&lt;a</span>
      <span :class="$style.attribute">href</span>=<span class="value">"#"</span>
      <span class="tag">&gt;</span>
      <span class="content">Saiba mais</span>
      <span class="tag">&lt;/a&gt;</span>
    </code>
  </pre>
  <h4 :class="[$style.title, $style.check]">
    <div :class="$style.containerCheck">
      <Check />
      Correto:
      <Clipboard :class="$style.clipboard" />
    </div>
  </h4>
  <pre>
    <code :class="$style.code" id="code">
      <span class="tag">&lt;a</span>
      <span :class="$style.attribute">href</span>=<span class="value">"https://www.w3.org/standards/webdesign/accessibility"</span>
      <span :class="[$style.attribute]">role</span>=<span class="value">"link"</span>
      <span class="tag">&gt;</span>
      <span class="content">Saiba mais sobre acessibilidade</span>
      <span class="tag">&lt;/a&gt;</span>
    </code>
  </pre>
</template>

<script lang="ts" setup>
import Check from '@/components/icons/check.vue';
import Close from '@/components/icons/close.vue';
import Clipboard from '@/components/icons/clipboard.vue';

</script>

<style lang="scss" module>
.title {
  width: 100px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.check {
    position: relative;
    width: 100%;

    .clipboard {
      position: absolute;
      right: 0;
      top: 10px;
    }
  }
}

.code {
  display: flex;
  width: 100%;
  color: #fff;
  background-color: #051d3b;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
  border-radius: 8px;
  padding: 24px 16px;
  overflow-y: hidden;

  .attribute {
    margin-left: 8px;
  }
}
</style>