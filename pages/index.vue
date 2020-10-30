<template>
  <div class="container">
    <div v-if="!reported" class="grid grid-cols-1">
      <h1 class="title">WHO DO YOU WANT TO REPORT?</h1>
      <div class="grid grid-cols-2">
        <input
          v-model="currentReportee"
          class="text-3xl border-solid border-2 border-gray-400 p-5"
          type="text"
          @keydown.enter="report()"
        />
        <button
          class="border-solid border-2 border-red-900"
          type="submit"
          @click="report()"
        >
          REPORT PLAYER!
        </button>
      </div>
    </div>
    <div v-else>
      <h1 class="text-6xl">Reported!</h1>
      <h2 class="text-4xl">
        All of our agents are now taking immediate action against <br />
        <strong>{{ reportee }}</strong>
      </h2>
      <p class="">
        The player "{{ reportee }}" will receive the most appropriate justice
        that you deem necessary in your own mind.
      </p>
      <button
        class="my-20 border-solid border-2 border-brown-500 p-5 text-3xl"
        type="button"
        @click="reset()"
      >
        I am satisfied and I want to report another!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      reported: false,
      currentReportee: '',
      reportee: '',
    }
  },
  methods: {
    reset() {
      this.reported = false
    },
    report() {
      if (!this.currentReportee) return
      this.reportee = this.currentReportee
      this.currentReportee = ''
      this.reported = true
    },
  },
})
</script>

<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
