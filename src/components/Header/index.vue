<template>
  <header class="sg-header">
    <div class="sg-header__brand">
      <icon
        class="brand__icon"
        name="video-subtitle-icon"
        :color="scssColors.secondary"
        :secondary-color="scssColors.primary"
        :size="30"
      />

      <h4 class="brand__title">
        Gerador de Legendas Online
      </h4>
    </div>
  </header>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
