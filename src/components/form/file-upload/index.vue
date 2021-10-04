<template>
  <div
    id="file-drag-drop"
    class="file-upload"
  >
    <div v-if="hasFile" class="uploaded-file">
      <icon
        class="uploaded-file__icon"
        name="video-icon"
        size="40"
        :color="scssColors['text']"
      />

      <div class="uploaded-file__file-info">
        <p>
          <span class="file-info__name">
            {{ uploadedFile.name }}
          </span> - {{ formatFileSize(uploadedFile.size) }}

          <icon
            v-if="hasFinishedUploading"
            class="file-info__check-icon"
            name="check-icon"
            size="22"
            :color="scssColors['positive-text']"
          />
        </p>

        <div v-if="!hasFinishedUploading" class="file-info__progress">
          <progress
            class="progress__bar"
            :max="100"
            :value="uploadProgress"
          />
        </div>
      </div>

      <sg-button
        icon
        @click="deleteFile"
      >
        <icon
          class="delete-btn__icon"
          name="trash-icon"
          size="22"
          :color="scssColors['text']"
        />
      </sg-button>
    </div>

    <form
      v-else
      ref="fileForm"
      @drop="handleDroppedFile"
      @drag="handleDrag"
    >
      <div class="drop-area">
        <div class="drop-area__files">
          <icon
            class="files__icon"
            name="upload-icon"
            size="48"
            :color="scssColors['text']"
          />

          <span class="files__message">
            Arraste seu arquivo aqui ou
          </span>

          <label for="input-file">
            <div class="files__browse-btn">
              Selecione um arquivo em seu computador
            </div>
          </label>

          <input
            id="input-file"
            type="file"
            accept="video/mp4"
            @change="handleUploadFile"
          >
        </div>
      </div>
    </form>
  </div>

  <loading-overlay :is-loading-on="isLoading" />
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
