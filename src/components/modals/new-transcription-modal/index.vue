<template>
  <sg-modal
    width="700px"
    height="500px"
    :is-open="isOpen"
  >
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

        <sg-file-upload v-model="uploadedFileUrl" />
      </div>
    </main>

    <footer class="new-transcription-modal__footer">
      <sg-button class="footer__send-btn" @click="createNewJob">
        Solicitar legendas para vídeo
      </sg-button>
    </footer>
  </sg-modal>

  <loading-overlay :is-loading-on="isLoading" />
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
