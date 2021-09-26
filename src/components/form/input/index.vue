<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="sg-input">
    <label
      :for="inputRandomId"
      class="sg-input__label"
    >
      {{ label || 'Label' }}
    </label>

    <input
      :id="inputRandomId"
      :type="inputType"
      class="sg-input__field"
      :class="{ 'sg-input--error': errorMessage !== '' }"
      :placeholder="placeholder || 'Placeholder'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="focusInput"
      @blur="blurInput"
    />

    <div class="sg-input__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss">
  @import './style.scss';
</style>

<!--
  NOTE
  No início do arquivo, desabilitei essa regra do eslint pq tava dando um problema com o prettier
  Dps, com tempo, arrumar uma solução melhor
-->
