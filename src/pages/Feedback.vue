<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <Feedback />
      <h1 :class="$style.title">
        {{ $t('accessibility.feedback') }}
      </h1>
    </header>
    <p :class="$style.message">
      Gostaria de saber se o seu site está dentro dos padrões de acessibilidade?
    </p>
    <p :class="$style.message">
      Envie um e-mail para nós e iremos analisar o seu site.
    </p>
    <form :class="$style.form">
      <p :class="$style.containerInput">
        <label for="">Nome:</label>
        <input type="text" :class="$style.input">
      </p>
      <p :class="$style.containerInput">
        <label for="">Email:</label>
        <input type="text" :class="$style.input">
      </p>
      <p :class="$style.containerInput">
        <label for="">URL do site ou repositório do github:</label>
        <input type="text" :class="$style.input">
      </p>
      <button :class="$style.button">Enviar</button>
    </form>
  </section>
</template>

<script lang="ts" setup>
import Feedback from '@/components/icons/feedback.vue';
</script>

<style lang="scss" module>
.container {
  cursor: pointer;
  width: 80%;
  max-width: 1080px;
  margin: 32px auto;
}

.header {
  margin-bottom: 32px;
  color: #ff8c2a;
  display: flex;

  .title {
    margin-left: 16px;
    font-size: 32px;
  }
}

.message {
  font-size: 18px;
}

.form {
  margin: 32px 0;
}

.containerInput {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
}

.input {
  width: 80%;
  margin-top: 8px;
  padding: 8px 16px;
  background: #051d3b;
  border: solid 0.03em #0d4d9c;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
  cursor: pointer;
  border-radius: 4px;
  caret-color: #fff;

  &:focus {
    outline: none;
    border: solid 1px #308dff;
  }
}

.button {
  border: none;
  background: green;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
}
</style>