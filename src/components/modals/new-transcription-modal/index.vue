<template>
  <sg-modal :is-open="isOpen">
    <header class="new-transcription-modal__header">
      <span class="header__title">
        Nova solicitação
      </span>

      <sg-button
        icon
        @click="close"
      >
        <icon
          name="close-icon"
          :color="scssColors.primary"
          :size="22"
        />
      </sg-button>
    </header>

    <main class="new-transcription-modal__body">
      <sg-input
        v-model="jobName"
        placeholder="solicitacao-02"
        label="Nome da nova solicitação"
      />

      <div class="body__file-upload-wrapper">
        <label class="file-upload__label">
          Arquivo
        </label>

        <sg-file-upload v-model="uploadedFile" />
      </div>
    </main>

    <footer class="new-transcription-modal__footer">
      <sg-button class="footer__send-btn">
        Solicitar legendas para vídeo
      </sg-button>
    </footer>
  </sg-modal>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
