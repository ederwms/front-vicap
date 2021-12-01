<template>
  <transition name="sg-modal-fade" appear>
    <div
      v-if="isOpen"
      class="sg-modal__backdrop"
    >
      <div
        class="sg-modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :style="`width: ${width}; height: ${height};`"
      >
        <slot>
          <header
            id="modalTitle"
            class="sg-modal__header"
          >
            Título padrão

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

          <section
            id="modalDescription"
            class="sg-modal__body"
          >
            Corpo padrão
          </section>

          <footer class="sg-modal__footer">
            Rodapé padrão

            <sg-button
              aria-label="Fechar"
              @click="close"
            >
              Fechar
            </sg-button>
          </footer>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
