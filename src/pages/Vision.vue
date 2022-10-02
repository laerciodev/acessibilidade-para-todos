<template>
  <div :class="$style.container">
    <article :class="$style.article">
      <!-- <p>
        Nesta seção, iremos tentar fugir um pouco do padrão de conteúdo sobre acessibilidade espalhados pela internet.
        Nosso foco aqui será exibir trechos de código HTML seguindo boas práticas.
      </p>
      <p>
        Escolha sua tag favorita e veja as dicas de boas práticas.
      </p>
      <p>Are you ready to the show?</p> -->
    </article>
    <div :class="$style.tags">
      <span :class="$style.tag">
        a
      </span>
    </div>
    <Anchor />
  </div>
</template>

<script lang="ts" setup>
import Anchor from '@/components/anchor.vue';

const tags = ['a', '']
</script>

<style lang="scss" module>
.container {
  cursor: pointer;
  width: 80%;
  max-width: 1080px;
  margin-left: 10%;
  margin-top: 16px;
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