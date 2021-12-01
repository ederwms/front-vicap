<template>
  <div class="home__container">
    <h1>Solicitações de Legendas</h1>

    <div class="home__filters">
      <sg-input
        v-model="jobsFilter"
        class="filters__input"
        placeholder="Buscar"
        @input="onFilterJobs"
      />

      <sg-button class="filters__add-job-btn" @click="isNewTranscriptionModalOpen = true">
        Adicionar solicitação
      </sg-button>
    </div>

    <div class="home__jobs-container">
      <div class="home__jobs-wrapper">
        <div
          v-for="(job, index) in getterTranscriptionJobs"
          :key="index"
          class="job"
        >
          <div class="job__video-thumbnail" :style="`background-image: url(${job.videoThumbnail});`" />

          <div class="job__body">
            <div class="body__header">
              <div
                class="header__job-status"
                :class="{
                  'job-status--completed': job.status === 'COMPLETED',
                  'job-status--in-progress': job.status === 'IN_PROGRESS',
                  'job-status--failed': job.status === 'FAILED'
                }"
              >
                <icon
                  :name="getIconName(job.status)"
                  size="18"
                  :color="job.status === 'IN_PROGRESS' ? scssColors['background'] : scssColors['text']"
                />

                <span class="job-status__name">
                  {{ getStatusName(job.status) }}
                </span>
              </div>

              <span class="header__job-name">
                {{ job.name }}
              </span>
            </div>

            <div class="body__job-date">
              <p class="job-date__start-time">
                <icon
                  name="clock-icon"
                  size="20"
                  :color="scssColors['text']"
                />

                {{ format(new Date(job.startTime), 'Pp') }}
              </p>

              <p class="job-date__end-time">
                <icon
                  name="clock-check-icon"
                  size="20"
                  :color="scssColors['text']"
                />

                {{ job.endTime ? format(new Date(job.endTime), 'Pp') : '-' }}
              </p>
            </div>

            <sg-button
              class="body__details-btn"
              block
              @click="detailJob(job)"
            >
              Ver resultados
            </sg-button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <new-transcription-modal
    :is-open="isNewTranscriptionModalOpen"
    width="600px"
    height="500px"
    @close="isNewTranscriptionModalOpen = false"
  />

  <transcription-details-modal
    :is-open="transcriptionDetailsModalData.isOpen"
    :transcription-job="transcriptionDetailsModalData.job"
    @close="closeTranscriptionDetailsModal"
  />

  <loading-overlay :is-loading-on="isLoading" />
</template>

<script src="./script.js" />

<style lang="scss">
  @import './style.scss';
</style>
