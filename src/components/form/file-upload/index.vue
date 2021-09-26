<template>
  <div
    id="file-drag-drop"
    class="file-upload"
  >
    <div v-if="modelValue" class="uploaded-file">
      <icon
        class="uploaded-file__icon"
        name="video-icon"
        size="40"
        :color="scssColors['text']"
      />

      <span class="uploaded-file__file-info">
        <span class="file-info__name">
          {{ modelValue.name }}
        </span> - {{ formatFileSize(modelValue.size) }}
      </span>

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
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
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
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
