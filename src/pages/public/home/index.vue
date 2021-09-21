<template>
  <sg-header />

  <div
    v-for="(
      job, index
    ) in getterTranscriptionJobs"
    :key="index"
  >
    <!-- TODO -->
    <!--
      Campos para se mostrar aqui:
      [ ] Nome
      [ ] Hora de início da solicitação
      [ ] Hora de término do serviço (Se o status for FAILED, não tem essa data)
      [ ] Vídeo original
      [ ] Status (Se status for FAILED, mostrar razão da falha no detalhar)
    -->
    {{ job.name }}
  </div>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
