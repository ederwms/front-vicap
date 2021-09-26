<template>
  <sg-modal
    :is-open="isOpen"
    width="85%"
    height="85%"
    @close="close"
  >
    <header class="transcription-modal__header">
      <span class="header__title">
        Detalhes: <span class="title__job-name">{{ transcriptionJob.name }}</span>
      </span>

      <sg-button
        icon
        aria-label="Fechar"
        @click="close"
      >
        <icon
          name="close-icon"
          :color="scssColors.primary"
          :size="22"
        />
      </sg-button>
    </header>

    <main class="transcription-modal__body">
      <div class="body__videos">
        <div class="videos__original-video">
          <p class="original-video__title">
            Vídeo Original
          </p>

          <video-js
            :options="originalVideoOptions"
            width="500px"
            height="350px"
          />
        </div>

        <div class="videos__subtitle-icon">
          <icon
            class="brand__icon"
            name="video-subtitle-icon"
            :color="scssColors.secondary"
            :size="40"
          />
        </div>

        <div class="videos__subtitled-video">
          <p class="subtitled-video__title">
            Vídeo Legendado
          </p>

          <video-js
            :options="subtitledVideoOptions"
            width="500px"
            height="350px"
          />
        </div>
      </div>

      <sg-button
        class="body__download-btn"
        block
        @click="downloadSubtitledVideo()"
      >
        Fazer download do vídeo legendado
      </sg-button>
    </main>
  </sg-modal>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
