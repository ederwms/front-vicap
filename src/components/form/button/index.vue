<template>
  <button
    class="sg-button"
    :class="{
      'sg-button--icon': icon,
      'sg-button--block': block
    }"
    @click="$emit('click')"
  >
    <slot>Texto</slot>
  </button>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
