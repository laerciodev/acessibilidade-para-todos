<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <Ear />
      <h1 :class="$style.title">
        {{ $t('accessibility.ear') }}
      </h1>
    </header>
    <article>
      <p>
        Nesta seção, iremo falar sobre a Ferramenta Hand Talk possibilita acessibilidade digital a milhões de pessoas surdas.
      </p>
      <br/>
      <p>
        Segundo a Organização Mundial da Saúde (OMS), mais de 360 milhões de pessoas possuem deficiência auditiva no mundo; no Brasil esse número ultrapassa os 10 milhões (IBGE).
      </p>
      <br />
      <p>
        A língua utilizada pela comunidade surda brasileira é a Libras (Língua Brasileira de Sinais), reconhecida por lei como uma língua, assim como o português. Isso acontece porque a Libras trabalha exclusivamente com a comunicação visual, diferentemente da língua portuguesa, um idioma processado a partir de sons, o que torna o aprendizado por parte dos surdos mais difícil – a maioria das escolas do país ainda não consegue oferecer uma boa estrutura de ensino para os surdos.
      </p>
      <br />
      <p>
        Ao trazermos esse assunto para a esfera digital, o problema ganha um contorno preocupante: a falta de acessibilidade em Línguas de Sinais faz com que a internet esteja praticamente offline para uma parcela significativa da população, que não consegue consumir qualquer tipo de conteúdo. Apesar de ser obrigatória por lei desde janeiro de 2016, quando a Lei Brasileira de Inclusão entrou em vigor, a acessibilidade digital ainda está longe de ser uma realidade no Brasil. Menos de 1% dos sites brasileiros está acessível.
      </p>
      <br />
      <p>
        Diante desse contexto e por ser parte de seu propósito, o site da Adimax, além de já possuir acessibilidade para pessoas com deficiência visual, agora disponibiliza a ferramenta Hand Talk, um plugin em Libras com dois tradutores virtuais, o Hugo e a Maya, que fazem a tradução automática de texto e áudio para a Línguas de Sinais.
      </p>
      <br />
      <p>
        Este é mais um passo que a Adimax acredita ser um avanço para a acessibilidade, mostrando que é possível disponibilizar uma tecnologia fácil, interativa e que abra as portas para um público de milhões de pessoas de forma inovadora e socialmente responsável.
      </p>
    </article>
  </section>
</template>

<script lang="ts" setup>
import Ear from '@/components/icons/ear.vue';
</script>

<style lang="scss" module>
.container {
  width: 80%;
  margin: 32px auto;
  font-size: 16px;
  line-height: 31px;
}

.header {
  margin-bottom: 32px;
  color: #6bd1ff;
  display: flex;

  .title {
    margin-left: 16px;
    font-size: 32px;
  }
}
</style>