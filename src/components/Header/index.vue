<template>
  <div class="sg-header">
    <div class="sg-header__brand">
      <icon
        class="brand__icon"
        name="video-subtitle"
        :color="scssColors.secondary"
        :secondary-color="
          scssColors.primary
        "
        :size="30"
      />

      <h4 class="brand__title">
        Gerador de Legendas Online
      </h4>
    </div>
  </div>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
